module Main exposing (City, Model, Msg(..), config, init, main, update, view)

import Array exposing (Array, get)
import Browser exposing (Document)
import DateSelect as SingleDateRangePickerWithInput
import FormatNumber exposing (format)
import FormatNumber.Locales exposing (usLocale)
import Html exposing (Attribute, Html, button, div, h1, input, span, text)
import Html.Attributes as Attributes exposing (class, placeholder, src, style)
import Html.Events exposing (onClick, onInput)
import Http
import HttpExtra
import Json.Decode as Decode exposing (Decoder, decodeString, float, int, nullable, string)
import Json.Decode.Pipeline exposing (hardcoded, optional, required)
import List.Extra exposing (unique)
import RemoteData exposing (RemoteData(..), WebData)
import RemoteData.Http
import SearchData exposing (..)
import Selectize
import StackedBarChart
import Table
import Task
import Time


apiUrl : String
apiUrl =
    -- "http://localhost:3006"
    "https://unli.xyz/neighbourhoods/api"


sharesLocale =
    { usLocale | decimals = 0 }


sharesLocaleOne =
    { usLocale | decimals = 1 }


main =
    Browser.element
        { init = \() -> init cities
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { tableState : Table.State
    , tableQuery : String
    , textfieldSelection : Maybe Search
    , textfieldMenu : Selectize.State Search
    , city : WebData (List City)
    , searchData : WebData (List Search)
    , maxboring : Int
    , maxinteresting : Int
    , singleDateRangePicker : Maybe SingleDateRangePickerWithInput.Model
    }


init : List City -> ( Model, Cmd Msg )
init city =
    let
        model =
            { city = NotAsked
            , searchData = NotAsked
            , tableState = Table.initialSort ""
            , tableQuery = ""
            , textfieldSelection = Nothing
            , textfieldMenu =
                Selectize.closed
                    "textfield-menu"
                    .displayname
                    searchCategories
            , maxinteresting = 5000
            , maxboring = 3000
            , singleDateRangePicker = Nothing
            }
    in
    ( model, Task.perform Initialise Time.now )


type alias City =
    { id : Int
    , n : String
    , s : String
    , c : String
    , u : String
    , lat : String
    , lon : String
    , dist : Int
    , noise : Int
    , popMax : Int
    , rain : List (List Int)
    , coVar : List Int
    , tmp : List (List Int)
    , srad : List (List Int)
    , wind : List (List Int)
    , interesting : List Int
    , boring : List Int
    , safety : List Int
    , danger : List Int
    , coastline : List Int
    , tourismcount : List Int
    , publicTransport : List Int
    , slope : List Int
    , popghs : List Int
    , osmpop : List Int
    , builtEnv : List Int
    , groadsCount : List Int
    , groadsAvgLength : List Int
    , toilets : List Int
    , food : List Int
    , accessibilityToCity : List Int
    , popd : List (List Int)
    , navw : List Int
    , globUrban : List Int
    , globCrop : List Int
    , globForest : List Int
    , globVe : List Int
    , globWet : List Int
    , osmn : List Int
    , dist_sum : Int
    , osm_interesting_interesting_sum_sum : Int
    , osm_boring_boring_sum : Int
    , osm_safe_safety_sum : Int
    , danger_sum : Int
    , coastline_100m_count_sum : Int
    , flickr2_lowview_count_total_sum : Int
    , flickr2_medview_count_total_sum : Int
    , flickr2_highview_count_total_sum : Int
    , public_transport_sum : Int
    , slope100m__mean_sum : Int
    , ghs_gpw_pop_2015__sum_sum : Int
    , ghs_built_lds__mean_sum : Int
    , toilets_sum : Int
    , food_sum : Int
    , access_50k_mean_sum : Int
    , navwater2009__mean_sum : Int
    , globcover_urban_sum : Int
    , globcover_irrigated_cropland_sum : Int
    , globcover_rainfed_cropland_sum : Int
    , globcover_mosiac_cropland_sum : Int
    , dryadv3croplands1992_mean_sum : Int
    , globcover_semideciduous_sum : Int
    , globcover_closed_broadleaved_sum : Int
    , globcover_open_broadleaved_sum : Int
    , globcover_closed_needleleaved_sum : Int
    , globcover_open_needleleaved_sum : Int
    , globcover_mixed_broadleaved_sum : Int
    , globcover_mosiac_forest_sum : Int
    , globcover_mosiac_grassland_sum : Int
    , globcover_shrubland_sum : Int
    , globcover_herbaceous_vegetation_sum : Int
    , globcover_mosiac_vegetation_sum : Int
    , globcover_sparse_vegetation_sum : Int
    , globcover_bare_sum : Int
    , gm_ve_v2__mean_sum : Int
    , globcover_regularly_flooded_forest_sum : Int
    , globcover_permanently_flooded_forest_sum : Int
    , globcover_marsh_sum : Int
    , globcover_water_sum : Int
    , glwd3_lake_sum : Int
    , glwd3_reservoir_sum : Int
    , glwd3_river_sum : Int
    , lakes_glwd3_count_sum : Int
    , lakes_glwd3_mean_sum : Int
    , glwd_2_count_sum : Int
    , glwd_2_area_sum : Int
    , glwd_2_perim_sum : Int
    , globcover_ice_sum : Int
    , globcover_nodata_sum : Int
    , glwd3_marsh_sum : Int
    , glwd3_swamp_sum : Int
    , glwd3_mangrove_sum : Int
    , glwd3_wetland_sum : Int
    , glwd3_bog_sum : Int
    , glwd3_sometimes_wetland_sum : Int
    , glwd3_50_100_wetland_sum : Int
    , glwd3_25_50_wetland_sum : Int
    , glwd3_0_25_wetland_sum : Int
    , hotels_com_price_avg : Int
    , hotels_com_price_min : Int
    , hotels_com_count : Int
    , hcid : String
    , hc_count : Int
    , hc_price_min : Int
    }


cities : List City
cities =
    [ City
        9
        "New York"
        "New York"
        "United States of America"
        "US"
        "40.7519"
        "-73.9820"
        20834
        59
        19040000
        [ [ 80, 90, 98 ], [ 73, 77, 80 ], [ 99, 104, 109 ], [ 90, 100, 111 ], [ 92, 106, 116 ], [ 67, 86, 98 ], [ 87, 105, 119 ], [ 104, 110, 118 ], [ 79, 96, 111 ], [ 81, 88, 98 ], [ 93, 101, 113 ], [ 92, 94, 99 ] ]
        [ 9602, 10817, 14008 ]
        [ [ -810, -50, 570 ], [ -707, 49, 671 ], [ -247, 481, 1130 ], [ 307, 1020, 1686 ], [ 891, 1589, 2270 ], [ 1380, 2091, 2768 ], [ 1827, 2402, 2851 ], [ 1773, 2329, 2778 ], [ 1354, 1910, 2359 ], [ 732, 1313, 1762 ], [ 206, 797, 1245 ], [ -343, 250, 699 ] ]
        [ [ 5722, 6313, 6626 ], [ 8620, 9476, 9879 ], [ 12099, 12937, 13269 ], [ 15952, 16559, 16786 ], [ 18446, 19172, 19533 ], [ 19978, 20787, 21430 ], [ 19696, 20449, 21115 ], [ 17601, 18171, 18699 ], [ 14355, 14533, 14813 ], [ 10422, 10648, 10945 ], [ 6286, 6885, 7191 ], [ 4927, 5571, 5888 ] ]
        [ [ 40000, 47612, 53000 ], [ 41000, 48466, 53000 ], [ 42000, 49270, 53000 ], [ 41000, 47105, 50000 ], [ 35000, 41014, 44000 ], [ 33000, 38792, 41000 ], [ 31000, 36092, 39000 ], [ 29000, 34781, 38000 ], [ 31000, 37433, 41000 ], [ 33000, 39674, 44000 ], [ 37000, 44386, 49000 ], [ 38000, 46370, 52000 ] ]
        [ 29, 1988, 20789 ]
        [ 4, 8099, 26464 ]
        [ 1, 2381, 88454 ]
        [ -74839, 3814, 31436 ]
        [ 1, 28, 67 ]
        [ 5, 2400, 42928 ]
        [ 1, 46, 184 ]
        [ 0, 1198, 5712, 0, 36 ]
        [ 341, 49554, 242305 ]
        [ 484, 518520, 5076177 ]
        [ 16038, 776810, 1000000 ]
        [ 1, 7, 27 ]
        [ 0, 2, 20 ]
        [ 1, 7, 46 ]
        [ 1, 51, 676 ]
        [ 1, 22, 89 ]
        [ [ 0, 2065, 5111 ], [ 0, 2549, 6310 ], [ 0, 3071, 7600 ], [ 1948, 341020, 570628 ], [ 38293, 3029059, 6671686 ], [ 303070, 12464148, 31413921 ], [ 682764, 21694831, 57495518 ], [ 1372591, 33088380, 93904971 ] ]
        [ 109, 115306, 400000, 151520121 ]
        [ 1, 57, 100 ]
        [ 34, 49, 130 ]
        [ 4, 37, 179 ]
        [ 7, 57, 292 ]
        [ 15, 333, 575 ]
        [ 26, 988, 2967 ]
        2001671
        360700
        227255
        1475981
        73650
        125
        40950
        26213
        1967
        6014
        1818816
        4573334
        37810690
        1233
        13073
        3137
        598126
        3705
        558
        237
        283
        4957
        8842
        0
        0
        0
        0
        0
        0
        0
        965
        15
        168
        0
        3
        8758
        87
        0
        18
        460
        10
        0
        0
        10
        5
        4
        109
        300
        0
        0
        0
        0
        0
        0
        0
        0
        0
        0
        0
        80
        30
        200
        "place:Taipei"
        200
        30
    ]



-- TABLE


flagColumn : String -> (data -> String) -> Table.Column data msg
flagColumn name toflags =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewflags (toflags data)
        , sorter = Table.decreasingOrIncreasingBy toflags
        }


