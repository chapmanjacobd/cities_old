module SearchData exposing (Search, searchData)


type alias Search =
    { id : String
    , displayname : String
    , name : String
    }


searchData : List Search
searchData =
    [ Search "BD" "Bangladesh" "BangladeshBD"
    , Search "JP" "Japan" "JapanJP"
    , Search "KR" "South Korea" "South KoreaKR"
    , Search "TW" "Taiwan" "TaiwanTW"
    , Search "IN" "India" "IndiaIN"
    , Search "PK" "Pakistan" "PakistanPK"
    , Search "IL" "Israel" "IsraelIL"
    ]
