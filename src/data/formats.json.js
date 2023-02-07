// This file is a workaround for a bug in web browsers' "native"
// ES6 importing system which is uncapable of importing "*.json" files.
// https://github.com/catamphetamine/libphonenumber-js/issues/239
export default {
  "AD": {
    "country": "AD",
    "countryCode": "376",
    "formatters": [
      {
        "leadingDigitsPattern": "[135-9]",
        "formatter": "### ###"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "### ### ###"
      }
    ]
  },
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
  "AF": {
    "country": "AF",
    "countryCode": "93",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-7]",
        "formatter": "## ### ####"
      }
    ]
  },
  "AL": {
    "country": "AL",
    "countryCode": "355",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "80|9",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "4[2-6]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[2358][2-5]|4",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[23578]",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "## ### ####"
      }
    ]
  },
  "AM": {
    "country": "AM",
    "countryCode": "374",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]0",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "2|3[12]",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "1|47",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "[3-9]",
        "formatter": "## ######"
      }
    ]
  },
  "AO": {
    "country": "AO",
    "countryCode": "244",
    "formatters": [
      {
        "leadingDigitsPattern": "[29]",
        "formatter": "### ### ###"
      }
    ]
  },
  "AR": {
    "country": "AR",
    "countryCode": "54",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
        "formatter": "#### ##-####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "## ####-####"
      },
      {
        "leadingDigitsPattern": "[68]",
        "formatter": "###-###-####"
      },
      {
        "leadingDigitsPattern": "[23]",
        "formatter": "### ###-####"
      },
      {
        "leadingDigitsPattern": "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
        "formatter": "# 15-####-##",
        "internationalFormat": "# #### ##-####"
      },
      {
        "leadingDigitsPattern": "91",
        "formatter": "# 15-##-####",
        "internationalFormat": "# ## ####-####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "###-###-#####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "# 15-###-###",
        "internationalFormat": "# ### ###-####"
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
  "AW": {
    "country": "AW",
    "countryCode": "297",
    "formatters": [
      {
        "leadingDigitsPattern": "[25-9]",
        "formatter": "### ####"
      }
    ]
  },
  "AZ": {
    "country": "AZ",
    "countryCode": "994",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "90",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "[13-9]",
        "formatter": "## ### ## ##"
      }
    ]
  },
  "BA": {
    "country": "BA",
    "countryCode": "387",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "6[1-3]|[7-9]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[3-5]|6[56]",
        "formatter": "## ###-###"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "## ## ## ###"
      }
    ]
  },
  "BD": {
    "country": "BD",
    "countryCode": "880",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "31[5-8]|[459]1",
        "formatter": "##-######"
      },
      {
        "leadingDigitsPattern": "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]",
        "formatter": "###-#######"
      },
      {
        "leadingDigitsPattern": "[13-9]",
        "formatter": "####-######"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "#-########"
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
  "BF": {
    "country": "BF",
    "countryCode": "226",
    "formatters": [
      {
        "leadingDigitsPattern": "[025-7]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "BG": {
    "country": "BG",
    "countryCode": "359",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "# # ## ##"
      },
      {
        "leadingDigitsPattern": "43[1-6]|70[1-9]",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "(?:70|8)0",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "43[1-7]|7",
        "formatter": "### ### ##"
      },
      {
        "leadingDigitsPattern": "[48]|9[08]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ### ###"
      }
    ]
  },
  "BH": {
    "country": "BH",
    "countryCode": "973",
    "formatters": [
      {
        "leadingDigitsPattern": "[13679]|8[047]",
        "formatter": "#### ####"
      }
    ]
  },
  "BI": {
    "country": "BI",
    "countryCode": "257",
    "formatters": [
      {
        "leadingDigitsPattern": "[2367]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "BJ": {
    "country": "BJ",
    "countryCode": "229",
    "formatters": [
      {
        "leadingDigitsPattern": "[25689]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "BN": {
    "country": "BN",
    "countryCode": "673",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-578]",
        "formatter": "### ####"
      }
    ]
  },
  "BO": {
    "country": "BO",
    "countryCode": "591",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[23]|4[46]",
        "formatter": "# #######"
      },
      {
        "leadingDigitsPattern": "[67]",
        "formatter": "########"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ####"
      }
    ]
  },
  "BR": {
    "country": "BR",
    "countryCode": "55",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "4(?:02|37)0|[34]00",
        "formatter": "####-####"
      },
      {
        "leadingDigitsPattern": "(?:[358]|90)0",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]",
        "formatter": "## ####-####"
      },
      {
        "leadingDigitsPattern": "[16][1-9]|[2-57-9]",
        "formatter": "## #####-####"
      }
    ]
  },
  "BT": {
    "country": "BT",
    "countryCode": "975",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-68]|7[246]",
        "formatter": "# ### ###"
      },
      {
        "leadingDigitsPattern": "1[67]|7",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "BW": {
    "country": "BW",
    "countryCode": "267",
    "formatters": [
      {
        "leadingDigitsPattern": "90",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "[24-6]|3[15-79]",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "[37]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "#### ### ###"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### #### ###"
      }
    ]
  },
  "BY": {
    "country": "BY",
    "countryCode": "375",
    "nddPrefix": "8",
    "formatters": [
      {
        "leadingDigitsPattern": "800",
        "formatter": "### ###"
      },
      {
        "leadingDigitsPattern": "800",
        "formatter": "### ## ####"
      },
      {
        "leadingDigitsPattern": "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
        "formatter": "#### ##-###"
      },
      {
        "leadingDigitsPattern": "1(?:[56]|7[467])|2[1-3]",
        "formatter": "### ##-##-##"
      },
      {
        "leadingDigitsPattern": "[1-4]",
        "formatter": "## ###-##-##"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### #### ####"
      }
    ]
  },
  "BZ": {
    "country": "BZ",
    "countryCode": "501",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-8]",
        "formatter": "###-####"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "#-###-####-###"
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
  "CD": {
    "country": "CD",
    "countryCode": "243",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "88",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "[1-6]",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ### ###"
      }
    ]
  },
  "CF": {
    "country": "CF",
    "countryCode": "236",
    "formatters": [
      {
        "leadingDigitsPattern": "[278]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "CG": {
    "country": "CG",
    "countryCode": "242",
    "formatters": [
      {
        "leadingDigitsPattern": "801",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "[02]",
        "formatter": "## ### ####"
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
  "CI": {
    "country": "CI",
    "countryCode": "225",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "## ## # #####"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "## ## ## ####"
      }
    ]
  },
  "CK": {
    "country": "CK",
    "countryCode": "682",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-578]",
        "formatter": "## ###"
      }
    ]
  },
  "CL": {
    "country": "CL",
    "countryCode": "56",
    "formatters": [
      {
        "leadingDigitsPattern": "2196",
        "formatter": "##### ####"
      },
      {
        "leadingDigitsPattern": "44",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "2[1-3]",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "9[2-9]",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "60|8",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ####"
      },
      {
        "leadingDigitsPattern": "60",
        "formatter": "### ### ## ###"
      }
    ]
  },
  "CM": {
    "country": "CM",
    "countryCode": "237",
    "formatters": [
      {
        "leadingDigitsPattern": "88",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "[26]|88",
        "formatter": "# ## ## ## ##"
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
  "CO": {
    "country": "CO",
    "countryCode": "57",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[14][2-9]|[25-8]",
        "formatter": "# #######"
      },
      {
        "leadingDigitsPattern": "3",
        "formatter": "### #######"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#-###-#######",
        "internationalFormat": "# ### #######"
      }
    ]
  },
  "CR": {
    "country": "CR",
    "countryCode": "506",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-7]|8[3-9]",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "###-###-####"
      }
    ]
  },
  "CU": {
    "country": "CU",
    "countryCode": "53",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2[1-4]|[34]",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "# #######"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "# #######"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### #######"
      }
    ]
  },
  "CV": {
    "country": "CV",
    "countryCode": "238",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-589]",
        "formatter": "### ## ##"
      }
    ]
  },
  "CW": {
    "country": "CW",
    "countryCode": "599",
    "formatters": [
      {
        "leadingDigitsPattern": "[3467]",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "9[4-8]",
        "formatter": "# ### ####"
      }
    ]
  },
  "CY": {
    "country": "CY",
    "countryCode": "357",
    "formatters": [
      {
        "leadingDigitsPattern": "[257-9]",
        "formatter": "## ######"
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
  "DJ": {
    "country": "DJ",
    "countryCode": "253",
    "formatters": [
      {
        "leadingDigitsPattern": "[27]",
        "formatter": "## ## ## ##"
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
  "DZ": {
    "country": "DZ",
    "countryCode": "213",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[1-4]",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "[5-8]",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "EC": {
    "country": "EC",
    "countryCode": "593",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-7]",
        "formatter": "# ###-####",
        "internationalFormat": "#-###-####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ####"
      }
    ]
  },
  "EE": {
    "country": "EE",
    "countryCode": "372",
    "iddPrefix": "00",
    "formatters": [
      {
        "leadingDigitsPattern": "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "[45]|8(?:00[1-9]|[1-49])",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "## ## ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "#### ### ###"
      }
    ]
  },
  "EG": {
    "country": "EG",
    "countryCode": "20",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[23]",
        "formatter": "# ########"
      },
      {
        "leadingDigitsPattern": "1[35]|[4-6]|8[2468]|9[235-7]",
        "formatter": "## #######"
      },
      {
        "leadingDigitsPattern": "[189]",
        "formatter": "### ### ####"
      }
    ]
  },
  "ER": {
    "country": "ER",
    "countryCode": "291",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[178]",
        "formatter": "# ### ###"
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
  "ET": {
    "country": "ET",
    "countryCode": "251",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[1-59]",
        "formatter": "## ### ####"
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
  "FJ": {
    "country": "FJ",
    "countryCode": "679",
    "formatters": [
      {
        "leadingDigitsPattern": "[235-9]|45",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "#### ### ####"
      }
    ]
  },
  "FM": {
    "country": "FM",
    "countryCode": "691",
    "formatters": [
      {
        "leadingDigitsPattern": "[389]",
        "formatter": "### ####"
      }
    ]
  },
  "FO": {
    "country": "FO",
    "countryCode": "298",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "######"
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
  "GA": {
    "country": "GA",
    "countryCode": "241",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-7]",
        "formatter": "# ## ## ##"
      },
      {
        "leadingDigitsPattern": "11|[67]",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "## ## ## ##"
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
  "GE": {
    "country": "GE",
    "countryCode": "995",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "70",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "32",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "[57]",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "[348]",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "GF": {
    "country": "GF",
    "countryCode": "594",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[569]",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "GH": {
    "country": "GH",
    "countryCode": "233",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "[235]",
        "formatter": "## ### ####"
      }
    ]
  },
  "GI": {
    "country": "GI",
    "countryCode": "350",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "### #####"
      }
    ]
  },
  "GL": {
    "country": "GL",
    "countryCode": "299",
    "formatters": [
      {
        "leadingDigitsPattern": "19|[2-689]",
        "formatter": "## ## ##"
      }
    ]
  },
  "GM": {
    "country": "GM",
    "countryCode": "220",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "### ####"
      }
    ]
  },
  "GN": {
    "country": "GN",
    "countryCode": "224",
    "formatters": [
      {
        "leadingDigitsPattern": "3",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "[67]",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "GP": {
    "country": "GP",
    "countryCode": "590",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[569]",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "GQ": {
    "country": "GQ",
    "countryCode": "240",
    "formatters": [
      {
        "leadingDigitsPattern": "[235]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ######"
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
  "GT": {
    "country": "GT",
    "countryCode": "502",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-7]",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ####"
      }
    ]
  },
  "GW": {
    "country": "GW",
    "countryCode": "245",
    "formatters": [
      {
        "leadingDigitsPattern": "40",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "[49]",
        "formatter": "### ### ###"
      }
    ]
  },
  "GY": {
    "country": "GY",
    "countryCode": "592",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-46-9]",
        "formatter": "### ####"
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
  "HN": {
    "country": "HN",
    "countryCode": "504",
    "formatters": [
      {
        "leadingDigitsPattern": "[237-9]",
        "formatter": "####-####"
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
  "HT": {
    "country": "HT",
    "countryCode": "509",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-489]",
        "formatter": "## ## ####"
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
  "ID": {
    "country": "ID",
    "countryCode": "62",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "15",
        "formatter": "# ### ###"
      },
      {
        "leadingDigitsPattern": "2[124]|[36]1",
        "formatter": "## #########"
      },
      {
        "leadingDigitsPattern": "800",
        "formatter": "### #######"
      },
      {
        "leadingDigitsPattern": "[2-79]",
        "formatter": "### ########"
      },
      {
        "leadingDigitsPattern": "8[1-35-9]",
        "formatter": "###-####-###"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "### ########"
      },
      {
        "leadingDigitsPattern": "804",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "80",
        "formatter": "### # ### ###"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "###-####-#####"
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
  "IO": {
    "country": "IO",
    "countryCode": "246",
    "formatters": [
      {
        "leadingDigitsPattern": "3",
        "formatter": "### ####"
      }
    ]
  },
  "IQ": {
    "country": "IQ",
    "countryCode": "964",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "1",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[2-6]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "### ### ####"
      }
    ]
  },
  "IR": {
    "country": "IR",
    "countryCode": "98",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "96",
        "formatter": "#####"
      },
      {
        "leadingDigitsPattern": "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "[1-8]",
        "formatter": "## #### ####"
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
  "KE": {
    "country": "KE",
    "countryCode": "254",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[24-6]",
        "formatter": "## #######"
      },
      {
        "leadingDigitsPattern": "[17]",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ### ####"
      }
    ]
  },
  "KG": {
    "country": "KG",
    "countryCode": "996",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "3(?:1[346]|[24-79])",
        "formatter": "#### #####"
      },
      {
        "leadingDigitsPattern": "[235-79]|88",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### # ###"
      }
    ]
  },
  "KH": {
    "country": "KH",
    "countryCode": "855",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[1-9]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ###"
      }
    ]
  },
  "KM": {
    "country": "KM",
    "countryCode": "269",
    "formatters": [
      {
        "leadingDigitsPattern": "[3478]",
        "formatter": "### ## ##"
      }
    ]
  },
  "KP": {
    "country": "KP",
    "countryCode": "850",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[2-7]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "### ### ####"
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
  "KW": {
    "country": "KW",
    "countryCode": "965",
    "formatters": [
      {
        "leadingDigitsPattern": "[169]|2(?:[235]|4[1-35-9])|52",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "[25]",
        "formatter": "### #####"
      }
    ]
  },
  "LA": {
    "country": "LA",
    "countryCode": "856",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2[13]|3[14]|[4-8]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "30[013-9]",
        "formatter": "## ## ## ###"
      },
      {
        "leadingDigitsPattern": "[23]",
        "formatter": "## ## ### ###"
      }
    ]
  },
  "LB": {
    "country": "LB",
    "countryCode": "961",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]",
        "formatter": "# ### ###"
      },
      {
        "leadingDigitsPattern": "[27-9]",
        "formatter": "## ### ###"
      }
    ]
  },
  "LI": {
    "country": "LI",
    "countryCode": "423",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[237-9]",
        "formatter": "### ## ##"
      },
      {
        "leadingDigitsPattern": "69",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "### ### ###"
      }
    ]
  },
  "LK": {
    "country": "LK",
    "countryCode": "94",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "7",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[1-689]",
        "formatter": "### ### ###"
      }
    ]
  },
  "LR": {
    "country": "LR",
    "countryCode": "231",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[4-6]",
        "formatter": "# ### ###"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[3578]",
        "formatter": "## ### ####"
      }
    ]
  },
  "LS": {
    "country": "LS",
    "countryCode": "266",
    "formatters": [
      {
        "leadingDigitsPattern": "[2568]",
        "formatter": "#### ####"
      }
    ]
  },
  "LT": {
    "country": "LT",
    "countryCode": "370",
    "nddPrefix": "8",
    "formatters": [
      {
        "leadingDigitsPattern": "52[0-7]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[7-9]",
        "formatter": "### ## ###"
      },
      {
        "leadingDigitsPattern": "37|4(?:[15]|6[1-8])",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "[3-6]",
        "formatter": "### #####"
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
  "LV": {
    "country": "LV",
    "countryCode": "371",
    "formatters": [
      {
        "leadingDigitsPattern": "[269]|8[01]",
        "formatter": "## ### ###"
      }
    ]
  },
  "LY": {
    "country": "LY",
    "countryCode": "218",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "##-#######"
      }
    ]
  },
  "MA": {
    "country": "MA",
    "countryCode": "212",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "5(?:29|38)[89]0",
        "formatter": "#####-####"
      },
      {
        "leadingDigitsPattern": "5[45]",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892",
        "formatter": "####-#####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "##-#######"
      },
      {
        "leadingDigitsPattern": "[5-7]",
        "formatter": "###-######"
      }
    ]
  },
  "MC": {
    "country": "MC",
    "countryCode": "377",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "4",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[389]",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "# ## ## ## ##"
      }
    ]
  },
  "MD": {
    "country": "MD",
    "countryCode": "373",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "22|3",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[25-7]",
        "formatter": "### ## ###"
      }
    ]
  },
  "ME": {
    "country": "ME",
    "countryCode": "382",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "## ### ####"
      }
    ]
  },
  "MG": {
    "country": "MG",
    "countryCode": "261",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[23]",
        "formatter": "## ## ### ##"
      }
    ]
  },
  "MH": {
    "country": "MH",
    "countryCode": "692",
    "nddPrefix": "1",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-6]",
        "formatter": "###-####"
      }
    ]
  },
  "MK": {
    "country": "MK",
    "countryCode": "389",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[347]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[58]",
        "formatter": "### # ## ##"
      }
    ]
  },
  "ML": {
    "country": "ML",
    "countryCode": "223",
    "formatters": [
      {
        "leadingDigitsPattern": "[24-9]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "MM": {
    "country": "MM",
    "countryCode": "95",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "16|2",
        "formatter": "# ## ###"
      },
      {
        "leadingDigitsPattern": "[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "[12]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[4-7]|8[1-35]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "9(?:2[0-4]|[35-9]|4[137-9])",
        "formatter": "# ### ######"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "92",
        "formatter": "# ### ### ###"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "# ##### ####"
      }
    ]
  },
  "MN": {
    "country": "MN",
    "countryCode": "976",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[12]1",
        "formatter": "## ## ####"
      },
      {
        "leadingDigitsPattern": "[57-9]",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "[12]2[1-3]",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "[12]",
        "formatter": "##### #####"
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
  "MQ": {
    "country": "MQ",
    "countryCode": "596",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[569]",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "MR": {
    "country": "MR",
    "countryCode": "222",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-48]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "MT": {
    "country": "MT",
    "countryCode": "356",
    "formatters": [
      {
        "leadingDigitsPattern": "[2357-9]",
        "formatter": "#### ####"
      }
    ]
  },
  "MU": {
    "country": "MU",
    "countryCode": "230",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-46]|8[013]",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "#### ####"
      }
    ]
  },
  "MV": {
    "country": "MV",
    "countryCode": "960",
    "formatters": [
      {
        "leadingDigitsPattern": "[3467]|9[13-9]",
        "formatter": "###-####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ### ####"
      }
    ]
  },
  "MW": {
    "country": "MW",
    "countryCode": "265",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "1[2-9]",
        "formatter": "# ### ###"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[137-9]",
        "formatter": "### ## ## ##"
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
        "formatter": "# ## #### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "# ### ### ####"
      }
    ]
  },
  "MY": {
    "country": "MY",
    "countryCode": "60",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[4-79]",
        "formatter": "#-### ####"
      },
      {
        "leadingDigitsPattern": "1(?:[02469]|[378][1-9])|8",
        "formatter": "##-### ####"
      },
      {
        "leadingDigitsPattern": "3",
        "formatter": "#-#### ####"
      },
      {
        "leadingDigitsPattern": "1[36-8]",
        "formatter": "#-###-##-####"
      },
      {
        "leadingDigitsPattern": "15",
        "formatter": "###-### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "##-#### ####"
      }
    ]
  },
  "MZ": {
    "country": "MZ",
    "countryCode": "258",
    "formatters": [
      {
        "leadingDigitsPattern": "2|8[2-79]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ###"
      }
    ]
  },
  "NA": {
    "country": "NA",
    "countryCode": "264",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "88",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "87",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "## ### ####"
      }
    ]
  },
  "NC": {
    "country": "NC",
    "countryCode": "687",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-57-9]",
        "formatter": "##.##.##"
      }
    ]
  },
  "NE": {
    "country": "NE",
    "countryCode": "227",
    "formatters": [
      {
        "leadingDigitsPattern": "08",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[089]|2[013]|7[04]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "NF": {
    "country": "NF",
    "countryCode": "672",
    "formatters": [
      {
        "leadingDigitsPattern": "1[0-3]",
        "formatter": "## ####"
      },
      {
        "leadingDigitsPattern": "[13]",
        "formatter": "# #####"
      }
    ]
  },
  "NG": {
    "country": "NG",
    "countryCode": "234",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "78",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "[12]|9(?:0[3-9]|[1-9])",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[3-7]|8[2-9]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[7-9]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "[78]",
        "formatter": "### #### #####"
      },
      {
        "leadingDigitsPattern": "[78]",
        "formatter": "### ##### ######"
      }
    ]
  },
  "NI": {
    "country": "NI",
    "countryCode": "505",
    "formatters": [
      {
        "leadingDigitsPattern": "[125-8]",
        "formatter": "#### ####"
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
  "NP": {
    "country": "NP",
    "countryCode": "977",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "1[2-6]",
        "formatter": "#-#######"
      },
      {
        "leadingDigitsPattern": "1[01]|[2-8]|9(?:[1-579]|6[2-6])",
        "formatter": "##-######"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "###-#######"
      }
    ]
  },
  "NR": {
    "country": "NR",
    "countryCode": "674",
    "formatters": [
      {
        "leadingDigitsPattern": "[4-68]",
        "formatter": "### ####"
      }
    ]
  },
  "NU": {
    "country": "NU",
    "countryCode": "683",
    "formatters": [
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ####"
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
  "OM": {
    "country": "OM",
    "countryCode": "968",
    "formatters": [
      {
        "leadingDigitsPattern": "[58]",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "[179]",
        "formatter": "#### ####"
      }
    ]
  },
  "PA": {
    "country": "PA",
    "countryCode": "507",
    "formatters": [
      {
        "leadingDigitsPattern": "[1-57-9]",
        "formatter": "###-####"
      },
      {
        "leadingDigitsPattern": "[68]",
        "formatter": "####-####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ####"
      }
    ]
  },
  "PE": {
    "country": "PE",
    "countryCode": "51",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "80",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "# #######"
      },
      {
        "leadingDigitsPattern": "[4-8]",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ### ###"
      }
    ]
  },
  "PF": {
    "country": "PF",
    "countryCode": "689",
    "formatters": [
      {
        "leadingDigitsPattern": "44",
        "formatter": "## ## ##"
      },
      {
        "leadingDigitsPattern": "4|8[7-9]",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "PG": {
    "country": "PG",
    "countryCode": "675",
    "formatters": [
      {
        "leadingDigitsPattern": "18|[2-69]|85",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "[78]",
        "formatter": "#### ####"
      }
    ]
  },
  "PH": {
    "country": "PH",
    "countryCode": "63",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "# #####"
      },
      {
        "leadingDigitsPattern": "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "3469|4(?:279|9(?:30|56))|8834",
        "formatter": "##### ####"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "# #### ####"
      },
      {
        "leadingDigitsPattern": "[3-7]|8[2-8]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ## ### ####"
      }
    ]
  },
  "PK": {
    "country": "PK",
    "countryCode": "92",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]0",
        "formatter": "### ### #######"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### #####"
      },
      {
        "leadingDigitsPattern": "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]",
        "formatter": "### #######"
      },
      {
        "leadingDigitsPattern": "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]",
        "formatter": "## ########"
      },
      {
        "leadingDigitsPattern": "58",
        "formatter": "##### #####"
      },
      {
        "leadingDigitsPattern": "3",
        "formatter": "### #######"
      },
      {
        "leadingDigitsPattern": "2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91",
        "formatter": "## ### ### ###"
      },
      {
        "leadingDigitsPattern": "[24-9]",
        "formatter": "### ### ### ###"
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
  "PM": {
    "country": "PM",
    "countryCode": "508",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[45]",
        "formatter": "## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
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
  "PS": {
    "country": "PS",
    "countryCode": "970",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2489]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ###"
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
  "PW": {
    "country": "PW",
    "countryCode": "680",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]",
        "formatter": "### ####"
      }
    ]
  },
  "PY": {
    "country": "PY",
    "countryCode": "595",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-9]0",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "87",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "9(?:[5-79]|8[1-6])",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "[2-8]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "#### ### ####"
      }
    ]
  },
  "QA": {
    "country": "QA",
    "countryCode": "974",
    "formatters": [
      {
        "leadingDigitsPattern": "2[126]|8",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "[2-7]",
        "formatter": "#### ####"
      }
    ]
  },
  "RE": {
    "country": "RE",
    "countryCode": "262",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[2689]",
        "formatter": "### ## ## ##"
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
  "RS": {
    "country": "RS",
    "countryCode": "381",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "(?:2[389]|39)0|[7-9]",
        "formatter": "### #########"
      },
      {
        "leadingDigitsPattern": "[1-36]",
        "formatter": "## ##########"
      }
    ]
  },
  "RU": {
    "country": "RU",
    "countryCode": "7",
    "nddPrefix": "8",
    "formatters": [
      {
        "leadingDigitsPattern": "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2",
        "formatter": "#### ## ## ##"
      },
      {
        "leadingDigitsPattern": "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]",
        "formatter": "##### # ## ##"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "[3489]",
        "formatter": "### ###-##-##"
      }
    ]
  },
  "RW": {
    "country": "RW",
    "countryCode": "250",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "0",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "[7-9]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "### ### ###"
      }
    ]
  },
  "SA": {
    "country": "SA",
    "countryCode": "966",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "9",
        "formatter": "#### #####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "5",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "81",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ### ####"
      }
    ]
  },
  "SB": {
    "country": "SB",
    "countryCode": "677",
    "formatters": [
      {
        "leadingDigitsPattern": "7|8[4-9]|9(?:[1-8]|9[0-8])",
        "formatter": "## #####"
      }
    ]
  },
  "SC": {
    "country": "SC",
    "countryCode": "248",
    "formatters": [
      {
        "leadingDigitsPattern": "[246]|9[57]",
        "formatter": "# ### ###"
      }
    ]
  },
  "SD": {
    "country": "SD",
    "countryCode": "249",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[19]",
        "formatter": "## ### ####"
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
        "formatter": "##-### ##",
        "internationalFormat": "## ### ##"
      },
      {
        "leadingDigitsPattern": "9(?:00|39|44)",
        "formatter": "###-####",
        "internationalFormat": "### ####"
      },
      {
        "leadingDigitsPattern": "[12][136]|3[356]|4[0246]|6[03]|90[1-9]",
        "formatter": "##-### ##",
        "internationalFormat": "## ### ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "#-### ## ##",
        "internationalFormat": "# ### ## ##"
      },
      {
        "leadingDigitsPattern": "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
        "formatter": "###-### ##",
        "internationalFormat": "### ### ##"
      },
      {
        "leadingDigitsPattern": "9(?:00|39|44)",
        "formatter": "###-### ###",
        "internationalFormat": "### ### ###"
      },
      {
        "leadingDigitsPattern": "1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]",
        "formatter": "##-### ## ##",
        "internationalFormat": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "10|7",
        "formatter": "##-### ## ##",
        "internationalFormat": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "#-### ### ##",
        "internationalFormat": "# ### ### ##"
      },
      {
        "leadingDigitsPattern": "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
        "formatter": "###-## ## ##",
        "internationalFormat": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "###-## ## ###",
        "internationalFormat": "### ## ## ###"
      },
      {
        "leadingDigitsPattern": "[26]",
        "formatter": "###-## ### ## ##",
        "internationalFormat": "### ## ### ## ##"
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
  "SI": {
    "country": "SI",
    "countryCode": "386",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8[09]|9",
        "formatter": "## ######"
      },
      {
        "leadingDigitsPattern": "59|8",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "[37][01]|4[0139]|51|6",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[1-57]",
        "formatter": "# ### ## ##"
      }
    ]
  },
  "SK": {
    "country": "SK",
    "countryCode": "421",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "21",
        "formatter": "# ## ####"
      },
      {
        "leadingDigitsPattern": "[3-5][1-8]1[67]",
        "formatter": "## ## ###"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "#/### ### ##"
      },
      {
        "leadingDigitsPattern": "[689]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[3-5]",
        "formatter": "##/### ## ##"
      }
    ]
  },
  "SL": {
    "country": "SL",
    "countryCode": "232",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[236-9]",
        "formatter": "## ######"
      }
    ]
  },
  "SM": {
    "country": "SM",
    "countryCode": "378",
    "formatters": [
      {
        "leadingDigitsPattern": "[5-7]",
        "formatter": "## ## ## ##"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "#### ######"
      }
    ]
  },
  "SN": {
    "country": "SN",
    "countryCode": "221",
    "formatters": [
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      },
      {
        "leadingDigitsPattern": "[379]",
        "formatter": "## ### ## ##"
      }
    ]
  },
  "SO": {
    "country": "SO",
    "countryCode": "252",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "8[125]",
        "formatter": "## ####"
      },
      {
        "leadingDigitsPattern": "[134]",
        "formatter": "######"
      },
      {
        "leadingDigitsPattern": "[15]|2[0-79]|3[0-46-8]|4[0-7]",
        "formatter": "# ######"
      },
      {
        "leadingDigitsPattern": "24|[67]",
        "formatter": "# #######"
      },
      {
        "leadingDigitsPattern": "[3478]|64|90",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "1|28|6[1-35-9]|9[2-9]",
        "formatter": "## #######"
      }
    ]
  },
  "SR": {
    "country": "SR",
    "countryCode": "597",
    "formatters": [
      {
        "leadingDigitsPattern": "56",
        "formatter": "##-##-##"
      },
      {
        "leadingDigitsPattern": "[2-5]",
        "formatter": "###-###"
      },
      {
        "leadingDigitsPattern": "[6-8]",
        "formatter": "###-####"
      }
    ]
  },
  "SS": {
    "country": "SS",
    "countryCode": "211",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[19]",
        "formatter": "### ### ###"
      }
    ]
  },
  "ST": {
    "country": "ST",
    "countryCode": "239",
    "formatters": [
      {
        "leadingDigitsPattern": "[29]",
        "formatter": "### ####"
      }
    ]
  },
  "SV": {
    "country": "SV",
    "countryCode": "503",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "[267]",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### #### ####"
      }
    ]
  },
  "SY": {
    "country": "SY",
    "countryCode": "963",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[1-5]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "### ### ###"
      }
    ]
  },
  "SZ": {
    "country": "SZ",
    "countryCode": "268",
    "formatters": [
      {
        "leadingDigitsPattern": "[0237]",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "##### ####"
      }
    ]
  },
  "TD": {
    "country": "TD",
    "countryCode": "235",
    "formatters": [
      {
        "leadingDigitsPattern": "[2679]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "TG": {
    "country": "TG",
    "countryCode": "228",
    "formatters": [
      {
        "leadingDigitsPattern": "[279]",
        "formatter": "## ## ## ##"
      }
    ]
  },
  "TH": {
    "country": "TH",
    "countryCode": "66",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "[13-9]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ### ###"
      }
    ]
  },
  "TJ": {
    "country": "TJ",
    "countryCode": "992",
    "nddPrefix": "8",
    "formatters": [
      {
        "leadingDigitsPattern": "3317",
        "formatter": "###### # ##"
      },
      {
        "leadingDigitsPattern": "[34]7|91[78]",
        "formatter": "### ## ####"
      },
      {
        "leadingDigitsPattern": "3[1-5]",
        "formatter": "#### # ####"
      },
      {
        "leadingDigitsPattern": "[02-57-9]|11",
        "formatter": "## ### ####"
      }
    ]
  },
  "TL": {
    "country": "TL",
    "countryCode": "670",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-489]|70",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "#### ####"
      }
    ]
  },
  "TM": {
    "country": "TM",
    "countryCode": "993",
    "nddPrefix": "8",
    "formatters": [
      {
        "leadingDigitsPattern": "12",
        "formatter": "## ##-##-##"
      },
      {
        "leadingDigitsPattern": "[1-5]",
        "formatter": "### #-##-##"
      },
      {
        "leadingDigitsPattern": "6",
        "formatter": "## ######"
      }
    ]
  },
  "TN": {
    "country": "TN",
    "countryCode": "216",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-57-9]",
        "formatter": "## ### ###"
      }
    ]
  },
  "TO": {
    "country": "TO",
    "countryCode": "676",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-4]|50|6[09]|7[0-24-69]|8[05]",
        "formatter": "##-###"
      },
      {
        "leadingDigitsPattern": "0",
        "formatter": "#### ###"
      },
      {
        "leadingDigitsPattern": "[5-9]",
        "formatter": "### ####"
      }
    ]
  },
  "TR": {
    "country": "TR",
    "countryCode": "90",
    "iddPrefix": "00",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "512|8[01589]|90",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "5(?:[0-59]|6161)",
        "formatter": "### ### ## ##"
      },
      {
        "leadingDigitsPattern": "[24][1-8]|3[1-9]",
        "formatter": "### ### ## ##"
      },
      {
        "leadingDigitsPattern": "80",
        "formatter": "### ### #######"
      }
    ]
  },
  "TV": {
    "country": "TV",
    "countryCode": "688",
    "formatters": [
      {
        "leadingDigitsPattern": "2",
        "formatter": "## ###"
      },
      {
        "leadingDigitsPattern": "90",
        "formatter": "## ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "## #####"
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
  "TZ": {
    "country": "TZ",
    "countryCode": "255",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ## ####"
      },
      {
        "leadingDigitsPattern": "[24]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[67]",
        "formatter": "### ### ###"
      }
    ]
  },
  "UA": {
    "country": "UA",
    "countryCode": "380",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "[3-6]",
        "formatter": "#### #####"
      },
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### ### ####"
      }
    ]
  },
  "UG": {
    "country": "UG",
    "countryCode": "256",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2024",
        "formatter": "#### #####"
      },
      {
        "leadingDigitsPattern": "[27-9]|4(?:6[45]|[7-9])",
        "formatter": "### ######"
      },
      {
        "leadingDigitsPattern": "[34]",
        "formatter": "## #######"
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
        ],
        "internationalFormat": "###-###-####"
      }
    ]
  },
  "UY": {
    "country": "UY",
    "countryCode": "598",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "405|8|90",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "9",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[24]",
        "formatter": "#### ####"
      },
      {
        "leadingDigitsPattern": "4",
        "formatter": "### ### ####"
      }
    ]
  },
  "UZ": {
    "country": "UZ",
    "countryCode": "998",
    "nddPrefix": "8",
    "formatters": [
      {
        "leadingDigitsPattern": "[35-9]",
        "formatter": "## ### ## ##"
      }
    ]
  },
  "VE": {
    "country": "VE",
    "countryCode": "58",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[24-689]",
        "formatter": "###-#######"
      }
    ]
  },
  "VN": {
    "country": "VN",
    "countryCode": "84",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "80",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "1",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "[69]",
        "formatter": "## ### ## ##"
      },
      {
        "leadingDigitsPattern": "[3578]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "2[48]",
        "formatter": "## #### ####"
      },
      {
        "leadingDigitsPattern": "2",
        "formatter": "### #### ###"
      }
    ]
  },
  "VU": {
    "country": "VU",
    "countryCode": "678",
    "formatters": [
      {
        "leadingDigitsPattern": "[57-9]",
        "formatter": "### ####"
      }
    ]
  },
  "WF": {
    "country": "WF",
    "countryCode": "681",
    "formatters": [
      {
        "leadingDigitsPattern": "[478]",
        "formatter": "## ## ##"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "### ## ## ##"
      }
    ]
  },
  "WS": {
    "country": "WS",
    "countryCode": "685",
    "formatters": [
      {
        "leadingDigitsPattern": "[2-5]|6[1-9]",
        "formatter": "#####"
      },
      {
        "leadingDigitsPattern": "[68]",
        "formatter": "### #######"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "## #####"
      }
    ]
  },
  "XK": {
    "country": "XK",
    "countryCode": "383",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[89]",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "[2-4]",
        "formatter": "## ### ###"
      },
      {
        "leadingDigitsPattern": "[23]",
        "formatter": "### ### ###"
      }
    ]
  },
  "YE": {
    "country": "YE",
    "countryCode": "967",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[1-6]|7[24-68]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "### ### ###"
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
  },
  "ZM": {
    "country": "ZM",
    "countryCode": "260",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "[28]",
        "formatter": "### ### ###"
      },
      {
        "leadingDigitsPattern": "[79]",
        "formatter": "## #######"
      }
    ]
  },
  "ZW": {
    "country": "ZW",
    "countryCode": "263",
    "nddPrefix": "0",
    "formatters": [
      {
        "leadingDigitsPattern": "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]",
        "formatter": "### #####"
      },
      {
        "leadingDigitsPattern": "[49]",
        "formatter": "# ### ####"
      },
      {
        "leadingDigitsPattern": "80",
        "formatter": "### ####"
      },
      {
        "leadingDigitsPattern": "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]",
        "formatter": "## #######"
      },
      {
        "leadingDigitsPattern": "7",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)",
        "formatter": "### ### ####"
      },
      {
        "leadingDigitsPattern": "8",
        "formatter": "#### ######"
      },
      {
        "leadingDigitsPattern": "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]",
        "formatter": "## #####"
      },
      {
        "leadingDigitsPattern": "29[013-9]|39|54",
        "formatter": "## ### ####"
      },
      {
        "leadingDigitsPattern": "258|5483",
        "formatter": "#### #####"
      }
    ]
  }
}