viewflags : String -> Table.HtmlDetails msg
viewflags flags =
    Table.HtmlDetails []
        [ Html.img
            [ src "static/blank.gif", class ("flag flag-" ++ String.toLower flags) ]
            []
        ]


distColumn : String -> ((data -> Int) -> (Int -> Table.Column data msg))
distColumn name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewBarChart (String.fromInt (value data // 1000) ++ " km") (100 * value data // maxValue)
        , sorter = Table.increasingBy value
        }


viewBarChart : String -> Int -> Table.HtmlDetails msg
viewBarChart barChartLabel barChartPercent =
    Table.HtmlDetails []
        [ Html.div
            [ class "horizontalBarChart"
            , style "background" ("#0000 linear-gradient(to right, #008b8b 0%, #008b8b " ++ String.fromInt barChartPercent ++ "%, #ececec " ++ String.fromInt barChartPercent ++ "%, #ececec 100%) repeat scroll 0% 0%")
            ]
            [ text barChartLabel ]
        ]


noiseColumn : String -> ((data -> Int) -> (Int -> Table.Column data msg))
noiseColumn name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData =
            \data ->
                viewBarChart
                    (if value data == 0 then
                        "--"

                     else
                        String.fromInt (value data) ++ " db"
                    )
                    (50
                        + (-55
                            + (if value data == 0 then
                                45

                               else
                                value data
                              )
                          )
                        * 3
                    )
        , sorter = Table.decreasingBy value
        }


barChartColumn : String -> (String -> (data -> Int) -> (Int -> Table.Column data msg))
barChartColumn name prefix value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewBarChartThousands prefix (String.fromInt (value data)) (100 * value data // maxValue)
        , sorter =
            if prefix == "$" then
                Table.increasingOrDecreasingBy value

            else
                Table.decreasingOrIncreasingBy value
        }


viewBarChartThousands : String -> String -> Int -> Table.HtmlDetails msg
viewBarChartThousands barChartPrefix barChartLabel barChartPercent =
    Table.HtmlDetails []
        [ Html.div
            [ class "horizontalBarChart"
            , style "background" ("#0000 linear-gradient(to right, #2fc123 0%, #00a200 " ++ String.fromInt barChartPercent ++ "%, #ececec " ++ String.fromInt barChartPercent ++ "%, #ececec 100%) repeat scroll 0% 0%")
            ]
            [ text (barChartPrefix ++ format sharesLocale (String.toFloat barChartLabel |> Maybe.withDefault 0.0)) ]
        ]


