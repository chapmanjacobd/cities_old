module DateSelect exposing
    ( Model
    , Msg
    , endDateString
    , init
    , startDateString
    , subscriptions
    , update
    , view
    )

import Browser.Events as Browser
import DateRangePicker exposing (SelectedDateRange)
import DateRangePicker.Types exposing (DateLimit(..), ViewType(..))
import DateTime
import Extra.DateTime as DateTimeExtra
import Extra.TimeUtils
import Html exposing (Html, br, div, h3, input, text)
import Html.Attributes exposing (class, readonly, value)
import Html.Events exposing (onFocus, stopPropagationOn)
import Json.Decode as Decode
import Time exposing (Posix)


type alias Model =
    { picker : DateRangePicker.Model
    , selectedRange : Maybe SelectedDateRange
    , isFocused : Bool
    }


init : Posix -> Model
init todayPosix =
    let
        today =
            DateTime.fromPosix todayPosix

        ( minDate, maxDate ) =
            let
                ( past, future ) =
                    ( DateTimeExtra.decrementMonths 1 today
                    , DateTimeExtra.incrementMonths 36 today
                    )
            in
            ( Maybe.withDefault past <| DateTime.setDay 1 past
            , Maybe.withDefault future <| DateTime.setDay (DateTime.lastDayOf future) future
            )

        calendarConfig =
            { today = today
            , primaryDate = Nothing
            , dateLimit = DateLimit { minDate = minDate, maxDate = maxDate }
            , dateRangeOffset = Just { minDateRangeLength = 1 }
            }

        -- The `timePickerConfig` is set to `Nothing` cause we don't want one.
        timePickerConfig =
            Nothing

        pickerInit =
            DateRangePicker.initialise DateRangePicker.Types.Single calendarConfig timePickerConfig

        defaultDateRange =
            { startDate = DateTimeExtra.incrementDays 14 today, endDate = DateTimeExtra.incrementDays 22 today }
    in
    { picker =
        DateRangePicker.setDateRange
            defaultDateRange
            pickerInit
    , selectedRange = Just defaultDateRange
    , isFocused = False
    }


type Msg
    = NoOp
    | PickerMsg DateRangePicker.Msg
    | FocusHandler
    | GlobalClickHandler


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model
            , Cmd.none
            )

        PickerMsg subMsg ->
            let
                ( updated, subCmd, extMsg ) =
                    DateRangePicker.update subMsg model.picker

                selectedRange =
                    case extMsg of
                        DateRangePicker.None ->
                            model.selectedRange

                        DateRangePicker.DateRangeSelected dateRange ->
                            dateRange
            in
            ( { model
                | picker = updated
                , selectedRange = selectedRange
              }
            , Cmd.map PickerMsg subCmd
            )

        FocusHandler ->
            ( { model | isFocused = True }
            , Cmd.none
            )

        GlobalClickHandler ->
            ( { model | isFocused = False }
            , Cmd.none
            )


startDateString : Model -> String
startDateString { picker, selectedRange, isFocused } =
    case selectedRange of
        Just { startDate, endDate } ->
            String.join "-"
                [ String.fromInt (DateTime.getYear startDate)
                , Extra.TimeUtils.monthToIntString (DateTime.getMonth startDate)
                , String.fromInt (DateTime.getDay startDate)
                ]

        Nothing ->
            ""


endDateString : Model -> String
endDateString { picker, selectedRange, isFocused } =
    case selectedRange of
        Just { startDate, endDate } ->
            String.join "-"
                [ String.fromInt (DateTime.getYear endDate)
                , Extra.TimeUtils.monthToIntString (DateTime.getMonth endDate)
                , String.fromInt (DateTime.getDay endDate)
                ]

        Nothing ->
            ""


view : Model -> Html Msg
view { picker, selectedRange, isFocused } =
    let
        dateValue =
            case selectedRange of
                Just { startDate, endDate } ->
                    String.join " "
                        [ String.fromInt (DateTime.getYear startDate)
                        , Extra.TimeUtils.monthToString (DateTime.getMonth startDate)
                        , String.fromInt (DateTime.getDay startDate)
                            ++ (if DateTime.getMonth startDate == DateTime.getMonth endDate then
                                    "-"

                                else
                                    " - "
                                        ++ Extra.TimeUtils.monthToString (DateTime.getMonth endDate)
                                        ++ " "
                               )
                            ++ String.fromInt (DateTime.getDay endDate)
                        , "("
                            ++ String.fromInt (DateTime.getDayDiff startDate endDate)
                            ++ " days)"
                        ]

                Nothing ->
                    ""
    in
    div [ class "section" ]
        [ h3 [] []
        , div [ class "input-group", stopPropagationOn "click" (Decode.succeed ( NoOp, True )) ]
            [ input [ onFocus FocusHandler, value dateValue, readonly True, Html.Attributes.style "width" "30em" ] []
            , if isFocused then
                Html.map PickerMsg (DateRangePicker.view picker)

              else
                text ""
            ]
        , br [] []

        --, case selectedRange of
        --     Just { startDate, endDate } ->
        --         div [ class "footer" ]
        --             [ span [ class "text" ] [ text "Selected Date Range: " ]
        --             , span [ class "date" ] [ text (DateTimeExtra.toString startDate) ]
        --             , span [ class "separator" ] [ text "—" ]
        --             , span [ class "date" ] [ text (DateTimeExtra.toString endDate) ]
        --             ]
        --     Nothing ->
        --         div [ class "footer" ]
        --             [ text "No \"selected range\" yet"
        --             ]
        ]


subscriptions : Model -> Sub Msg
subscriptions { isFocused } =
    if isFocused then
        Browser.onClick (Decode.succeed GlobalClickHandler)

    else
        Sub.none
