module StackedBarChart exposing (renderList)

import Axis
import Color exposing (Color)
import List.Extra as List
import Scale exposing (BandConfig, BandScale, ContinuousScale, defaultBandConfig)
import Scale.Color
import Shape exposing (StackConfig, StackResult)
import TypedSvg exposing (g, rect, svg)
import TypedSvg.Attributes exposing (class, fill, transform, viewBox)
import TypedSvg.Attributes.InPx exposing (height, width, x, y)
import TypedSvg.Core exposing (Svg)
import TypedSvg.Types exposing (Fill(..), Transform(..))


renderList : List (List Int) -> Svg msg
renderList data =
    view (Shape.stack (config data))


type alias Month =
    Int


type alias RainRate =
    { month : Int
    , min : Int
    , avg : Int
    , max : Int
    }


rainRates : List RainRate
rainRates =
    [ RainRate 0 19 29 39
    , RainRate 1 40 53 77
    , RainRate 2 63 81 108
    , RainRate 3 151 169 192
    , RainRate 4 244 276 346
    , RainRate 5 273 320 377
    , RainRate 6 236 311 377
    , RainRate 7 275 334 420
    , RainRate 8 159 213 282
    , RainRate 9 53 95 132
    , RainRate 10 29 38 46
    , RainRate 11 24 31 44
    ]


series : List { label : String, accessor : RainRate -> Int }
series =
    [ { label = "Min"
      , accessor = .min
      }
    , { label = "Avg"
      , accessor = .avg
      }
    , { label = "Max"
      , accessor = .max
      }
    ]


samples : List (List Int) -> List ( String, List Float )
samples barChartData =
    List.map
        (\{ label, accessor } ->
            ( label
            , List.map (toFloat << accessor)
                (List.indexedMap
                    (\idx rates ->
                        case rates of
                            [ min, avg, max ] ->
                                RainRate idx min avg max

                            _ ->
                                RainRate idx 0 0 0
                    )
                    barChartData
                )
            )
        )
        series


w : Float
w =
    50


h : Float
h =
    40


padding : { bottom : Float, left : Float, right : Float, top : Float }
padding =
    { top = 1
    , left = 2
    , right = 1
    , bottom = 2
    }


config : List (List Int) -> StackConfig String
config barChartData =
    { data = samples barChartData
    , offset = Shape.stackOffsetNone
    , order =
        -- stylistic choice: largest (by sum of values) category at the bottom
        List.sortBy Tuple.second
    }


reverseViridis : Float -> Color
reverseViridis progression =
    -- stylistic choice: the larger boxes look better in brighter colors, so invert the interpolator
    Scale.Color.plasmaInterpolator (1 - progression)


colors : Int -> List Color
colors size =
    let
        colorScale =
            Scale.sequential reverseViridis ( 0, toFloat size - 1 )
                |> Scale.convert
    in
    List.range 0 (size - 1)
        |> List.map (colorScale << toFloat)


column : BandScale Month -> ( Month, List ( Float, Float ) ) -> Svg msg
column xScale ( month, values ) =
    let
        block color ( upperY, lowerY ) =
            rect
                [ x <| Scale.convert xScale month
                , y <| lowerY
                , width <| Scale.bandwidth xScale
                , height <| (abs <| upperY - lowerY)
                , fill (Fill color)
                ]
                []
    in
    g [ class [ "column" ] ] (List.map2 block (colors (List.length values)) values)


view : StackResult String -> Svg msg
view { values, labels, extent } =
    let
        -- transpose back to get the values per month
        yearValues =
            List.transpose values

        months =
            List.map .month rainRates

        xScale : BandScale Month
        xScale =
            Scale.band { defaultBandConfig | paddingInner = 0.01, paddingOuter = 0.02 } ( 0, w - (padding.top + padding.bottom) ) months

        yScale : ContinuousScale Float
        yScale =
            Scale.linear ( h - (padding.left + padding.right), 0 ) extent
                |> Scale.nice 2

        scaledValues =
            List.map (List.map (\( y1, y2 ) -> ( Scale.convert yScale y1, Scale.convert yScale y2 ))) yearValues
    in
    svg [ viewBox 0 0 w h ]
        [ g [ transform [ Translate (padding.left - 1) (h - padding.bottom) ] ]
            [ Axis.bottom [ Axis.tickCount 10 ] (Scale.toRenderable String.fromInt xScale) ]
        , g [ transform [ Translate (padding.left - 1) padding.top ] ]
            [ Axis.left [] yScale ]
        , g [ transform [ Translate padding.left padding.top ], class [ "series" ] ] <|
            List.map (column xScale) (List.map2 (\a b -> ( a, b )) months scaledValues)
        ]