doubleBarChartColumn : String -> (data -> Int) -> Int -> (data -> Int) -> Int -> Table.Column data msg
doubleBarChartColumn name valueBad maxValueBad valueGood maxValueGood =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewDoubleBarChart (String.fromInt (max 0 (valueBad data))) (50 - abs (valueBad data // (maxValueBad // 100))) (String.fromInt (valueGood data)) ((valueGood data // (maxValueGood // 100)) + 50)
        , sorter =
            Table.decreasingOrIncreasingBy
                (if String.contains "Risk" name then
                    \data ->
                        if valueBad data > 20 then
                            valueGood data - (3 * valueBad data)

                        else
                            valueGood data

                 else
                    \data ->
                        if valueGood data > (2 * valueBad data) then
                            valueGood data * 2

                        else
                            valueGood data
                )
        }


viewDoubleBarChart : String -> Int -> String -> Int -> Table.HtmlDetails msg
viewDoubleBarChart barChartLabelBad barChartPercentBad barChartLabelGood barChartPercentGood =
    Table.HtmlDetails []
        [ Html.div
            [ class "horizontalBarChart"
            , style "background" ("rgba(0, 0, 0, 0) linear-gradient(to right, rgb(236, 236, 236) " ++ String.fromInt barChartPercentBad ++ "%, rgb(200, 200, 200) " ++ String.fromInt barChartPercentBad ++ "%, rgb(181, 177, 177) 50%, rgb(0, 162, 0) 50%, rgb(178, 193, 174) " ++ String.fromInt barChartPercentGood ++ "%, rgb(236, 236, 236) " ++ String.fromInt barChartPercentGood ++ "%) repeat-y scroll 50% 100%")
            , style "background-position" "50% 100%"
            , style "background-repeat" "repeat-y"
            , style "display" "flex"
            , style "justify-content" "space-between"
            ]
            [ Html.div [ style "marginRight" "20px" ]
                [ text barChartLabelBad
                ]
            , Html.div []
                [ text barChartLabelGood
                ]
            ]
        ]


mwd =
    Maybe.withDefault 0


doubleBarTripleChartColumn : String -> (data -> Array Int) -> Int -> (data -> Array Int) -> Int -> Table.Column data msg
doubleBarTripleChartColumn name valueBad maxValueBad valueGood maxValueGood =
    Table.veryCustomColumn
        { name = name
        , viewData =
            \data ->
                viewDoubleBarTripleChart
                    (get 1 (valueBad data) |> mwd)
                    (50 - abs (get 0 (valueBad data) |> mwd) // maxValueBad)
                    (50 - abs (get 1 (valueBad data) |> mwd) // maxValueBad)
                    (50 - abs (get 2 (valueBad data) |> mwd) // maxValueBad)
                    (get 1 (valueGood data) |> mwd)
                    (50 + ((get 0 (valueGood data) |> mwd) // maxValueGood))
                    (50 + ((get 1 (valueGood data) |> mwd) // maxValueGood))
                    (50 + ((get 2 (valueGood data) |> mwd) // maxValueGood))
        , sorter =
            Table.decreasingOrIncreasingBy
                (if String.contains "Risk" name then
                    \data ->
                        if (get 1 (valueBad data) |> mwd) > 20 then
                            (get 1 (valueGood data) |> mwd) - (3 * (get 1 (valueBad data) |> mwd))

                        else
                            get 1 (valueGood data) |> mwd

                 else
                    \data ->
                        if (get 1 (valueGood data) |> mwd) > (2 * (get 1 (valueBad data) |> mwd)) then
                            (get 1 (valueGood data) |> mwd) * 2

                        else
                            get 1 (valueGood data) |> mwd
                )
        }


viewDoubleBarTripleChart : Int -> Int -> Int -> Int -> Int -> Int -> Int -> Int -> Table.HtmlDetails msg
viewDoubleBarTripleChart barChartLabelBad barChartPercentBadMin barChartPercentBadAvg barChartPercentBadMax barChartLabelGood barChartPercentGoodMin barChartPercentGoodAvg barChartPercentGoodMax =
    Table.HtmlDetails []
        [ Html.div
            [ class "horizontalBarChart"
            , style "background"
                ("rgba(0, 0, 0, 0) linear-gradient(to right, rgb(236, 236, 236) "
                    ++ String.fromInt (max 0 barChartPercentBadMax)
                    ++ "%, rgb(200, 200, 200) "
                    ++ String.fromInt (max 0 barChartPercentBadMax)
                    ++ "%, rgb(181, 177, 177) 50%, rgb(0, 162, 0) 50%, rgb(178, 193, 174) "
                    ++ String.fromInt barChartPercentGoodMax
                    ++ "%, rgb(236, 236, 236) "
                    ++ String.fromInt barChartPercentGoodMax
                    ++ "%) repeat-y scroll 50% 100%"
                )
            , style "background-position" "50% 100%"
            , style "background-repeat" "repeat-y"
            , style "display" "flex"
            , style "justify-content" "space-between"
            ]
            [ Html.div [ style "marginRight" "20px" ]
                [ text (String.fromInt (max 0 barChartLabelBad))
                ]
            , Html.div []
                [ text (String.fromInt barChartLabelGood)
                ]
            ]
        ]


singleBarTripleChartColumn : String -> (data -> Array Int) -> Int -> Table.Column data msg
singleBarTripleChartColumn name valueGood maxValueGood =
    Table.veryCustomColumn
        { name = name
        , viewData =
            \data ->
                viewSingleBarTripleChart
                    (get 1 (valueGood data) |> mwd)
                    ((get 0 (valueGood data) |> mwd) // 10)
                    ((get 1 (valueGood data) |> mwd) // 1000)
                    ((get 2 (valueGood data) |> mwd) // 1000)
        , sorter =
            Table.decreasingOrIncreasingBy (\data -> get 1 (valueGood data) |> mwd)
        }


viewSingleBarTripleChart : Int -> Int -> Int -> Int -> Table.HtmlDetails msg
viewSingleBarTripleChart barChartLabelGood barChartPercentGoodMin barChartPercentGoodAvg barChartPercentGoodMax =
    Table.HtmlDetails []
        [ Html.div
            [ class "horizontalBarChart"
            , style "background"
                ("rgba(0, 0, 0, 0) linear-gradient(to right, #00a200 "
                    ++ String.fromInt barChartPercentGoodMin
                    ++ "%,  #00a200 "
                    ++ String.fromInt barChartPercentGoodAvg
                    ++ "%,  #eee "
                    ++ String.fromInt barChartPercentGoodAvg
                    ++ "%,  #999 "
                    ++ String.fromInt barChartPercentGoodMax
                    ++ "%, #fff "
                    ++ String.fromInt barChartPercentGoodMax
                    ++ "% ) repeat-y scroll 50% 100%"
                )
            , style "background-position" "50% 100%"
            , style "background-repeat" "repeat-y"
            , style "display" "flex"
            , style "justify-content" "space-between"
            ]
            [ Html.div []
                [ text (String.fromInt barChartLabelGood)
                ]
            ]
        ]


materialUIColumn : String -> ((data -> String) -> (String -> Table.Column data msg))
materialUIColumn name value icon =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewMaterialUILink (value data) icon
        , sorter = Table.decreasingOrIncreasingBy value
        }


viewMaterialUILink : String -> String -> Table.HtmlDetails msg
viewMaterialUILink link icon =
    Table.HtmlDetails []
        [ Html.a [ Attributes.href link, Attributes.target "_blank", Attributes.rel "nofollow" ]
            [ Html.i
                [ class "md-dark md-36 material-icons MuiIconButton-root"
                ]
                [ text icon ]
            ]
        ]


stackedBarChartColumn : String -> ((data -> List (List Int)) -> (Int -> Table.Column data msg))
stackedBarChartColumn name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewStackedBarChart (value data)
        , sorter = Table.decreasingOrIncreasingBy value
        }


viewStackedBarChart : List (List Int) -> Table.HtmlDetails msg
viewStackedBarChart barChartData =
    Table.HtmlDetails []
        [ Html.div
            []
            [ StackedBarChart.renderList barChartData
            , Html.div
                [ style "background-position" "50% 100%"
                , style "background-repeat" "repeat-y"
                , style "display" "flex"
                , style "justify-content" "space-between"
                ]
                [ Html.div [ style "marginRight" "20px" ]
                    [ text (String.fromInt (barChartData |> List.concat |> List.minimum |> Maybe.withDefault 0)) ]
                , Html.div []
                    [ text
                        (String.fromInt (barChartData |> List.concat |> List.maximum |> Maybe.withDefault 0))
                    ]
                ]
            ]
        ]


stackedBarChartColumnRain : String -> ((data -> List (List Int)) -> (Int -> Table.Column data msg))
stackedBarChartColumnRain name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewStackedBarChartRain (value data)
        , sorter = Table.decreasingOrIncreasingBy value
        }


viewStackedBarChartRain : List (List Int) -> Table.HtmlDetails msg
viewStackedBarChartRain barChartData =
    Table.HtmlDetails []
        [ Html.div
            []
            [ StackedBarChart.renderList barChartData
            , Html.div
                [ style "background-position" "50% 100%"
                , style "background-repeat" "repeat-y"
                , style "display" "flex"
                , style "justify-content" "space-between"
                ]
                [ Html.div [ style "marginRight" "20px" ]
                    -- [ text (String.fromInt (barChartData |> List.concat |> List.minimum |> Maybe.withDefault 0)) ]
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.minimum |> Maybe.withDefault 0) / 10) ++ "mm") ]
                , Html.div []
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.maximum |> Maybe.withDefault 0) / 10) ++ "mm") ]
                ]
            ]
        ]


stackedBarChartColumnTemp : String -> ((data -> List (List Int)) -> (Int -> Table.Column data msg))
stackedBarChartColumnTemp name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewStackedBarChartTemp (value data)
        , sorter = Table.decreasingOrIncreasingBy value
        }


viewStackedBarChartTemp : List (List Int) -> Table.HtmlDetails msg
viewStackedBarChartTemp barChartData =
    Table.HtmlDetails []
        [ Html.div
            []
            [ StackedBarChart.renderList barChartData
            , Html.div
                [ style "background-position" "50% 100%"
                , style "background-repeat" "repeat-y"
                , style "display" "flex"
                , style "justify-content" "space-between"
                ]
                [ Html.div [ style "marginRight" "20px" ]
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.minimum |> Maybe.withDefault 0) / 100) ++ "°C") ]
                , Html.div []
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.maximum |> Maybe.withDefault 0) / 100) ++ "°C") ]
                ]
            ]
        ]


