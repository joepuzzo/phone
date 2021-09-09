// This file is a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
export default {
  "AE": {
    "country": "AE",
    "countryCode": "971",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "60|8",
        "formatter": "### #########"
      },
      {
        "leadingDigitsPattern": "[236]|[479][2-8]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[479]",
        "formatter": "### # #####"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "## ### ####"
      }
    ]
  },
  "AT": {
    "country": "AT",
    "countryCode": "43",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "1(?:11|[2-9])",
        "formatter": "# ############"
      },
      {
        "leadingDigitsPattern": "517",
        "formatter": "### ##"
      },
      {
        "leadingDigitsPattern": "5[079]",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
        "formatter": "### ##########"
      },
      {
        "leadingDigitsPattern": "[2-467]|5[2-6]",
        "formatter": "#### #########"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "## #### #######"
      }
    ]
  },
  "AU": {
    "country": "AU",
    "countryCode": "61",
    "iddPrefix": "0011",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "16",
        "formatter": "## ####"
      },
      {
        "leadingDigitsPattern": "16",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "14|4",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[2378]",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "1(?:30|[89])",
        "formatter": "#### ### ###"
      }
    ]
  },
  "BE": {
    "country": "BE",
    "countryCode": "32",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "(?:80|9)0",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "[239]|4[23]",
        "formatter": "# ### ## ##"
      },
      {
        "leadingDigitsPattern": "[15-8]",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "4",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "CA": {
    "country": "CA",
    "countryCode": "1",
    "iddPrefix": "011",
    "nddPrefix": "1",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": [
          "(",
          "[2-9]",
          "\\d",
          "\\d",
          ")",
          " ",
          "\\d",
          "\\d",
          "\\d",
          "-",
          "\\d",
          "\\d",
          "\\d",
          "\\d"
        ]
      }
    ]
  },
  "CH": {
    "country": "CH",
    "countryCode": "41",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8[047]|90",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[2-79]|81",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ### ## ##"
      }
    ]
  },
  "CN": {
    "country": "CN",
    "countryCode": "86",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "(?:10|2[0-57-9])(?:100|9[56])",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "(?:4|80)0",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ########"
      },
      {
        "leadingDigitsPattern": "80",
        "formatter": "#### ### ####"
      },
      {
        "leadingDigitsPattern": "[3-578]",
        "formatter": "### #### ####"
      },
      {
        "leadingDigitsPattern": "1[3-9]",
        "formatter": "### #### ####"
      },
      {
        "leadingDigitsPattern": "[12]",
        "formatter": "## ### ### ####"
      }
    ]
  },
  "CZ": {
    "country": "CZ",
    "countryCode": "420",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-8]|9[015-7]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "## ### ### ###"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ### ### ###"
      }
    ]
  },
  "DE": {
    "country": "DE",
    "countryCode": "49",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "3[02]|40|[68]9",
        "formatter": "## #############"
      },
      {
        "leadingDigitsPattern": "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
        "formatter": "### ############"
      },
      {
        "leadingDigitsPattern": "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]",
        "formatter": "#### ###########"
      },
      {
        "leadingDigitsPattern": "138",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "3",
        "formatter": "##### ##########"
      },
      {
        "leadingDigitsPattern": "181",
        "formatter": "### ###########"
      },
      {
        "leadingDigitsPattern": "1(?:3|80)|9",
        "formatter": "### # ##########"
      },
      {
        "leadingDigitsPattern": "1[67]",
        "formatter": "### ########"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ############"
      },
      {
        "leadingDigitsPattern": "18500",
        "formatter": "##### ######"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "### #### ####"
      },
      {
        "leadingDigitsPattern": "18[68]",
        "formatter": "#### #######"
      },
      {
        "leadingDigitsPattern": "15[0568]",
        "formatter": "##### ######"
      },
      {
        "leadingDigitsPattern": "15[1279]",
        "formatter": "#### #######"
      },
      {
        "leadingDigitsPattern": "18",
        "formatter": "### ########"
      },
      {
        "leadingDigitsPattern": "1(?:6[023]|7)",
        "formatter": "### ## ########"
      },
      {
        "leadingDigitsPattern": "15[279]",
        "formatter": "#### ## #######"
      },
      {
        "leadingDigitsPattern": "15",
        "formatter": "### ## ########"
      }
    ]
  },
  "DK": {
    "country": "DK",
    "countryCode": "45",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "EE":{
    "country":"EE",
    "countryCode":"372",
    "iddPrefix":"00",
    "formatters":[
       {
          "leadingDigitsPattern":"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
          "formatter":"### ####"
       },
       {
          "leadingDigitsPattern":"[45]|8(?:00[1-9]|[1-49])",
          "formatter":"#### ####"
       },
       {
          "leadingDigitsPattern":"7",
          "formatter":"## ## ####"
       },
       {
          "leadingDigitsPattern":"8",
          "formatter":"#### ### ###"
       }
    ]
  },
  "ES": {
    "country": "ES",
    "countryCode": "34",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]00",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[5-9]",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "FI": {
    "country": "FI",
    "countryCode": "358",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2568][1-8]|3(?:0[1-9]|[1-9])|9",
        "formatter": "# #########"
      },
      {
        "leadingDigitsPattern": "[12]00|[368]|70[07-9]",
        "formatter": "### #######"
      },
      {
        "leadingDigitsPattern": "[1245]|7[135]",
        "formatter": "## ########"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "## ##########"
      }
    ]
  },
  "FR": {
    "country": "FR",
    "countryCode": "33",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "[1-79]",
        "formatter": "# ## ## ## ##"
      }
    ]
  },
  "GB": {
    "country": "GB",
    "countryCode": "44",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8001111",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "845464",
        "formatter": "### ## ##"
      },
      {
        "leadingDigitsPattern": "800",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)",
        "formatter": "##### #####"
      },
      {
        "leadingDigitsPattern": "1(?:[2-69][02-9]|[78])",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "[25]|7(?:0|6(?:[03-9]|2[356]))",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "[1389]",
        "formatter": "### ### ####"
      }
    ]
  },
  "GR": {
    "country": "GR",
    "countryCode": "30",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "21|7",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "[2689]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### #####"
      }
    ]
  },
  "HK": {
    "country": "HK",
    "countryCode": "852",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "9003",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "[2-7]|8[1-4]|9(?:0[1-9]|[1-8])",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ## ### ###"
      }
    ]
  },
  "HR": {
    "country": "HR",
    "countryCode": "385",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "6[01]",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "# #### ###"
      },
      {
        "leadingDigitsPattern": "[67]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[2-5]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ###"
      }
    ]
  },
  "HU": {
    "country": "HU",
    "countryCode": "36",
    "iddPrefix": "00",
    "nddPrefix": "06",
    "formatters": [
      {
        "leadingDigitsPattern": "1",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "## ### ####"
      }
    ]
  },
  "IE": {
    "country": "IE",
    "countryCode": "353",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2[24-9]|47|58|6[237-9]|9[35-9]",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "[45]0",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "[2569]|4[1-69]|7[14]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "70",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "81",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[78]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ###"
      },
      {
        "leadingDigitsPattern": "4",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "## # ### ####"
      }
    ]
  },
  "IL": {
    "country": "IL",
    "countryCode": "972",
    "iddPrefix": "0(?:0|1[2-9])",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "125",
        "formatter": "####-###"
      },
      {
        "leadingDigitsPattern": "121",
        "formatter": "####-##-##"
      },
      {
        "leadingDigitsPattern": "[2-489]",
        "formatter": "#-###-####"
      },
      {
        "leadingDigitsPattern": "[57]",
        "formatter": "##-###-####"
      },
      {
        "leadingDigitsPattern": "12",
        "formatter": "####-###-###"
      },
      {
        "leadingDigitsPattern": "159",
        "formatter": "####-######"
      },
      {
        "leadingDigitsPattern": "1[7-9]",
        "formatter": "#-###-###-###"
      },
      {
        "leadingDigitsPattern": "15",
        "formatter": "###-## ###-####"
      }
    ]
  },
  "IN": {
    "country": "IN",
    "countryCode": "91",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)",
        "formatter": "########"
      },
      {
        "leadingDigitsPattern": "1800",
        "formatter": "#### #####"
      },
      {
        "leadingDigitsPattern": "140",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]",
        "formatter": "#### ### ###"
      },
      {
        "leadingDigitsPattern": "[6-9]",
        "formatter": "##### #####"
      },
      {
        "leadingDigitsPattern": "1(?:6|8[06]0)",
        "formatter": "#### #### ####"
      },
      {
        "leadingDigitsPattern": "18",
        "formatter": "#### ### ### ###"
      }
    ]
  },
  "IS": {
    "country": "IS",
    "countryCode": "354",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[4-9]",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "3",
        "formatter": "### ### ###"
      }
    ]
  },
  "IT": {
    "country": "IT",
    "countryCode": "39",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "0[26]",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "0(?:[13-579][2-46-8]|8[236-8])",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "894",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "0[26]|5",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "1[4679]|[38]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "0[13-57-9][0159]",
        "formatter": "### #### ####"
      },
      {
        "leadingDigitsPattern": "0[26]",
        "formatter": "## #### #####"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "#### ### ####"
      },
      {
        "leadingDigitsPattern": "3",
        "formatter": "### #### #####"
      }
    ]
  },
  "JO": {
    "country": "JO",
    "countryCode": "962",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2356]|87",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "70",
        "formatter": "## #######"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "# #### ####"
      }
    ]
  },
  "JP": {
    "country": "JP",
    "countryCode": "81",
    "iddPrefix": "010",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "(?:12|57|99)0",
        "formatter": "###-###-###"
      },
      {
        "leadingDigitsPattern": "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]",
        "formatter": "####-#-####"
      },
      {
        "leadingDigitsPattern": "60",
        "formatter": "##-###-####"
      },
      {
        "leadingDigitsPattern": "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))",
        "formatter": "#-####-####"
      },
      {
        "leadingDigitsPattern": "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
        "formatter": "##-###-####"
      },
      {
        "leadingDigitsPattern": "[14]|[289][2-9]|5[3-9]|7[2-4679]",
        "formatter": "###-##-####"
      },
      {
        "leadingDigitsPattern": "800",
        "formatter": "###-###-####"
      },
      {
        "leadingDigitsPattern": "[257-9]",
        "formatter": "##-####-####"
      }
    ]
  },
  "KR": {
    "country": "KR",
    "countryCode": "82",
    "iddPrefix": "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "(?:3[1-3]|[46][1-4]|5[1-5])1",
        "formatter": "##-####"
      },
      {
        "leadingDigitsPattern": "[1346]|5[1-5]",
        "formatter": "##-####-####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "####-####"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "#-####-####"
      },
      {
        "leadingDigitsPattern": "60|8",
        "formatter": "##-###-####"
      },
      {
        "leadingDigitsPattern": "[57]",
        "formatter": "##-####-####"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "##-#####-####"
      }
    ]
  },
  "LU": {
    "country": "LU",
    "countryCode": "352",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
        "formatter": "## ###"
      },
      {
        "leadingDigitsPattern": "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
        "formatter": "## ## ##"
      },
      {
        "leadingDigitsPattern": "20[2-689]",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "2(?:[0367]|4[3-8])",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "80[01]|90[015]",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "20",
        "formatter": "## ## ## ###"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "2(?:[0367]|4[3-8])",
        "formatter": "## ## ## ## ##"
      },
      {
        "leadingDigitsPattern": "[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]",
        "formatter": "## ## ## #####"
      }
    ]
  },
  "MO": {
    "country": "MO",
    "countryCode": "853",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[268]",
        "formatter": "#### ####"
      }
    ]
  },
  "MX": {
    "country": "MX",
    "countryCode": "52",
    "iddPrefix": "00",
    "nddPrefix": "01",
    "formatters": [
      {
        "leadingDigitsPattern": "33|5[56]|81",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "1(?:33|5[56]|81)",
        "formatter": "# ## ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "# ### ###"
      }
    ]
  },
  "NL": {
    "country": "NL",
    "countryCode": "31",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]0",
        "formatter": "### ## ## ###"
      },
      {
        "leadingDigitsPattern": "66",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "# ## ## ## ##"
      },
      {
        "leadingDigitsPattern": "1[16-8]|2[259]|3[124]|4[17-9]|5[124679]",
        "formatter": "(###) ## ## ##"
      },
      {
        "leadingDigitsPattern": "[1-57-9]",
        "formatter": "(##) ### ## ##"
      }
    ]
  },
  "NO": {
    "country": "NO",
    "countryCode": "47",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[489]|5[89]",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "[235-7]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "NZ": {
    "country": "NZ",
    "countryCode": "64",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8[1-579]",
        "formatter": "## ########"
      },
      {
        "leadingDigitsPattern": "50(?:[0367]|88)|[89]0",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "24|[346]|7[2-57-9]|9[2-9]",
        "formatter": "#-### ####"
      },
      {
        "leadingDigitsPattern": "2(?:10|74)|[59]|80",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "1|2[028]",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "2(?:[169]|7[0-35-9])|7|86",
        "formatter": "## ### #####"
      }
    ]
  },
  "PL": {
    "country": "PL",
    "countryCode": "48",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "19",
        "formatter": "#####"
      },
      {
        "leadingDigitsPattern": "11|64",
        "formatter": "### ###"
      },
      {
        "leadingDigitsPattern": "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "64",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "1[2-8]|[2-7]|8[1-79]|9[145]",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ####"
      }
    ]
  },
  "PR": {
    "country": "PR",
    "countryCode": "1",
    "iddPrefix": "011",
    "nddPrefix": "1",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": [
          "(",
          "[2-9]",
          "\\d",
          "\\d",
          ")",
          " ",
          "\\d",
          "\\d",
          "\\d",
          "-",
          "\\d",
          "\\d",
          "\\d",
          "\\d"
        ]
      }
    ]
  },
  "PT": {
    "country": "PT",
    "countryCode": "351",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "2[12]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[236-9]",
        "formatter": "### ### ###"
      }
    ]
  },
  "RO": {
    "country": "RO",
    "countryCode": "40",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2[3-6]\\d9",
        "formatter": "### ###"
      },
      {
        "leadingDigitsPattern": "219|31",
        "formatter": "## ####"
      },
      {
        "leadingDigitsPattern": "[23]1",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[237-9]",
        "formatter": "### ### ###"
      }
    ]
  },
  "SE": {
    "country": "SE",
    "countryCode": "46",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "20",
        "formatter": "##-### ##"
      },
      {
        "leadingDigitsPattern": "9(?:00|39|44)",
        "formatter": "###-####"
      },
      {
        "leadingDigitsPattern": "[12][136]|3[356]|4[0246]|6[03]|90[1-9]",
        "formatter": "##-### ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "#-### ## ##"
      },
      {
        "leadingDigitsPattern": "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
        "formatter": "###-### ##"
      },
      {
        "leadingDigitsPattern": "9(?:00|39|44)",
        "formatter": "###-### ###"
      },
      {
        "leadingDigitsPattern": "1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]",
        "formatter": "##-### ## ##"
      },
      {
        "leadingDigitsPattern": "10|7",
        "formatter": "##-### ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "#-### ### ##"
      },
      {
        "leadingDigitsPattern": "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
        "formatter": "###-## ## ##"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "###-## ## ###"
      },
      {
        "leadingDigitsPattern": "[26]",
        "formatter": "###-## ### ## ##"
      }
    ]
  },
  "SI":{
    "country":"SI",
    "countryCode":"386",
    "iddPrefix":"00",
    "nddPrefix":"0",
    "formatters":[
       {
          "leadingDigitsPattern":"8[09]|9",
          "formatter":"## ######"
       },
       {
          "leadingDigitsPattern":"59|8",
          "formatter":"### #####"
       },
       {
          "leadingDigitsPattern":"[37][01]|4[0139]|51|6",
          "formatter":"## ### ###"
       },
       {
          "leadingDigitsPattern":"[1-57]",
          "formatter":"# ### ## ##"
       }
    ]
  },
  "SK":{
    "country":"SK",
    "countryCode":"421",
    "iddPrefix":"00",
    "nddPrefix":"0",
    "formatters":[
       {
          "leadingDigitsPattern":"21",
          "formatter":"# ## ####"
       },
       {
          "leadingDigitsPattern":"[3-5][1-8]1[67]",
          "formatter":"## ## ###"
       },
       {
          "leadingDigitsPattern":"2",
          "formatter":"#/### ### ##"
       },
       {
          "leadingDigitsPattern":"[689]",
          "formatter":"### ### ###"
       },
       {
          "leadingDigitsPattern":"[3-5]",
          "formatter":"##/### ## ##"
       }
    ]
  },
  "SG": {
    "country": "SG",
    "countryCode": "65",
    "iddPrefix": "0[0-3]\\d",
    "formatters": [
      {
        "leadingDigitsPattern": "[369]|8(?:0[1-3]|[1-9])",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "#### #### ###"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ####"
      }
    ]
  },
  "TW": {
    "country": "TW",
    "countryCode": "886",
    "iddPrefix": "0(?:0[25-79]|19)",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "202",
        "formatter": "## # ####"
      },
      {
        "leadingDigitsPattern": "[258]0",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "[49]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "## #### #####"
      }
    ]
  },
  "US": {
    "country": "US",
    "countryCode": "1",
    "iddPrefix": "011",
    "nddPrefix": "1",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": [
          "(",
          "[2-9]",
          "\\d",
          "\\d",
          ")",
          " ",
          "\\d",
          "\\d",
          "\\d",
          "-",
          "\\d",
          "\\d",
          "\\d",
          "\\d"
        ]
      }
    ]
  },
  "ZA": {
    "country": "ZA",
    "countryCode": "27",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8[1-4]",
        "formatter": "## ####"
      },
      {
        "leadingDigitsPattern": "8[1-4]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "860",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[1-9]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ####"
      }
    ]
  }
}