stackedBarChartColumnSun : String -> ((data -> List (List Int)) -> (Int -> Table.Column data msg))
stackedBarChartColumnSun name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewStackedBarChartSun (value data)
        , sorter = Table.decreasingOrIncreasingBy value
        }


viewStackedBarChartSun : List (List Int) -> Table.HtmlDetails msg
viewStackedBarChartSun barChartData =
    Table.HtmlDetails []
        [ Html.div
            []
            [ StackedBarChart.renderList barChartData
            , Html.div
                [ style "background-position" "50% 100%"
                , style "background-repeat" "repeat-y"
                , style "display" "flex"
                , style "justify-content" "space-between"
                ]
                [ Html.div [ style "marginRight" "5px" ]
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.minimum |> Maybe.withDefault 0) / 100) ++ "kJm2") ]
                , Html.div []
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.maximum |> Maybe.withDefault 0) / 100) ++ "kJm2") ]
                ]
            ]
        ]


stackedBarChartColumnWind : String -> ((data -> List (List Int)) -> (Int -> Table.Column data msg))
stackedBarChartColumnWind name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewStackedBarChartWind (value data)
        , sorter = Table.decreasingOrIncreasingBy value
        }


viewStackedBarChartWind : List (List Int) -> Table.HtmlDetails msg
viewStackedBarChartWind barChartData =
    Table.HtmlDetails []
        [ Html.div
            []
            [ StackedBarChart.renderList barChartData
            , Html.div
                [ style "background-position" "50% 100%"
                , style "background-repeat" "repeat-y"
                , style "display" "flex"
                , style "justify-content" "space-between"
                ]
                [ Html.div [ style "marginRight" "10px" ]
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.minimum |> Maybe.withDefault 0) / 10000) ++ "m/s") ]
                , Html.div []
                    [ text (format sharesLocaleOne (toFloat (barChartData |> List.concat |> List.maximum |> Maybe.withDefault 0) / 10000) ++ "m/s") ]
                ]
            ]
        ]


ghslColumn : String -> ((data -> Int) -> (Int -> Table.Column data msg))
ghslColumn name value maxValue =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewBarChart (String.fromInt (value data // 1000) ++ "k") (100 * value data // maxValue)
        , sorter = Table.decreasingOrIncreasingBy value
        }



-- ghslColumn : String -> ((data -> Int) -> (Int -> Table.Column data msg))
-- ghslColumn name value maxValue =
--     Table.veryCustomColumn
--         { name = name
--         , viewData = \data -> viewBarChart (String.fromInt (value data // 1000) ++ "k") (100 * value data // maxValue)
--         , sorter = Table.decreasingOrIncreasingBy value
--         }


config : Model -> Table.Config City Msg
config model =
    Table.config
        { toId = .n
        , toMsg = SetTableState
        , columns =
            [ flagColumn "Flag" .u
            , Table.stringColumn "Name" .n
            , materialUIColumn "Map" (\rec -> "https://www.google.com/maps/@" ++ rec.lat ++ "," ++ rec.lon ++ "," ++ "12z/") "map"
            , materialUIColumn "Search" (\rec -> "https://google.com/search?q=" ++ rec.n ++ ", " ++ rec.s) "search"
            , materialUIColumn "Video" (\rec -> "https://youtube.com/search?q=" ++ rec.n ++ ", " ++ rec.s) "video_library"
            , materialUIColumn "Hotels"
                (\rec ->
                    if String.length rec.hcid > 1 then
                        "https://www.hotelscombined.com/Hotels/Search?destination="
                            ++ rec.hcid
                            ++ "&radius=6mi&checkin="
                            ++ (Maybe.map SingleDateRangePickerWithInput.startDateString model.singleDateRangePicker |> Maybe.withDefault "")
                            ++ "&checkout="
                            ++ (Maybe.map SingleDateRangePickerWithInput.endDateString model.singleDateRangePicker |> Maybe.withDefault "")
                            ++ "&Rooms=1&adults_1=1"
                            ++ "&pageSize=15&pageIndex=0&sort=MinRate-asc&showSoldOut=false?a_aid=208728"

                    else
                        "https://www.hotelscombined.com/?a_aid=208728"
                )
                "hotel"
            , barChartColumn "Hotel $ min" "$" .hc_price_min (cities |> List.map .hc_price_min |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Hotels.com $ min" "$" .hotels_com_price_min (cities |> List.map .hotels_com_price_min |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Hotels.com $ avg" "$" .hotels_com_price_avg (cities |> List.map .hotels_com_price_avg |> List.maximum |> Maybe.withDefault 0)
            , doubleBarTripleChartColumn "Avg Boring & Interesting" (\data -> Array.fromList (.boring data)) 1000 (\data -> Array.fromList (.interesting data)) 1500 --model.maxinteresting
            , doubleBarChartColumn "Sum Boring & Interesting" (\rec -> rec.osm_boring_boring_sum // 100) 2000 (\rec -> rec.osm_interesting_interesting_sum_sum // 100) 3000

            -- , doubleBarChartColumn "Max Boring & Interesting" (\rec -> List.sum rec.boring) model.maxboring (\rec -> List.sum rec.interesting) model.maxinteresting
            , doubleBarTripleChartColumn "Avg Risk & Safety" (\data -> Array.fromList (.danger data)) 1000 (\data -> Array.fromList (.safety data)) 1500
            , doubleBarChartColumn "Sum Risk & Safety" (\rec -> rec.danger_sum // 10) 20000 (\rec -> rec.osm_safe_safety_sum // 10) 30000
            , distColumn "Avg Distance to City Center" .dist (cities |> List.map .dist |> List.maximum |> Maybe.withDefault 0)
            , singleBarTripleChartColumn "Population (GHSL)" (\data -> Array.fromList (.popghs data)) 2000
            , barChartColumn "Total Public Transport" "" (\rec -> List.sum rec.publicTransport) (cities |> List.map (\rec -> List.sum rec.publicTransport) |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Tourism" "" (\rec -> List.sum rec.tourismcount) (cities |> List.map (\rec -> List.sum rec.tourismcount) |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Solo Tourists" "" .flickr2_lowview_count_total_sum (cities |> List.map .flickr2_lowview_count_total_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Family Tourists" "" .flickr2_medview_count_total_sum (cities |> List.map .flickr2_medview_count_total_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Celebrity Tourists" "" .flickr2_highview_count_total_sum (cities |> List.map .flickr2_highview_count_total_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Hotels Count" "" .hc_count (cities |> List.map .hc_count |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Hotels.com Count" "" .hotels_com_count (cities |> List.map .hotels_com_count |> List.maximum |> Maybe.withDefault 0)
            , singleBarTripleChartColumn "Avg Restaurants" (\data -> Array.fromList (.food data)) 1
            , noiseColumn "Avg Noise" .noise (cities |> List.map .noise |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Township Area" "" (\rec -> rec.dist_sum // 1000) 10000
            , barChartColumn "Total Coastline" "" .coastline_100m_count_sum (cities |> List.map .coastline_100m_count_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total navwater" "" .navwater2009__mean_sum (cities |> List.map .navwater2009__mean_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total Public Transport" "" .public_transport_sum (cities |> List.map .public_transport_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total Slope Variation" "" (\rec -> rec.slope100m__mean_sum // 100) 30000

            -- , barChartColumn "Total ghs_gpw_pop_2015__sum" "" .ghs_gpw_pop_2015__sum_sum (cities |> List.map .ghs_gpw_pop_2015__sum_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total ghs_built_lds__mean" "" .ghs_built_lds__mean_sum (cities |> List.map .ghs_built_lds__mean_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total Toilets" "" .toilets_sum (cities |> List.map .toilets_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total Restaurants" "" .food_sum (cities |> List.map .food_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total Access to City" "" .access_50k_mean_sum 10000

            -- , barChartColumn "Total globcover_urban" "" .globcover_urban_sum (cities |> List.map .globcover_urban_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_irrigated_cropland" "" .globcover_irrigated_cropland_sum (cities |> List.map .globcover_irrigated_cropland_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_rainfed_cropland" "" .globcover_rainfed_cropland_sum (cities |> List.map .globcover_rainfed_cropland_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_mosiac_cropland" "" .globcover_mosiac_cropland_sum (cities |> List.map .globcover_mosiac_cropland_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total dryadv3croplands1992_mean" "" .dryadv3croplands1992_mean_sum (cities |> List.map .dryadv3croplands1992_mean_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_semideciduous" "" .globcover_semideciduous_sum (cities |> List.map .globcover_semideciduous_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_closed_broadleaved" "" .globcover_closed_broadleaved_sum (cities |> List.map .globcover_closed_broadleaved_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_open_broadleaved" "" .globcover_open_broadleaved_sum (cities |> List.map .globcover_open_broadleaved_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_closed_needleleaved" "" .globcover_closed_needleleaved_sum (cities |> List.map .globcover_closed_needleleaved_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_open_needleleaved" "" .globcover_open_needleleaved_sum (cities |> List.map .globcover_open_needleleaved_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_mixed_broadleaved" "" .globcover_mixed_broadleaved_sum (cities |> List.map .globcover_mixed_broadleaved_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_mosiac_forest" "" .globcover_mosiac_forest_sum (cities |> List.map .globcover_mosiac_forest_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_mosiac_grassland" "" .globcover_mosiac_grassland_sum (cities |> List.map .globcover_mosiac_grassland_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_shrubland" "" .globcover_shrubland_sum (cities |> List.map .globcover_shrubland_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_herbaceous_vegetation" "" .globcover_herbaceous_vegetation_sum (cities |> List.map .globcover_herbaceous_vegetation_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_mosiac_vegetation" "" .globcover_mosiac_vegetation_sum (cities |> List.map .globcover_mosiac_vegetation_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_sparse_vegetation" "" .globcover_sparse_vegetation_sum (cities |> List.map .globcover_sparse_vegetation_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_bare" "" .globcover_bare_sum (cities |> List.map .globcover_bare_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total gm_ve_v2__mean" "" .gm_ve_v2__mean_sum (cities |> List.map .gm_ve_v2__mean_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_regularly_flooded_forest" "" .globcover_regularly_flooded_forest_sum (cities |> List.map .globcover_regularly_flooded_forest_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_permanently_flooded_forest" "" .globcover_permanently_flooded_forest_sum (cities |> List.map .globcover_permanently_flooded_forest_sum |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Total globcover_marsh" "" .globcover_marsh_sum (cities |> List.map .globcover_marsh_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total globcover_water" "" .globcover_water_sum (cities |> List.map .globcover_water_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total glwd3_lake" "" .glwd3_lake_sum (cities |> List.map .glwd3_lake_sum |> List.maximum |> Maybe.withDefault 0)

            -- , barChartColumn "Total glwd3_reservoir" "" .glwd3_reservoir_sum (cities |> List.map .glwd3_reservoir_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total glwd3_river" "" .glwd3_river_sum 30

            -- , barChartColumn "Total lakes_glwd3_count" "" .lakes_glwd3_count_sum (cities |> List.map .lakes_glwd3_count_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total lakes_glwd3_mean" "" .lakes_glwd3_mean_sum (cities |> List.map .lakes_glwd3_mean_sum |> List.maximum |> Maybe.withDefault 0)

            -- , barChartColumn "Total glwd_2_count" "" .glwd_2_count_sum (cities |> List.map .glwd_2_count_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total glwd_2_area" "" .glwd_2_area_sum (cities |> List.map .glwd_2_area_sum |> List.maximum |> Maybe.withDefault 0)

            -- , barChartColumn "Total glwd_2_perim" "" .glwd_2_perim_sum (cities |> List.map .glwd_2_perim_sum |> List.maximum |> Maybe.withDefault 0)
            , barChartColumn "Total globcover_ice" "" .globcover_ice_sum 20
            , barChartColumn "Total globcover_nodata" "" .globcover_nodata_sum 50
            , barChartColumn "Total glwd3_marsh" "" (\rec -> rec.glwd3_marsh_sum + rec.glwd3_swamp_sum + rec.glwd3_bog_sum) 100
            , barChartColumn "Total glwd3_mangrove" "" (\rec -> rec.glwd3_mangrove_sum + rec.glwd3_wetland_sum + rec.glwd3_sometimes_wetland_sum + rec.glwd3_50_100_wetland_sum + rec.glwd3_25_50_wetland_sum + rec.glwd3_0_25_wetland_sum) 500

            --    , stackedBarChartColumnRain "Average Monthly Rain (Jan. to Dec.)" .rain (countries |> List.concatMap .rain |> List.concat |> List.maximum |> Maybe.withDefault 0)
            -- -- , stackedBarChartColumnTemp "Average Monthly Temp. (Jan. to Dec.)" .tmp (countries |> List.concatMap .tmp |> List.concat |> List.maximum |> Maybe.withDefault 0)
            -- -- , stackedBarChartColumnSun "Average Monthly Sun (Jan. to Dec.)" .srad (countries |> List.concatMap .srad |> List.concat |> List.maximum |> Maybe.withDefault 0)
            -- -- , stackedBarChartColumnWind "Average Monthly Wind (Jan. to Dec.)" .wind (countries |> List.concatMap .wind |> List.concat |> List.maximum |> Maybe.withDefault 0)
            -- , doubleBarChartColumn "Average Neighbourhood Boring & Interesting" (\data -> get 1 (Array.fromList (.boring data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.boring data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0) (\data -> get 1 (Array.fromList (.interesting data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.interesting data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , doubleBarChartColumnRed "Average Risk & Safety" (\data -> get 1 (Array.fromList (.danger data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.danger data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0) (\data -> get 1 (Array.fromList (.safety data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.safety data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , distColumn "Average distance of neighbourhoods to urban core" .avgDist (countries |> List.map .avgDist |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average neighbourhood population (GHSL)" (\data -> get 1 (Array.fromList (.popghs data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.popghs data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average city population" .popAvg (countries |> List.map .popAvg |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Largest city population" .popMax (countries |> List.map .popMax |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average Noise (data.noise-planet.org)" .avgNoise (countries |> List.map .avgNoise |> List.maximum |> Maybe.withDefault 0)
            -- , ghslColumn "Max population at neighbourhood level (GHSL)" (\data -> get 2 (Array.fromList (.popghs data)) |> Maybe.withDefault 0) (countries |> List.concatMap .popghs |> List.maximum |> Maybe.withDefault 0)
            -- , doubleBarChartColumn "Max Neighbourhood Boring & Interesting" (\data -> get 2 (Array.fromList (.boring data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.boring data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0) (\data -> get 2 (Array.fromList (.interesting data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.interesting data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , doubleBarChartColumnRed "Max Risk & Safety" (\data -> get 2 (Array.fromList (.danger data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.danger data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0) (\data -> get 2 (Array.fromList (.safety data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.safety data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average coVar" (\data -> get 1 (Array.fromList (.coVar data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.coVar data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average coastline" (\data -> get 1 (Array.fromList (.coastline data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.coastline data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average tourismcount" (\data -> get 1 (Array.fromList (.tourismcount data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.tourismcount data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average publicTransport" (\data -> get 1 (Array.fromList (.publicTransport data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.publicTransport data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average slopeMean" (\data -> get 1 (Array.fromList (.slopeMean data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.slopeMean data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average osmpop" (\data -> get 1 (Array.fromList (.osmpop data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.osmpop data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average Built-up Area" (\data -> get 1 (Array.fromList (.built data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.built data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average groadsCount" (\data -> get 1 (Array.fromList (.groadsCount data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.groadsCount data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average groadsAvgLength" (\data -> get 1 (Array.fromList (.groadsAvgLength data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.groadsAvgLength data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average toilets" (\data -> get 1 (Array.fromList (.toilets data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.toilets data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average number of restaurants in a neighbourhood" (\data -> get 1 (Array.fromList (.food data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.food data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average accessibilityToCity" (\data -> get 1 (Array.fromList (.accessibilityToCity data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.accessibilityToCity data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globUrbanMin" (\data -> get 1 (Array.fromList (.globUrbanMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globUrbanMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globUrbanAvg" (\data -> get 1 (Array.fromList (.globUrbanAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globUrbanAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globUrbanMax" (\data -> get 1 (Array.fromList (.globUrbanMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globUrbanMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globCropMin" (\data -> get 1 (Array.fromList (.globCropMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globCropMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globCropAvg" (\data -> get 1 (Array.fromList (.globCropAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globCropAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globCropMax" (\data -> get 1 (Array.fromList (.globCropMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globCropMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average forestMin" (\data -> get 1 (Array.fromList (.forestMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.forestMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average forestAvg" (\data -> get 1 (Array.fromList (.forestAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.forestAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average forestMax" (\data -> get 1 (Array.fromList (.forestMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.forestMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globVeMin" (\data -> get 1 (Array.fromList (.globVeMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globVeMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globVeAvg" (\data -> get 1 (Array.fromList (.globVeAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globVeAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globVeMax" (\data -> get 1 (Array.fromList (.globVeMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globVeMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globWetMin" (\data -> get 1 (Array.fromList (.globWetMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globWetMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globWetAvg" (\data -> get 1 (Array.fromList (.globWetAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globWetAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Average globWetMax" (\data -> get 1 (Array.fromList (.globWetMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 1 (Array.fromList (.globWetMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max coVar" (\data -> get 2 (Array.fromList (.coVar data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.coVar data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max coastline" (\data -> get 2 (Array.fromList (.coastline data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.coastline data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max tourismcount" (\data -> get 2 (Array.fromList (.tourismcount data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.tourismcount data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max publicTransport" (\data -> get 2 (Array.fromList (.publicTransport data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.publicTransport data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max slopeMean" (\data -> get 2 (Array.fromList (.slopeMean data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.slopeMean data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max osmpop" (\data -> get 2 (Array.fromList (.osmpop data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.osmpop data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max Built-up Area" (\data -> get 2 (Array.fromList (.built data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.built data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max groadsCount" (\data -> get 2 (Array.fromList (.groadsCount data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.groadsCount data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max groadsAvgLength" (\data -> get 2 (Array.fromList (.groadsAvgLength data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.groadsAvgLength data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max toilets" (\data -> get 2 (Array.fromList (.toilets data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.toilets data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max number of restaurants in a neighbourhood" (\data -> get 2 (Array.fromList (.food data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.food data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max accessibilityToCity" (\data -> get 2 (Array.fromList (.accessibilityToCity data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.accessibilityToCity data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globUrbanMin" (\data -> get 2 (Array.fromList (.globUrbanMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globUrbanMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globUrbanAvg" (\data -> get 2 (Array.fromList (.globUrbanAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globUrbanAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globUrbanMax" (\data -> get 2 (Array.fromList (.globUrbanMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globUrbanMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globCropMin" (\data -> get 2 (Array.fromList (.globCropMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globCropMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globCropAvg" (\data -> get 2 (Array.fromList (.globCropAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globCropAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globCropMax" (\data -> get 2 (Array.fromList (.globCropMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globCropMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max forestMin" (\data -> get 2 (Array.fromList (.forestMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.forestMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max forestAvg" (\data -> get 2 (Array.fromList (.forestAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.forestAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max forestMax" (\data -> get 2 (Array.fromList (.forestMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.forestMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globVeMin" (\data -> get 2 (Array.fromList (.globVeMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globVeMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globVeAvg" (\data -> get 2 (Array.fromList (.globVeAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globVeAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globVeMax" (\data -> get 2 (Array.fromList (.globVeMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globVeMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globWetMin" (\data -> get 2 (Array.fromList (.globWetMin data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globWetMin data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globWetAvg" (\data -> get 2 (Array.fromList (.globWetAvg data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globWetAvg data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            -- , barChartColumn "Max globWetMax" (\data -> get 2 (Array.fromList (.globWetMax data)) |> Maybe.withDefault 0) (countries |> List.map (\data -> get 2 (Array.fromList (.globWetMax data)) |> Maybe.withDefault 0) |> List.maximum |> Maybe.withDefault 0)
            ]
        }


cityDecoder : Decoder (List City)
cityDecoder =
    Decode.list cityPatternDecoder


cityPatternDecoder : Decoder City
cityPatternDecoder =
    Decode.succeed City
        |> required "id" int
        |> optional "n" string ""
        |> optional "s" string ""
        |> optional "c" string ""
        |> optional "u" string ""
        |> optional "lat" string ""
        |> optional "lon" string ""
        |> optional "dist" int 0
        |> optional "noise" int 0
        |> optional "pop_max" int 0
        |> optional "rain" (Decode.list (Decode.list int)) [ [ 0 ], [ 0 ] ]
        |> optional "co_var" (Decode.list int) [ 0 ]
        |> optional "tmp" (Decode.list (Decode.list int)) [ [ 0 ], [ 0 ] ]
        |> optional "srad" (Decode.list (Decode.list int)) [ [ 0 ], [ 0 ] ]
        |> optional "wind" (Decode.list (Decode.list int)) [ [ 0 ], [ 0 ] ]
        |> optional "interesting" (Decode.list int) [ 0 ]
        |> optional "boring" (Decode.list int) [ 0 ]
        |> optional "safety" (Decode.list int) [ 0 ]
        |> optional "danger" (Decode.list int) [ 0 ]
        |> optional "coastline" (Decode.list int) [ 0 ]
        |> optional "tourismcount" (Decode.list int) [ 0 ]
        |> optional "public_transport" (Decode.list int) [ 0 ]
        |> optional "slope" (Decode.list int) [ 0 ]
        |> optional "popghs" (Decode.list int) [ 0 ]
        |> optional "osmpop" (Decode.list int) [ 0 ]
        |> optional "built_env" (Decode.list int) [ 0 ]
        |> optional "groads_count" (Decode.list int) [ 0 ]
        |> optional "groads_avg_length" (Decode.list int) [ 0 ]
        |> optional "toilets" (Decode.list int) [ 0 ]
        |> optional "food" (Decode.list int) [ 0 ]
        |> optional "accessibility_to_city" (Decode.list int) [ 0 ]
        |> optional "popd" (Decode.list (Decode.list int)) [ [ 0 ], [ 0 ] ]
        |> optional "navw" (Decode.list int) [ 0 ]
        |> optional "glob_urban" (Decode.list int) [ 0 ]
        |> optional "glob_crop" (Decode.list int) [ 0 ]
        |> optional "glob_forest" (Decode.list int) [ 0 ]
        |> optional "glob_ve" (Decode.list int) [ 0 ]
        |> optional "glob_wet" (Decode.list int) [ 0 ]
        |> optional "osmn" (Decode.list int) [ 0 ]
        |> optional "dist_sum" int 0
        |> optional "osm_interesting_interesting_sum_sum" int 0
        |> optional "osm_boring_boring_sum" int 0
        |> optional "osm_safe_safety_sum" int 0
        |> optional "danger_sum" int 0
        |> optional "coastline_100m_count_sum" int 0
        |> optional "flickr2_lowview_count_total_sum" int 0
        |> optional "flickr2_medview_count_total_sum" int 0
        |> optional "flickr2_highview_count_total_sum" int 0
        |> optional "public_transport_sum" int 0
        |> optional "slope100m__mean_sum" int 0
        |> optional "ghs_gpw_pop_2015__sum_sum" int 0
        |> optional "ghs_built_lds__mean_sum" int 0
        |> optional "toilets_sum" int 0
        |> optional "food_sum" int 0
        |> optional "access_50k_mean_sum" int 0
        |> optional "navwater2009__mean_sum" int 0
        |> optional "globcover_urban_sum" int 0
        |> optional "globcover_irrigated_cropland_sum" int 0
        |> optional "globcover_rainfed_cropland_sum" int 0
        |> optional "globcover_mosiac_cropland_sum" int 0
        |> optional "dryadv3croplands1992_mean_sum" int 0
        |> optional "globcover_semideciduous_sum" int 0
        |> optional "globcover_closed_broadleaved_sum" int 0
        |> optional "globcover_open_broadleaved_sum" int 0
        |> optional "globcover_closed_needleleaved_sum" int 0
        |> optional "globcover_open_needleleaved_sum" int 0
        |> optional "globcover_mixed_broadleaved_sum" int 0
        |> optional "globcover_mosiac_forest_sum" int 0
        |> optional "globcover_mosiac_grassland_sum" int 0
        |> optional "globcover_shrubland_sum" int 0
        |> optional "globcover_herbaceous_vegetation_sum" int 0
        |> optional "globcover_mosiac_vegetation_sum" int 0
        |> optional "globcover_sparse_vegetation_sum" int 0
        |> optional "globcover_bare_sum" int 0
        |> optional "gm_ve_v2__mean_sum" int 0
        |> optional "globcover_regularly_flooded_forest_sum" int 0
        |> optional "globcover_permanently_flooded_forest_sum" int 0
        |> optional "globcover_marsh_sum" int 0
        |> optional "globcover_water_sum" int 0
        |> optional "glwd3_lake_sum" int 0
        |> optional "glwd3_reservoir_sum" int 0
        |> optional "glwd3_river_sum" int 0
        |> optional "lakes_glwd3_count_sum" int 0
        |> optional "lakes_glwd3_mean_sum" int 0
        |> optional "glwd_2_count_sum" int 0
        |> optional "glwd_2_area_sum" int 0
        |> optional "glwd_2_perim_sum" int 0
        |> optional "globcover_ice_sum" int 0
        |> optional "globcover_nodata_sum" int 0
        |> optional "glwd3_marsh_sum" int 0
        |> optional "glwd3_swamp_sum" int 0
        |> optional "glwd3_mangrove_sum" int 0
        |> optional "glwd3_wetland_sum" int 0
        |> optional "glwd3_bog_sum" int 0
        |> optional "glwd3_sometimes_wetland_sum" int 0
        |> optional "glwd3_50_100_wetland_sum" int 0
        |> optional "glwd3_25_50_wetland_sum" int 0
        |> optional "glwd3_0_25_wetland_sum" int 0
        |> optional "hotels_com_price_avg" int 0
        |> optional "hotels_com_price_min" int 0
        |> optional "hotels_com_count" int 0
        |> optional "hcid" string ""
        |> optional "hc_count" int 0
        |> optional "hc_price_min" int 0


searchDecoder : Decoder (List Search)
searchDecoder =
    Decode.list searchPatternDecoder


searchPatternDecoder : Decoder Search
searchPatternDecoder =
    Decode.succeed Search
        |> optional "id" string ""
        |> optional "displayname" string ""
        |> optional "name" string ""


searchCategories : List (Selectize.Entry Search)
searchCategories =
    List.concat
        [ [ Selectize.divider "Countries" ]
        , searchData |> List.map Selectize.entry
        ]



-- UPDATE


type Msg
    = SetTableQuery String
    | SetTableState Table.State
    | TextfieldMenuMsg (Selectize.Msg Search)
    | SelectTextfieldCity (Maybe Search)
    | SearchResponse (WebData (List Search))
    | CityResponse (WebData (List City))
    | Initialise Time.Posix
    | SingleDateRangePickerWithInputMsg SingleDateRangePickerWithInput.Msg


webDataToList wd =
    RemoteData.toMaybe wd |> Maybe.withDefault []


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        defaultSearch =
            ( { model
                | textfieldMenu =
                    Selectize.closed
                        "textfield-menu"
                        .displayname
                        searchCategories
              }
            , Cmd.none
            )
    in
    case msg of
        SearchResponse ((RemoteData.Success items) as data) ->
            ( { model
                | textfieldMenu =
                    Selectize.refresh
                        model.textfieldMenu
                        "textfield-menu"
                        .displayname
                        (List.concat
                            [ [ Selectize.divider "Countries" ]
                            , webDataToList data |> List.map Selectize.entry
                            ]
                        )
              }
            , Cmd.none
            )

        SearchResponse (RemoteData.NotAsked as data) ->
            defaultSearch

        SearchResponse (RemoteData.Loading as data) ->
            defaultSearch

        SearchResponse ((RemoteData.Failure _) as data) ->
            defaultSearch

        CityResponse data ->
            ( { model
                | city = data
                , maxboring = webDataToList data |> List.concatMap .boring |> List.maximum |> Maybe.withDefault 0
                , maxinteresting = webDataToList data |> List.concatMap .interesting |> List.maximum |> Maybe.withDefault 0
              }
            , Cmd.none
            )

        Initialise todayPosix ->
            ( { model
                | singleDateRangePicker = Just (SingleDateRangePickerWithInput.init todayPosix)
              }
            , Cmd.none
            )

        SingleDateRangePickerWithInputMsg subMsg ->
            case model.singleDateRangePicker of
                Just picker ->
                    let
                        ( subModel, subCmd ) =
                            SingleDateRangePickerWithInput.update subMsg picker
                    in
                    ( { model | singleDateRangePicker = Just subModel }
                    , Cmd.map SingleDateRangePickerWithInputMsg subCmd
                    )

                Nothing ->
                    ( model
                    , Cmd.none
                    )

        SetTableQuery newQuery ->
            ( { model | tableQuery = newQuery }
            , Cmd.none
            )

        SetTableState newState ->
            ( { model | tableState = newState }
            , Cmd.none
            )

        SelectTextfieldCity newSelection ->
            case newSelection of
                Nothing ->
                    ( { model
                        | textfieldSelection = newSelection
                      }
                    , RemoteData.Http.get (apiUrl ++ "/searchCountry?input=" ++ model.textfieldMenu.query) SearchResponse searchDecoder
                    )

                _ ->
                    ( { model
                        | textfieldSelection = newSelection
                        , city = Loading
                        , tableQuery = ""
                        , tableState = Table.initialSort ""
                      }
                    , RemoteData.Http.get (apiUrl ++ "/getCities?k=" ++ (newSelection |> Maybe.map .id |> Maybe.withDefault "")) CityResponse cityDecoder
                    )

        TextfieldMenuMsg selectizeMsg ->
            let
                ( newMenu, menuCmd, maybeMsg ) =
                    Selectize.update SelectTextfieldCity
                        model.textfieldSelection
                        model.textfieldMenu
                        selectizeMsg

                newModel =
                    { model | textfieldMenu = newMenu }

                cmd =
                    menuCmd |> Cmd.map TextfieldMenuMsg
            in
            case maybeMsg of
                Just nextMsg ->
                    update nextMsg newModel
                        |> andDo cmd

                Nothing ->
                    ( newModel, cmd )


andDo : Cmd msg -> ( model, Cmd msg ) -> ( model, Cmd msg )
andDo cmd ( model, cmds ) =
    ( model
    , Cmd.batch [ cmd, cmds ]
    )



---- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ case model.singleDateRangePicker of
            Just picker ->
                Sub.map SingleDateRangePickerWithInputMsg (SingleDateRangePickerWithInput.subscriptions picker)

            Nothing ->
                Sub.none
        ]



-- VIEW


view : Model -> Html Msg
view model =
    let
        tableState =
            model.tableState

        tableQuery =
            model.tableQuery

        lowerQuery =
            String.toLower tableQuery
    in
    Html.div
        []
        [ Html.div
            [ Attributes.style "display" "flex"
            , Attributes.style "flex-flow" "column"
            ]
            [ Html.div
                [ style "display" "block" ]
                [ Html.div
                    []
                    []
                , Html.div
                    [ Attributes.style "width" "30rem" ]
                    [ Selectize.view
                        viewConfigTextfield
                        model.textfieldSelection
                        model.textfieldMenu
                        |> Html.map TextfieldMenuMsg
                    ]
                ]
            ]
        , Html.div []
            [ case model.singleDateRangePicker of
                Just picker ->
                    Html.map SingleDateRangePickerWithInputMsg (SingleDateRangePickerWithInput.view picker)

                Nothing ->
                    text "Single date range picker with input hasn't been initialised!"
            ]
        , Html.div
            []
            [ case model.city of
                Loading ->
                    text "Loading city data, please stand by..."

                Success city ->
                    let
                        acceptableCity =
                            List.filter (String.contains lowerQuery << String.toLower << .n) city
                    in
                    div []
                        [ Html.h3 [] [ text ("Cities in " ++ (model.textfieldSelection |> Maybe.map .displayname |> Maybe.withDefault "")) ]

                        -- , text "Filter by Name: "
                        -- , input [ onInput SetTableQuery, class "selectize__textfield", style "cursor" "text" ] []
                        , Table.view (config model) tableState acceptableCity
                        ]

                Failure error ->
                    text ("Oh noes, city loading failed with error: " ++ HttpExtra.errorToString error)

                NotAsked ->
                    -- div []
                    --     [ Html.h3 [] [ text ("Cities in " ++ (model.textfieldSelection |> Maybe.map .displayname |> Maybe.withDefault "")) ]
                    --     , Table.view config tableState cities
                    --     ]
                    div []
                        [ Html.h3 [] [ text "Please select a country" ]
                        , div []
                            [ Html.br [] []
                            , text "UNLI Cities spatial database will help you compare cities of a country."
                            , Html.br [] []
                            , text "It's useful for people who are choosing where to move or travel."
                            , Html.br [] []
                            , Html.br [] []
                            , Html.br [] []
                            , text "Using data from the European Commission licensed under CC BY 4.0 © European Union, 1995-2019 "
                            , Html.br [] []
                            , text "and OpenStreetMap licensed under ODbL © OpenStreetMap contributors"
                            ]
                        ]
            ]
        ]



---- CONFIGURATION


viewConfigTextfield : Selectize.ViewConfig Search
viewConfigTextfield =
    viewConfig textfieldSelector


viewConfig : Selectize.Input Search -> Selectize.ViewConfig Search
viewConfig selector =
    let
        entryFunction : Search -> Bool -> Bool -> Selectize.HtmlDetails Never
        entryFunction tree mouseFocused keyboardFocused =
            { attributes =
                [ Attributes.class "selectize__item"
                , Attributes.classList
                    [ ( "selectize__item--mouse-selected"
                      , mouseFocused
                      )
                    , ( "selectize__item--key-selected"
                      , keyboardFocused
                      )
                    ]
                ]
            , children =
                [ Html.text tree.displayname ]
            }
    in
    Selectize.viewConfig
        { container = []
        , menu =
            [ Attributes.class "selectize__menu" ]
        , ul =
            [ Attributes.class "selectize__list" ]
        , entry =
            entryFunction
        , divider =
            \title ->
                { attributes =
                    [ Attributes.class "selectize__divider" ]
                , children =
                    [ Html.text title ]
                }
        , input = selector
        }


textfieldSelector : Selectize.Input Search
textfieldSelector =
    Selectize.autocomplete <|
        { attrs =
            \sthSelected open ->
                [ Attributes.class "selectize__textfield"
                , Attributes.classList
                    [ ( "selectize__textfield--selection", sthSelected )
                    , ( "selectize__textfield--no-selection", not sthSelected )
                    , ( "selectize__textfield--menu-open", open )
                    ]
                ]
        , toggleButton = toggleButton
        , clearButton = clearButton
        , placeholder = "Select a Country"
        }


toggleButton : Maybe (Bool -> Html Never)
toggleButton =
    Just <|
        \open ->
            Html.div
                [ Attributes.class "selectize__menu-toggle"
                , Attributes.classList
                    [ ( "selectize__menu-toggle--menu-open", open ) ]
                ]
                [ Html.i
                    [ Attributes.class "material-icons"
                    , Attributes.class "selectize__icon"
                    ]
                    [ if open then
                        Html.text "arrow_drop_up"

                      else
                        Html.text "arrow_drop_down"
                    ]
                ]


clearButton : Maybe (Html Never)
clearButton =
    Just <|
        Html.div
            [ Attributes.class "selectize__menu-toggle" ]
            [ Html.i
                [ Attributes.class "material-icons"
                , Attributes.class "selectize__icon"
                ]
                [ Html.text "clear" ]
            ]
