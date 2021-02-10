export const mrt = {
  "Pages": {
    "0": {
      "Guid": "8112ee4016274208a5d518a05b16f4db",
      "Name": "Страница1",
      "Brush": "solid:White",
      "Ident": "StiPage",
      "Border": ";;2;;;;;solid:Black",
      "Margins": {
        "Top": 1,
        "Left": 1,
        "Right": 1,
        "Bottom": 1
      },
      "PageWidth": 29.7,
      "Watermark": {
        "TextBrush": "solid:50,0,0,0"
      },
      "Components": {
        "0": {
          "Name": "ЗаголовокОтчета1",
          "Brush": "solid:",
          "Ident": "StiReportTitleBand",
          "Border": ";;;;;;;solid:Black",
          "Components": {
            "0": {
              "Guid": "d0bc568f30439ee0bb00b57a887dcd37",
              "Name": "Текст2",
              "Text": {
                "Value": "<h1 style=\"margin-bottom:12.0pt\"><b><span style=\"line-height: 107%;\"><font size=\"24\"><font color=\"#5b9bd5\">Справка по проблемным объектам&nbsp;</font><o:p></o:p></font></span></b></h1>\r\n\r\n<p class=\"MsoListParagraph\" style=\"margin-top:12.0pt;margin-right:0cm;margin-bottom:\r\n6.0pt;margin-left:35.7pt;text-indent:-17.85pt;line-height:150%;mso-list:l0 level1 lfo1\"><br></p>"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": ";;;;;;;solid:Black",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "TextQuality": "Wysiwyg",
              "AllowHtmlTags": true,
              "ClientRectangle": "0.2,0.2,27.6,1.2"
            }
          },
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "ClientRectangle": "0,0.4,27.7,1.4"
        },
        "1": {
          "Name": "ЗаголовокГруппы1",
          "Brush": "solid:",
          "Ident": "StiGroupHeaderBand",
          "Border": ";;;;;;;solid:Black",
          "Condition": {
            "Value": "{Объект.РПО}"
          },
          "Components": {
            "0": {
              "Font": "Calibri;11;Bold;",
              "Guid": "c231d9ee74094aec93c44967a38e0141",
              "Name": "Text16",
              "Text": {
                "Value": "Объект"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0.6,1.4,5,3"
            },
            "1": {
              "Font": "Calibri;11;Bold;",
              "Guid": "6f317c2075694dd5b0f18316acd9cd92",
              "Name": "Text17",
              "Text": {
                "Value": "Динамика дней отставания"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "5.6,1.4,1.6,3"
            },
            "2": {
              "Font": "Calibri;11;Bold;",
              "Guid": "2a853e815d3140348c9717c0f7c8babd",
              "Name": "Text18",
              "Text": {
                "Value": "Текущая дата {Фильтр.ТекДата}"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:0,0,0",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "17.8,1.4,4.8,0.8"
            },
            "3": {
              "Font": "Calibri;11;Bold;",
              "Guid": "d5d18d42773840d1b501f56490e56877",
              "Name": "Text19",
              "Text": {
                "Value": "Статус"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "17.8,2.2,1.8,2.2"
            },
            "4": {
              "Font": "Calibri;11;Bold;",
              "Guid": "49d0df4049e74848b64ae53ce52820f2",
              "Name": "Text20",
              "Text": {
                "Value": "Процент готовности"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "19.6,2.2,1.5,2.2"
            },
            "5": {
              "Font": "Calibri;11;Bold;",
              "Guid": "d6b01137927f4e8e9ed52eb833cc369c",
              "Name": "Text21",
              "Text": {
                "Value": "Дней отставаний"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "21.1,2.2,1.5,2.2"
            },
            "6": {
              "Font": "Calibri;11;Bold;",
              "Guid": "3be2fd1afdd74e8fb6e40c8e10d20faa",
              "Name": "Text22",
              "Text": {
                "Value": "Значения за прошлый период {Фильтр.ПрошлДата}"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:0,0,0",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "22.6,1.4,5,0.8"
            },
            "7": {
              "Font": "Calibri;11;Bold;",
              "Guid": "3f6ed20c4ddd4d1f83c821d9ccfb2bca",
              "Name": "Text23",
              "Text": {
                "Value": "Статус"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "22.6,2.2,2,2.2"
            },
            "8": {
              "Font": "Calibri;11;Bold;",
              "Guid": "145f8a03ba2a42bba0b0ff9853c7d53c",
              "Name": "Text24",
              "Text": {
                "Value": "Процент готовности"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "24.6,2.2,1.5,2.2"
            },
            "9": {
              "Font": "Calibri;11;Bold;",
              "Guid": "937a4ffacef34cd1b76bba8c895cc08e",
              "Name": "Text25",
              "Text": {
                "Value": "Дней отставаний"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "26.1,2.2,1.5,2.2"
            },
            "10": {
              "Font": "Calibri;11;Bold;",
              "Guid": "7b94c465c4f84021bd5f344be2e7492e",
              "Name": "Text26",
              "Text": {
                "Value": "№пп"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0,1.4,0.6,3"
            },
            "11": {
              "Font": "Calibri;11;Bold;",
              "Guid": "625210027f5446a2b8746fac09abf6cb",
              "Name": "Text28",
              "Text": {
                "Value": "Финансовые показатели,\r\nтыс. руб.\r\n"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:0,0,0",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,1.4,10.6,0.8"
            },
            "12": {
              "Font": "Calibri;11;Bold;",
              "Guid": "009c625559ab41f8880648e98db7fad2",
              "Name": "Text29",
              "Text": {
                "Value": "Решения ИК / СД ГО"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,2.2,4.2,0.8"
            },
            "13": {
              "Font": "Calibri;11;Bold;",
              "Guid": "052f7ecbe897486c87d4b8aedeecf577",
              "Name": "Text30",
              "Text": {
                "Value": "Бюджет, утвержденный на ИК"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,3,2.4,1.4"
            },
            "14": {
              "Font": "Calibri;11;Bold;",
              "Guid": "42574bac0884449db05c022e13bfb977",
              "Name": "Text31",
              "Text": {
                "Value": "Решение (дата, номер)"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "9.6,3,1.8,1.4"
            },
            "15": {
              "Font": "Calibri;11;Bold;",
              "Guid": "e977c0e15a86436e9f5e8671e25766ba",
              "Name": "Text32",
              "Text": {
                "Value": "Плановая стоимость в системе ПСС"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "11.4,2.2,2.2,2.2"
            },
            "16": {
              "Font": "Calibri;11;Bold;",
              "Guid": "c3ce52d44cc7482c8e94ef90eb07e57d",
              "Name": "Text33",
              "Text": {
                "Value": "Фактическое освоение в системе ПСС"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "13.6,2.2,2,2.2"
            },
            "17": {
              "Font": "Calibri;11;Bold;",
              "Guid": "18e8694ccfba4bd496cc828c49d355d8",
              "Name": "Text34",
              "Text": {
                "Value": "Остаток освоения"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "15.6,2.2,2.2,2.2"
            },
            "18": {
              "Font": ";14;Bold;",
              "Guid": "9260444259674ab5876816b3b3eea6ab",
              "Name": "Text53",
              "Text": {
                "Value": "{Объект.РПО}"
              },
              "Type": "Expression",
              "Brush": "solid:White",
              "Ident": "StiText",
              "Border": ";;;;;;;solid:0,0,0",
              "CanGrow": true,
              "Margins": {
                "Top": 0,
                "Left": 5,
                "Right": 0,
                "Bottom": 0
              },
              "TextBrush": "solid:91,155,213",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "VertAlignment": "Center",
              "ClientRectangle": "0,0.2,14.6,0.8"
            }
          },
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "ClientRectangle": "0,2.6,27.7,4.4"
        },
        "2": {
          "Guid": "6fad4f1d80b04038a83bb7084774e6f4",
          "Name": "Данные3",
          "Sort": {
            "0": "ASC",
            "1": "Объект"
          },
          "Brush": "solid:",
          "Ident": "StiDataBand",
          "Border": ";;;;;;;solid:Black",
          "Filters": {
            "0": {
              "Ident": "StiFilter",
              "Column": "ТекДатаСтатус",
              "Value1": "Есть отставания",
              "Condition": "Containing"
            },
            "1": {
              "Ident": "StiFilter",
              "Column": "ТекДатаСтатус",
              "Value1": "Срыв сроков",
              "Condition": "Containing"
            },
            "2": {
              "Ident": "StiFilter",
              "Column": "ТекДатаСтатус",
              "Value1": "В графике",
              "Condition": "Containing"
            }
          },
          "Components": {
            "0": {
              "Font": "Calibri;11;;",
              "Guid": "fa96136816c242bfa1be3e1212c3f001",
              "Name": "Текст20",
              "Text": {
                "Value": "{Объект.Объект}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "Margins": {
                "Top": 0,
                "Left": 5,
                "Right": 0,
                "Bottom": 0
              },
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "VertAlignment": "Center",
              "ClientRectangle": "0.6,0,5,0.8"
            },
            "1": {
              "Font": "Calibri;11;;",
              "Guid": "2659c29a35ee40aaa20e3891a28c68b4",
              "Name": "Текст21",
              "Text": {
                "Value": "{Объект.ДинДнейОтст}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "5.6,0,1.6,0.8"
            },
            "2": {
              "Font": "Calibri;11;;",
              "Guid": "412fb186a552442fb83e0ab7baf5e70b",
              "Name": "Текст25",
              "Text": {
                "Value": "{Объект.ТекДатаСтатус}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Conditions": {
                "0": {
                  "Font": ";;Bold;",
                  "Ident": "StiCondition",
                  "Column": "Объект.ТекДатаСтатус",
                  "Value1": "Срыв сроков",
                  "BorderSides": "All"
                },
                "1": {
                  "Font": ";;Bold;",
                  "Ident": "StiCondition",
                  "Column": "Объект.ТекДатаСтатус",
                  "Value1": "Есть отставания",
                  "TextColor": "255,192,0",
                  "BorderSides": "All"
                }
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "17.8,0,1.8,0.8"
            },
            "3": {
              "Font": "Calibri;11;;",
              "Guid": "399541a5d09141c287ccb404f74f82f7",
              "Name": "Текст26",
              "Text": {
                "Value": "{Объект.ТекПроцГотовн}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "19.6,0,1.5,0.8"
            },
            "4": {
              "Font": "Calibri;11;;",
              "Guid": "cd07d0ea3eda425c9e47774a2837fe95",
              "Name": "Текст27",
              "Text": {
                "Value": "{Объект.ТекДнейОтст}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "21.1,0,1.5,0.8"
            },
            "5": {
              "Font": "Calibri;11;;",
              "Guid": "ab9b9ec077274e42aa0e22f5febb541f",
              "Name": "Текст29",
              "Text": {
                "Value": "{Объект.ПрошлПроцГотовн}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "24.6,0,1.5,0.8"
            },
            "6": {
              "Font": "Calibri;11;;",
              "Guid": "06638a9062ad4be98fddee1f13c6cd30",
              "Name": "Текст30",
              "Text": {
                "Value": "{Объект.ПрошлДнейОтст}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "26.1,0,1.5,0.8"
            },
            "7": {
              "Font": "Calibri;11;;",
              "Guid": "73407dedb14143c4af7ceead6d9255ea",
              "Name": "Текст31",
              "Text": {
                "Value": "{Line}"
              },
              "Type": "SystemVariables",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0,0,0.6,0.8"
            },
            "8": {
              "Font": "Calibri;11;;",
              "Guid": "4fa62f650f3149828df31879e51c10f0",
              "Name": "Text42",
              "Text": {
                "Value": "{Объект.БюджетИК}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,0,2.4,0.8"
            },
            "9": {
              "Font": "Calibri;11;;",
              "Guid": "6d14db06c49f4860a8d000b455eb7c38",
              "Name": "Text43",
              "Text": {
                "Value": "{Объект.РешениеДатаПроверка}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "9.6,0,1.8,0.8"
            },
            "10": {
              "Font": "Calibri;11;;",
              "Guid": "508accb93591418f9bbdabd3aeb05373",
              "Name": "Text44",
              "Text": {
                "Value": "{Объект.ПланСтоим/1000}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "State": "DecimalDigits",
                "DecimalDigits": 0,
                "GroupSeparator": " ",
                "NegativePattern": 1,
                "DecimalSeparator": ","
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "11.4,0,2.2,0.8"
            },
            "11": {
              "Font": "Calibri;11;;",
              "Guid": "2cab23b981bf46808c172b733c52d8c3",
              "Name": "Text45",
              "Text": {
                "Value": "{Объект.ФактСтоим/1000}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "State": "DecimalDigits",
                "DecimalDigits": 0,
                "GroupSeparator": " ",
                "NegativePattern": 1,
                "DecimalSeparator": ","
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "13.6,0,2,0.8"
            },
            "12": {
              "Font": "Calibri;11;;",
              "Guid": "b62454c3388c4086b7acf398dde2232c",
              "Name": "Text46",
              "Text": {
                "Value": "{(Объект.ПланСтоим-Объект.ФактСтоим)/1000}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "State": "DecimalDigits",
                "DecimalDigits": 0,
                "GroupSeparator": " ",
                "NegativePattern": 1,
                "DecimalSeparator": ","
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "15.6,0,2.2,0.8"
            },
            "13": {
              "Font": "Calibri;11;;",
              "Guid": "758a041f938f4342946488b5a7bafc53",
              "Name": "Text52",
              "Text": {
                "Value": "{Объект.ПрошлДатаСтатус}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "HideZeros": true,
              "TextBrush": "solid:Black",
              "Conditions": {
                "0": {
                  "Font": ";;Bold;",
                  "Ident": "StiCondition",
                  "Column": "Объект.ПрошлДатаСтатус",
                  "Value1": "Срыв сроков",
                  "BorderSides": "All"
                },
                "1": {
                  "Ident": "StiCondition",
                  "Column": "Объект.ПрошлДатаСтатус",
                  "Value1": "Есть отставания",
                  "TextColor": "255,192,0",
                  "BorderSides": "All"
                }
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "22.6,0,2,0.8"
            }
          },
          "FilterMode": "Or",
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "DataSourceName": "Объект",
          "ClientRectangle": "0,7.8,27.7,0.8"
        },
        "3": {
          "Name": "DataBand1",
          "Brush": "solid:",
          "Ident": "StiDataBand",
          "Border": ";;;;;;;solid:Black",
          "Filters": {
            "0": {
              "Ident": "StiFilter",
              "Column": "ТекДатаСтатус",
              "Value1": "Есть отставания",
              "Condition": "Containing"
            },
            "1": {
              "Ident": "StiFilter",
              "Column": "ТекДатаСтатус",
              "Value1": "Срыв сроков",
              "Condition": "Containing"
            }
          },
          "Components": {
            "0": {
              "Font": "Calibri;11;Bold;",
              "Guid": "444d4afca2f940519168d108243fafd0",
              "Name": "Текст4",
              "Text": {
                "Value": "Объект"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0.6,0.6,5,3"
            },
            "1": {
              "Font": "Calibri;11;Bold;",
              "Guid": "1cfcdf2684214c5eb0bad47e16e60d8e",
              "Name": "Текст5",
              "Text": {
                "Value": "Динамика дней отставания"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "5.6,0.6,1.6,3"
            },
            "2": {
              "Font": "Calibri;11;Bold;",
              "Guid": "7b3281421ed84e55b229e1c767570f66",
              "Name": "Текст7",
              "Text": {
                "Value": "Статус"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "17.6,1.4,2,2.2"
            },
            "3": {
              "Font": "Calibri;11;Bold;",
              "Guid": "0baad0b1263445039d93637e458e546c",
              "Name": "Текст8",
              "Text": {
                "Value": "Процент готовности"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "19.6,1.4,1.5,2.2"
            },
            "4": {
              "Font": "Calibri;11;Bold;",
              "Guid": "1f33118a539d4c52bc630057c7285b75",
              "Name": "Текст9",
              "Text": {
                "Value": "Дней отставаний"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "21.1,1.4,1.5,2.2"
            },
            "5": {
              "Font": "Calibri;11;Bold;",
              "Guid": "115ccbf2cc7244de9dff161cb46bfb81",
              "Name": "Текст11",
              "Text": {
                "Value": "Статус"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "22.6,1.4,2,2.2"
            },
            "6": {
              "Font": "Calibri;11;Bold;",
              "Guid": "c1fce761e9c84fc7a48392c6a25140d8",
              "Name": "Текст12",
              "Text": {
                "Value": "Процент готовности"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "24.6,1.4,1.5,2.2"
            },
            "7": {
              "Font": "Calibri;11;Bold;",
              "Guid": "ce054a9488254cafa1639425a34b1d9b",
              "Name": "Текст13",
              "Text": {
                "Value": "Дней отставаний"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "26.1,1.4,1.5,2.2"
            },
            "8": {
              "Font": "Calibri;11;Bold;",
              "Guid": "3ff28859b7484d1e916ed8cce5596684",
              "Name": "Text37",
              "Text": {
                "Value": "Бюджет, утвержденный на ИК"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,2.2,2.6,1.4"
            },
            "9": {
              "Font": "Calibri;11;Bold;",
              "Guid": "4a7b0a8de211470d9f149880447eab11",
              "Name": "Text38",
              "Text": {
                "Value": "Решение (дата, номер)"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "9.8,2.2,1.8,1.4"
            },
            "10": {
              "Font": "Calibri;11;Bold;",
              "Guid": "391c7d401cf243efbb5c58fd53e9568c",
              "Name": "Text39",
              "Text": {
                "Value": "Плановая стоимость в системе ПСС"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "11.6,1.4,2,2.2"
            },
            "11": {
              "Font": "Calibri;11;Bold;",
              "Guid": "46c11c97e80c46ed84b4a458af1e9115",
              "Name": "Text40",
              "Text": {
                "Value": "Фактическое освоение в системе ПСС"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "13.6,1.4,2,2.2"
            },
            "12": {
              "Font": "Calibri;11;Bold;",
              "Guid": "ebb62efe99c94552bb15e55741d1ec73",
              "Name": "Text41",
              "Text": {
                "Value": "Остаток освоения"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "15.6,1.4,2,2.2"
            },
            "13": {
              "Font": "Calibri;11;Bold;",
              "Guid": "04b1f21afa1a44fba5b002d8bbaec573",
              "Name": "Текст6",
              "Text": {
                "Value": "Текущая дата {Фильтр.ТекДата}"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:0,0,0",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "17.6,0.6,5,0.8"
            },
            "14": {
              "Font": "Calibri;11;Bold;",
              "Guid": "ba9434edcc1b4ef2a0d3760ca6038c21",
              "Name": "Текст10",
              "Text": {
                "Value": "Значения за прошлый период {Фильтр.ПрошлДата}"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:0,0,0",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "22.6,0.6,5,0.8"
            },
            "15": {
              "Font": "Calibri;11;Bold;",
              "Guid": "86b2d0eeae35489d885a656bfcb3fea9",
              "Name": "Text35",
              "Text": {
                "Value": "Финансовые показатели,\r\nтыс. руб.\r\n"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:0,0,0",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,0.6,10.4,0.8"
            },
            "16": {
              "Font": "Calibri;11;Bold;",
              "Guid": "b0bc6ba0e2cc49b5ac12c1c53c40d58e",
              "Name": "Text36",
              "Text": {
                "Value": "Решения ИК / СД ГО"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,1.4,4.4,0.8"
            },
            "17": {
              "Font": "Calibri;11;Bold;",
              "Guid": "e28fea31171f471e8963656eb377a50a",
              "Name": "Текст22",
              "Text": {
                "Value": "№пп"
              },
              "Type": "Expression",
              "Brush": "solid:242,242,242",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0,0.6,0.6,3"
            },
            "18": {
              "Font": "Calibri;10;;",
              "Guid": "4ef2cdd7cdc66ce0a54d22dc61abd679",
              "Name": "Текст3",
              "Text": {
                "Value": "{Объект.Объект}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "Margins": {
                "Top": 0,
                "Left": 5,
                "Right": 0,
                "Bottom": 0
              },
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "VertAlignment": "Center",
              "ClientRectangle": "0.6,3.6,5,1.4"
            },
            "19": {
              "Font": "Calibri;11;;",
              "Guid": "7994d3851a20487aaa1d8aa3a232df8e",
              "Name": "Текст1",
              "Text": {
                "Value": "{Объект.ДинДнейОтст}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "5.6,3.6,1.6,1.4"
            },
            "20": {
              "Font": "Calibri;11;;",
              "Guid": "eb9a261900224946a1d5545bab443648",
              "Name": "Текст15",
              "Text": {
                "Value": "{Объект.ТекПроцГотовн}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "19.6,3.6,1.5,1.4"
            },
            "21": {
              "Font": "Calibri;11;;",
              "Guid": "53542471c4764d38a8155972ef117060",
              "Name": "Текст16",
              "Text": {
                "Value": "{Объект.ТекДнейОтст}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "21.1,3.6,1.5,1.4"
            },
            "22": {
              "Font": "Calibri;11;;",
              "Guid": "5d26d6314c204e34b8f3277ee2071bae",
              "Name": "Текст17",
              "Text": {
                "Value": "{Объект.ПрошлДатаСтатус}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "22.6,3.6,2,1.4"
            },
            "23": {
              "Font": "Calibri;11;;",
              "Guid": "3f157a11aaa74fb1928c36a649c7a16b",
              "Name": "Текст18",
              "Text": {
                "Value": "{Объект.ПрошлПроцГотовн}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "24.6,3.6,1.5,1.4"
            },
            "24": {
              "Font": "Calibri;11;;",
              "Guid": "837b790abe824023a540755edcd87473",
              "Name": "Текст19",
              "Text": {
                "Value": "{Объект.ПрошлДнейОтст}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "26.1,3.6,1.5,1.4"
            },
            "25": {
              "Font": "Calibri;11;;",
              "Guid": "389c4c33f78440e1925433fa0838b312",
              "Name": "Text27",
              "Text": {
                "Value": "{Объект.ТекДатаСтатус}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "17.6,3.6,2,1.4"
            },
            "26": {
              "Font": "Calibri;11;;",
              "Guid": "5287b2f507834d7ab1787d96946f0e7a",
              "Name": "Text47",
              "Text": {
                "Value": "{Объект.БюджетИК}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "7.2,3.6,2.6,1.4"
            },
            "27": {
              "Font": "Calibri;11;;",
              "Guid": "8b8c03fdebb54b65b62410659ddb530f",
              "Name": "Text48",
              "Text": {
                "Value": "{Объект.РешениеДатаПроверка}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "9.8,3.6,1.8,1.4"
            },
            "28": {
              "Font": "Calibri;11;;",
              "Guid": "bfb6dd04188a4529987359d33d595d7d",
              "Name": "Text49",
              "Text": {
                "Value": "{Объект.ПланСтоим/1000}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "State": "DecimalDigits",
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "NegativePattern": 1
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "11.6,3.6,2,1.4"
            },
            "29": {
              "Font": "Calibri;11;;",
              "Guid": "ac2ea20276f54f5fb8fe532587c8645f",
              "Name": "Text50",
              "Text": {
                "Value": "{Объект.ФактСтоим/1000}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "State": "DecimalDigits",
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "NegativePattern": 1
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "13.6,3.6,2,1.4"
            },
            "30": {
              "Font": "Calibri;11;;",
              "Guid": "3c01cedbe5de4c21aefe8854ae440fdd",
              "Name": "Text51",
              "Text": {
                "Value": "{(Объект.ПланСтоим-Объект.ФактСтоим)/1000}"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "State": "DecimalDigits",
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "NegativePattern": 1
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "ClientRectangle": "15.6,3.6,2,1.4"
            },
            "31": {
              "Font": "Calibri;11;;",
              "Guid": "d7d35b27b2a1436dab4cc453cd729319",
              "Name": "Текст23",
              "Text": {
                "Value": "{GroupLine}"
              },
              "Type": "SystemVariables",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0,3.6,0.6,1.4"
            },
            "32": {
              "Name": "SubReport1",
              "Brush": "solid:",
              "Ident": "StiSubReport",
              "Border": ";;;;;;;solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "ClientRectangle": "0,5.2,27.6,1.4",
              "SubReportPageGuid": "daf87a3053bb4401b4655ae6b0db7745"
            }
          },
          "FilterMode": "Or",
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "NewPageAfter": true,
          "NewPageBefore": true,
          "DataSourceName": "Объект",
          "ClientRectangle": "0,9.4,27.7,7"
        }
      },
      "PageHeight": 21,
      "ReportUnit": {
        "Ident": "StiCentimetersUnit"
      },
      "Interaction": {
        "Ident": "StiInteraction"
      },
      "Orientation": "Landscape"
    },
    "1": {
      "Guid": "daf87a3053bb4401b4655ae6b0db7745",
      "Name": "subReport_1",
      "Brush": "solid:",
      "Ident": "StiPage",
      "Border": ";;2;;;;;solid:Black",
      "Margins": {
        "Top": 1,
        "Left": 1,
        "Right": 1,
        "Bottom": 1
      },
      "PageWidth": 29.6,
      "Watermark": {
        "TextBrush": "solid:50,0,0,0"
      },
      "Components": {
        "0": {
          "Area": {
            "Brush": "solid:255,255,255",
            "Ident": "StiGanttArea",
            "XAxis": {
              "Ident": "StiXBottomAxis",
              "Title": {
                "Color": "140,140,140"
              },
              "Labels": {
                "Color": "140,140,140"
              },
              "Visible": false,
              "LineColor": "140,140,140"
            },
            "YAxis": {
              "Ident": "StiYLeftAxis",
              "Title": {
                "Color": "140,140,140",
                "Direction": "BottomToTop"
              },
              "Labels": {
                "Color": "140,140,140",
                "Width": 200,
                "WordWrap": true
              },
              "LineColor": "140,140,140"
            },
            "XTopAxis": {
              "Ident": "StiXTopAxis",
              "Title": {
                "Color": "140,140,140"
              },
              "Labels": {
                "Color": "140,140,140",
                "Format": "dd.MM.yy"
              },
              "Visible": true,
              "LineColor": "140,140,140"
            },
            "YRightAxis": {
              "Ident": "StiYRightAxis",
              "Title": {
                "Color": "140,140,140",
                "Direction": "TopToBottom"
              },
              "Labels": {
                "Color": "140,140,140",
                "TextAlignment": "Left"
              },
              "LineColor": "140,140,140"
            },
            "BorderColor": "Transparent",
            "GridLinesHor": {
              "Area": true,
              "Color": "100,105,105,105",
              "MinorColor": "100,105,105,105"
            },
            "GridLinesVert": {
              "Area": true,
              "Color": "100,105,105,105",
              "MinorColor": "100,105,105,105"
            },
            "InterlacingHor": {
              "Area": true,
              "InterlacedBrush": "solid:10,155,155,155"
            },
            "InterlacingVert": {
              "Area": true,
              "InterlacedBrush": "solid:10,155,155,155"
            },
            "GridLinesHorRight": {
              "Area": true,
              "Visible": false
            }
          },
          "Name": "Chart1",
          "Brush": "solid:255,255,255",
          "Ident": "StiChart",
          "Style": {
            "Ident": "StiStyle29"
          },
          "Table": {
            "Header": {
              "Brush": "solid:White"
            },
            "DataCells": {
              "TextColor": "140,140,140"
            },
            "GridLineColor": "Transparent"
          },
          "Title": {
            "Brush": "solid:140,140,140"
          },
          "Border": ";;;;;;;solid:Black",
          "Legend": {
            "Size": "0,0",
            "Brush": "solid:255,255,255",
            "Visible": false,
            "MarkerSize": {
              "Width": 10,
              "Height": 10
            },
            "ShowShadow": false,
            "TitleColor": "105,105,105",
            "BorderColor": "Transparent",
            "LabelsColor": "140,140,140"
          },
          "Series": {
            "0": {
              "Tag": {
                "Value": "{Объект_ВидРабот.ПредставленияЗначения}"
              },
              "Brush": "solid:52,152,219",
              "Ident": "StiGanttSeries",
              "Title": {
                "Value": "Ряд 1"
              },
              "Conditions": {
                "0": {
                  "Color": "Red",
                  "Ident": "StiChartCondition",
                  "Value": "Срыв сроков",
                  "Condition": "Containing"
                },
                "1": {
                  "Color": "Yellow",
                  "Ident": "StiChartCondition",
                  "Value": "Есть отставания",
                  "Condition": "Containing"
                },
                "2": {
                  "Color": "0,192,0",
                  "Ident": "StiChartCondition",
                  "Value": "В графике",
                  "Condition": "Containing"
                }
              },
              "ShowShadow": false,
              "BorderColor": "Transparent",
              "SeriesLabels": {
                "Font": ";10;;",
                "Brush": "solid:119,255,255,255",
                "Ident": "StiCenterAxisLabels",
                "LabelColor": "50,58,69",
                "MarkerSize": {
                  "Width": 8,
                  "Height": 6
                },
                "BorderColor": "Transparent",
                "ValueTypeSeparator": "-"
              },
              "BrushNegative": "solid:Firebrick",
              "TagDataColumn": "Объект_ВидРабот.ПредставленияЗначения",
              "ValueDataColumn": "Объект_ВидРабот.ДатаН",
              "ArgumentDataColumn": "Объект_ВидРабот.ПредставлениеАргумента",
              "ValueDataColumnEnd": "Объект_ВидРабот.ДатаК"
            }
          },
          "Filters": {
            "0": {
              "Item": "Expression",
              "Ident": "StiFilter",
              "Expression": {
                "Value": "{IIF(Объект_ВидРабот.Статус==\"Работы не ведутся\",0,1)==1}"
              }
            }
          },
          "EditorType": "Simple",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "GrowToHeight": true,
          "SeriesLabels": {
            "Font": ";10;;",
            "Brush": "solid:119,255,255,255",
            "Ident": "StiCenterAxisLabels",
            "Format": "dd.MM.yy",
            "ValueType": "Tag",
            "LabelColor": "50,58,69",
            "MarkerSize": {
              "Width": 8,
              "Height": 6
            },
            "BorderColor": "Transparent",
            "ValueTypeSeparator": "-"
          },
          "DataSourceName": "Объект_ВидРабот",
          "ClientRectangle": "0.2,12.4,27.2,13",
          "DataRelationName": "свВидРабот"
        },
        "1": {
          "Name": "HeaderBand1",
          "Brush": "solid:",
          "Ident": "StiHeaderBand",
          "Border": ";;;;;;;solid:Black",
          "Components": {
            "0": {
              "Font": "Calibri;11;Bold;",
              "Guid": "c0980d688a614d6897a69a4e778bbfe8",
              "Name": "Text1",
              "Text": {
                "Value": "Проектная задача"
              },
              "Type": "Expression",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "0.6,0,10,1.4"
            },
            "1": {
              "Font": "Calibri;11;Bold;",
              "Guid": "1f899fa9d9a940beb6f1f88a9c205b5f",
              "Name": "Text2",
              "Text": {
                "Value": "Процент готовности"
              },
              "Type": "Expression",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "16.4,0,2.3,1.4"
            },
            "2": {
              "Font": "Calibri;11;Bold;",
              "Guid": "9c7d6aa2858e48099f1c557b9b626eff",
              "Name": "Text3",
              "Text": {
                "Value": "Статус"
              },
              "Type": "Expression",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "13.2,0,3.2,1.4"
            },
            "3": {
              "Font": "Calibri;11;Bold;",
              "Guid": "33a558e37e3b409ba7084825ac3c117c",
              "Name": "Text4",
              "Text": {
                "Value": "Динамика дней отставания"
              },
              "Type": "Expression",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "10.6,0,2.6,1.4"
            },
            "4": {
              "Font": "Calibri;11;Bold;",
              "Guid": "b8f1f3b5b2dd4c1abeac0e5419be5839",
              "Name": "Text5",
              "Text": {
                "Value": "Дней отставаний"
              },
              "Type": "Expression",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "18.7,0,2.3,1.4"
            },
            "5": {
              "Font": "Calibri;11;Bold;",
              "Guid": "b4ed6bc3754a4504acec9dd1f714107b",
              "Name": "Text6",
              "Text": {
                "Value": "Дата начала"
              },
              "Type": "Expression",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "21,0,2.6,1.4"
            },
            "6": {
              "Font": "Calibri;11;Bold;",
              "Guid": "9f4433ecffe047199bc8f14a749b7d4a",
              "Name": "Text7",
              "Text": {
                "Value": "Дата окончания"
              },
              "Type": "Expression",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "23.6,0,2.4,1.4"
            }
          },
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "ClientRectangle": "0,0.4,27.6,1.4"
        },
        "2": {
          "Name": "Данные1",
          "Sort": {
            "0": "ASC",
            "1": "свВидРабот",
            "2": "Объект"
          },
          "Brush": "solid:",
          "Ident": "StiDataBand",
          "Border": ";;;;;;;solid:Black",
          "CanGrow": false,
          "Filters": {
            "0": {
              "Item": "Expression",
              "Ident": "StiFilter",
              "Expression": {
                "Value": "{IIF(Объект_ВидРабот.Статус==\"Есть отставания\",1,\r\n    IIF(Объект_ВидРабот.Статус==\"Срыв сроков\",1,0))==1\r\n}"
              }
            }
          },
          "Components": {
            "0": {
              "Font": "Calibri;11;;",
              "Guid": "45418df000d840669e6d4ec9ab720fd5",
              "Name": "Text8",
              "Text": {
                "Value": "{Объект_ВидРабот.ВидРабот}"
              },
              "Type": "DataColumn",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "VertAlignment": "Center",
              "ClientRectangle": "0.6,0,10,0.6"
            },
            "1": {
              "Font": "Calibri;11;;",
              "Guid": "7ff086701d004538aa87e04a1d8ed9de",
              "Name": "Text10",
              "Text": {
                "Value": "{Объект_ВидРабот.Статус}"
              },
              "Type": "DataColumn",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "13.2,0,3.2,0.6"
            },
            "2": {
              "Font": "Calibri;11;;",
              "Guid": "bdc48d6a8e8b4ba6bb65276d3c1fd243",
              "Name": "Text11",
              "Text": {
                "Value": "{Объект_ВидРабот.ПроцентГотовности}"
              },
              "Type": "DataColumn",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "16.4,0,2.3,0.6"
            },
            "3": {
              "Font": "Calibri;11;;",
              "Guid": "c8e56221bab546c59a8a1305bc92d073",
              "Name": "Text12",
              "Text": {
                "Value": "{Объект_ВидРабот.ДнейОтставания}"
              },
              "Type": "DataColumn",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "18.7,0,2.3,0.6"
            },
            "4": {
              "Font": "Calibri;11;;",
              "Guid": "d5abf6806b5f41e9b58a20275133e685",
              "Name": "Text13",
              "Text": {
                "Value": "{Объект_ВидРабот.ДатаНачала}"
              },
              "Type": "DataColumn",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiDateFormatService",
                "StringFormat": "dd.MM.yy"
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "21,0,2.6,0.6"
            },
            "5": {
              "Font": "Calibri;11;;",
              "Guid": "60133ab4f64c4fbc9d2623490a84a366",
              "Name": "Text14",
              "Text": {
                "Value": "{Объект_ВидРабот.ДатаОкончания}"
              },
              "Type": "DataColumn",
              "Brush": "solid:255,255,255",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "TextBrush": "solid:Black",
              "TextFormat": {
                "Ident": "StiDateFormatService",
                "StringFormat": "dd.MM.yy"
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "23.6,0,2.4,0.6"
            },
            "6": {
              "Font": "Calibri;11;;",
              "Guid": "3ab8e4ec877c46f5992998c20e26bbff",
              "Name": "Text54",
              "Text": {
                "Value": "{Объект_ВидРабот.ДнейОтставания}"
              },
              "Type": "DataColumn",
              "Brush": "solid:",
              "Ident": "StiText",
              "Border": "All;;;;;;;solid:0,0,0",
              "CanGrow": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "ClientRectangle": "10.6,0,2.6,0.6"
            }
          },
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "DataSourceName": "Объект_ВидРабот",
          "ClientRectangle": "0,2.6,27.6,0.6",
          "MasterComponent": "DataBand1",
          "DataRelationName": "свВидРабот"
        },
        "3": {
          "Name": "DataBand2",
          "Sort": {
            "0": "ASC",
            "1": "ДатаВремяФото"
          },
          "Brush": "solid:",
          "Ident": "StiDataBand",
          "Border": ";;;;;;;solid:Black",
          "Columns": 4,
          "Components": {
            "0": {
              "Name": "Image1",
              "Brush": "solid:",
              "Ident": "StiImage",
              "Border": ";;;;;;;solid:Black",
              "ImageURL": {
                "Value": "{Объект_ФотоФакт.АдресФото}"
              },
              "ImageBytes": "",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "ClientRectangle": "0.2,0.2,6.6,5.8"
            },
            "1": {
              "Font": ";;Bold;",
              "Guid": "171e2b80d64445f84dd0b0a86d945254",
              "Name": "HeaderОбъект_ФотоФакт_АдресФото",
              "Text": {
                "Value": "{Объект_ФотоФакт.ДатаВремяФото}\r\n{Объект_ФотоФакт.Прораб}\r\n{Объект_ФотоФакт.НаименованиеРаботы}\r\n"
              },
              "Type": "Expression",
              "Brush": "solid:White",
              "Ident": "StiText",
              "Border": ";;;;;;;solid:Black",
              "CanGrow": true,
              "TextBrush": "solid:Black",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "TextOptions": {
                "WordWrap": true
              },
              "GrowToHeight": true,
              "VertAlignment": "Bottom",
              "ClientRectangle": "0.2,6,6.6,1"
            }
          },
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "DataSourceName": "Объект_ФотоФакт",
          "ClientRectangle": "0,4,27.6,7.2",
          "MasterComponent": "DataBand1",
          "DataRelationName": "свФотоФакт"
        }
      },
      "PageHeight": 29.7,
      "ReportUnit": {
        "Ident": "StiCentimetersUnit"
      },
      "Interaction": {
        "Ident": "StiInteraction"
      },
      "Orientation": "Landscape"
    }
  },
  "Dictionary": {
    "Databases": {
      "0": {
        "Key": "164339493b954decb87feb0033f484e4",
        "Name": "suek_rpo_object_readiness_report",
        "Alias": "suek_rpo_object_readiness_report",
        "Ident": "StiJsonDatabase",
        "PathData": "resource://suek_rpo_object_readiness_report"
      }
    },
    "Relations": {
      "0": {
        "Key": "ce7f316ffe204f95924a0ebff625650c",
        "Name": "свВидРабот",
        "Alias": "свВидРабот",
        "ChildSource": "Объект_ВидРабот",
        "ChildColumns": {
          "0": "idОбъект"
        },
        "NameInSource": "свВидРабот",
        "ParentSource": "Объект",
        "ParentColumns": {
          "0": "idОбъект"
        }
      },
      "1": {
        "Key": "892d4519bab24feb9bfe7fa9bd1a6ccc",
        "Name": "свФотоФакт",
        "Alias": "свФотоФакт",
        "ChildSource": "Объект_ФотоФакт",
        "ChildColumns": {
          "0": "idОбъект"
        },
        "NameInSource": "свФотоФакт",
        "ParentSource": "Объект",
        "ParentColumns": {
          "0": "idОбъект"
        }
      }
    },
    "DataSources": {
      "0": {
        "Key": "bb93f6c982f84dae878914cdebc67eea",
        "Name": "Объект",
        "Alias": "Объект",
        "Ident": "StiDataTableSource",
        "Columns": {
          "0": {
            "Key": "abb7a9c6709948dba407e7427835bf34",
            "Name": "N",
            "Type": "System.Decimal",
            "Alias": "N",
            "Index": -1,
            "NameInSource": "N"
          },
          "1": {
            "Key": "80f6699e865d452f8a71804411ccde3a",
            "Name": "idОбъект",
            "Type": "System.Decimal",
            "Alias": "idОбъект",
            "Index": -1,
            "NameInSource": "idОбъект"
          },
          "2": {
            "Key": "757e6434a4084e9eaf3822b297c88775",
            "Name": "Объект",
            "Type": "System.String",
            "Alias": "Объект",
            "Index": -1,
            "NameInSource": "Объект"
          },
          "3": {
            "Key": "6fd993417ac846e98faee2360e38fd64",
            "Name": "Категория",
            "Type": "System.String",
            "Alias": "Категория",
            "Index": -1,
            "NameInSource": "Категория"
          },
          "4": {
            "Key": "a6aab1e12f22405991fdbd4e4a8188f7",
            "Name": "ПЕ",
            "Type": "System.String",
            "Alias": "ПЕ",
            "Index": -1,
            "NameInSource": "ПЕ"
          },
          "5": {
            "Key": "f70f7cf2cfca4e6cafe75652a0c4704c",
            "Name": "ДинДнейОтст",
            "Type": "System.Decimal",
            "Alias": "ДинДнейОтст",
            "Index": -1,
            "NameInSource": "ДинДнейОтст"
          },
          "6": {
            "Key": "e8e5f42c121b4051abf787e9dbbac5d4",
            "Name": "БюджетИК",
            "Type": "System.String",
            "Alias": "БюджетИК",
            "Index": -1,
            "NameInSource": "БюджетИК"
          },
          "7": {
            "Key": "f7f5c0fe6a2a490784c15805232b90eb",
            "Name": "РешениеДатаПроверка",
            "Type": "System.String",
            "Alias": "РешениеДатаПроверка",
            "Index": -1,
            "NameInSource": "РешениеДатаПроверка"
          },
          "8": {
            "Key": "4b645b92251e455d9f4a9cd88049695a",
            "Name": "ПланСтоим",
            "Type": "System.Decimal",
            "Alias": "ПланСтоим",
            "Index": -1,
            "NameInSource": "ПланСтоим"
          },
          "9": {
            "Key": "68c4c114fa2d42b99a3be5c96455b86e",
            "Name": "ФактСтоим",
            "Type": "System.Decimal",
            "Alias": "ФактСтоим",
            "Index": -1,
            "NameInSource": "ФактСтоим"
          },
          "10": {
            "Key": "e1a0054b1efa41c4a9db9a8eff0b7e2f",
            "Name": "ТекДатаСтатус",
            "Type": "System.String",
            "Alias": "ТекДатаСтатус",
            "Index": -1,
            "NameInSource": "ТекДатаСтатус"
          },
          "11": {
            "Key": "5ca1bd2f2c2c44acbfa9f5e203da6917",
            "Name": "ТекПроцГотовн",
            "Type": "System.Decimal",
            "Alias": "ТекПроцГотовн",
            "Index": -1,
            "NameInSource": "ТекПроцГотовн"
          },
          "12": {
            "Key": "04d5f14b1b29463ca8355b3cba27281b",
            "Name": "ТекДнейОтст",
            "Type": "System.Decimal",
            "Alias": "ТекДнейОтст",
            "Index": -1,
            "NameInSource": "ТекДнейОтст"
          },
          "13": {
            "Key": "e9431e5ac76d4d568f9c95fa17ca458a",
            "Name": "ПрошлДатаСтатус",
            "Type": "System.String",
            "Alias": "ПрошлДатаСтатус",
            "Index": -1,
            "NameInSource": "ПрошлДатаСтатус"
          },
          "14": {
            "Key": "e5c32ce396174baa96b187275ac2fc4f",
            "Name": "ПрошлПроцГотовн",
            "Type": "System.Decimal",
            "Alias": "ПрошлПроцГотовн",
            "Index": -1,
            "NameInSource": "ПрошлПроцГотовн"
          },
          "15": {
            "Key": "71009471097b47d9bf7b06eafaaa2558",
            "Name": "ПрошлДнейОтст",
            "Type": "System.Decimal",
            "Alias": "ПрошлДнейОтст",
            "Index": -1,
            "NameInSource": "ПрошлДнейОтст"
          },
          "16": {
            "Key": "7d4543d5bfc24516ac805fd473a22e3c",
            "Name": "ЭтапРабот",
            "Type": "System.String",
            "Alias": "ЭтапРабот",
            "Index": -1,
            "NameInSource": "ЭтапРабот"
          },
          "17": {
            "Key": "59c032fd2d774ede814c654c20cc14b8",
            "Name": "ВидРабот",
            "Type": "System.String",
            "Alias": "ВидРабот",
            "Index": -1,
            "NameInSource": "ВидРабот"
          },
          "18": {
            "Key": "b89f787d98754b089118d55fd6ea969a",
            "Name": "ФотоФакт",
            "Type": "System.String",
            "Alias": "ФотоФакт",
            "Index": -1,
            "NameInSource": "ФотоФакт"
          },
          "19": {
            "Key": "f653c6ccb28f4f058333d60c1c514a1f",
            "Name": "РПО",
            "Type": "System.String",
            "Alias": "РПО",
            "Ident": "Calc",
            "Index": -1,
            "Expression": "Фильтр.РПО",
            "NameInSource": "РПО"
          }
        },
        "NameInSource": "suek_rpo_object_readiness_report.Объект"
      },
      "1": {
        "Key": "72ebb63d08574bc48433bd6288544efb",
        "Name": "Объект_ВидРабот",
        "Alias": "Объект_ВидРабот",
        "Ident": "StiDataTableSource",
        "Columns": {
          "0": {
            "Key": "db86349b9c1d4cd5b3760105abd3729f",
            "Name": "idОбъект",
            "Type": "System.Decimal",
            "Alias": "idОбъект",
            "Index": -1,
            "NameInSource": "idОбъект"
          },
          "1": {
            "Key": "ed28609ff6fd4655afa0b6e3282cf855",
            "Name": "idЭтап",
            "Type": "System.Decimal",
            "Alias": "idЭтап",
            "Index": -1,
            "NameInSource": "idЭтап"
          },
          "2": {
            "Key": "315baf0b1330442daf81e72ced265410",
            "Name": "ЭтапРабот",
            "Type": "System.String",
            "Alias": "ЭтапРабот",
            "Index": -1,
            "NameInSource": "ЭтапРабот"
          },
          "3": {
            "Key": "c5de14817384419ea3fe7e8b860f4cc9",
            "Name": "ВидРабот",
            "Type": "System.String",
            "Alias": "ВидРабот",
            "Index": -1,
            "NameInSource": "ВидРабот"
          },
          "4": {
            "Key": "644498b4110c49a39ce97eeb41df03a0",
            "Name": "Статус",
            "Type": "System.String",
            "Alias": "Статус",
            "Index": -1,
            "NameInSource": "Статус"
          },
          "5": {
            "Key": "8034faaa22e74fc489d700efb5600fbf",
            "Name": "ПроцентГотовности",
            "Type": "System.Decimal",
            "Alias": "ПроцентГотовности",
            "Index": -1,
            "NameInSource": "ПроцентГотовности"
          },
          "6": {
            "Key": "7565bae067674f358b3266b8a83c468d",
            "Name": "ДнейОтставания",
            "Type": "System.Decimal",
            "Alias": "ДнейОтставания",
            "Index": -1,
            "NameInSource": "ДнейОтставания"
          },
          "7": {
            "Key": "733b9f96fa754e459380d4dd8e1c0333",
            "Name": "ДатаНачала",
            "Type": "System.DateTime",
            "Alias": "ДатаНачала",
            "Index": -1,
            "NameInSource": "ДатаНачала"
          },
          "8": {
            "Key": "b86c2bf3e49d48f0902b6a01d8452fff",
            "Name": "ДатаОкончания",
            "Type": "System.DateTime",
            "Alias": "ДатаОкончания",
            "Index": -1,
            "NameInSource": "ДатаОкончания"
          },
          "9": {
            "Key": "f36b55d3b19a489d90d12a1dddb73d09",
            "Name": "ПроцентГотовностиОсвоение",
            "Type": "System.Decimal",
            "Alias": "ПроцентГотовностиОсвоение",
            "Index": -1,
            "NameInSource": "ПроцентГотовностиОсвоение"
          },
          "10": {
            "Key": "53f6fb41d16642d29cf152542d4635c4",
            "Name": "ОсвоениеПлан",
            "Type": "System.Decimal",
            "Alias": "ОсвоениеПлан",
            "Index": -1,
            "NameInSource": "ОсвоениеПлан"
          },
          "11": {
            "Key": "aaab548b6f48482aacac6b4999abc511",
            "Name": "ОсвоениеФакт",
            "Type": "System.Decimal",
            "Alias": "ОсвоениеФакт",
            "Index": -1,
            "NameInSource": "ОсвоениеФакт"
          },
          "12": {
            "Key": "e5dc4dc58c394164a9712d8be71ad9a9",
            "Name": "ПланФО",
            "Type": "System.Decimal",
            "Alias": "ПланФО",
            "Index": -1,
            "NameInSource": "ПланФО"
          },
          "13": {
            "Key": "b421638becdd401e8a151fd96a5dbcc4",
            "Name": "ФактФО",
            "Type": "System.Decimal",
            "Alias": "ФактФО",
            "Index": -1,
            "NameInSource": "ФактФО"
          },
          "14": {
            "Key": "1170d02216d04f94a059e3bd91a7ba58",
            "Name": "relationId",
            "Type": "System.String",
            "Alias": "relationId",
            "Index": -1,
            "NameInSource": "relationId"
          },
          "15": {
            "Key": "0674777512e141d8a4981f185872f7f8",
            "Name": "ДатаН",
            "Type": "System.DateTime",
            "Alias": "ДатаН",
            "Ident": "Calc",
            "Index": -1,
            "Expression": "Объект_ВидРабот.ДатаНачала",
            "NameInSource": "ДатаН"
          },
          "16": {
            "Key": "28b855c6baf64a4aaf072f91f2dab1ec",
            "Name": "ДатаК",
            "Type": "System.DateTime",
            "Alias": "ДатаК",
            "Ident": "Calc",
            "Index": -1,
            "Expression": "Объект_ВидРабот.ДатаОкончания",
            "NameInSource": "ДатаК"
          },
          "17": {
            "Key": "cb510f0342954d09bdb1ebabdac576af",
            "Name": "idВидРабот",
            "Type": "System.Int32",
            "Alias": "idВидРабот",
            "Index": -1,
            "NameInSource": "idВидРабот"
          },
          "18": {
            "Key": "64caebec316b4ff9be21aa95e6c13886",
            "Name": "ПредставленияЗначения",
            "Type": "System.String",
            "Alias": "ПредставленияЗначения",
            "Ident": "Calc",
            "Index": -1,
            "Expression": "Объект_ВидРабот.ПроцентГотовности.ToString()+\"% (\"+Объект_ВидРабот.ДнейОтставания.ToString()+\" дн.)\"",
            "NameInSource": "ПредставленияЗначения"
          },
          "19": {
            "Key": "00a3fe81433443d787ea03aab609b344",
            "Name": "ПредставлениеАргумента",
            "Type": "System.String",
            "Alias": "ПредставлениеАргумента",
            "Ident": "Calc",
            "Index": -1,
            "Expression": "Объект_ВидРабот.ЭтапРабот+\", \"+Объект_ВидРабот.ВидРабот+\", \"+Объект_ВидРабот.Статус",
            "NameInSource": "ПредставлениеАргумента"
          }
        },
        "NameInSource": "suek_rpo_object_readiness_report.Объект_ВидРабот"
      },
      "2": {
        "Key": "7726bcd06ae740219c7337c843b9d7d4",
        "Name": "Объект_ФотоФакт",
        "Alias": "Объект_ФотоФакт",
        "Ident": "StiDataTableSource",
        "Columns": {
          "0": {
            "Name": "idОбъект",
            "Type": "System.Decimal",
            "Alias": "idОбъект",
            "Index": -1,
            "NameInSource": "idОбъект"
          },
          "1": {
            "Name": "ДатаВремяФото",
            "Type": "System.String",
            "Alias": "ДатаВремяФото",
            "Index": -1,
            "NameInSource": "ДатаВремяФото"
          },
          "2": {
            "Name": "НаименованиеРаботы",
            "Type": "System.String",
            "Alias": "НаименованиеРаботы",
            "Index": -1,
            "NameInSource": "НаименованиеРаботы"
          },
          "3": {
            "Name": "Прораб",
            "Type": "System.String",
            "Alias": "Прораб",
            "Index": -1,
            "NameInSource": "Прораб"
          },
          "4": {
            "Name": "АдресФото",
            "Type": "System.String",
            "Alias": "АдресФото",
            "Index": -1,
            "NameInSource": "АдресФото"
          },
          "5": {
            "Name": "relationId",
            "Type": "System.String",
            "Alias": "relationId",
            "Index": -1,
            "NameInSource": "relationId"
          }
        },
        "NameInSource": "suek_rpo_object_readiness_report.Объект_ФотоФакт"
      },
      "3": {
        "Key": "7ed5ac3603e84f5fa4db885c82972772",
        "Name": "Объект_ЭтапРабот",
        "Alias": "Объект_ЭтапРабот",
        "Ident": "StiDataTableSource",
        "Columns": {
          "0": {
            "Name": "idОбъект",
            "Type": "System.Decimal",
            "Alias": "idОбъект",
            "Index": -1,
            "NameInSource": "idОбъект"
          },
          "1": {
            "Name": "idЭтап",
            "Type": "System.Decimal",
            "Alias": "idЭтап",
            "Index": -1,
            "NameInSource": "idЭтап"
          },
          "2": {
            "Name": "ЭтапРабот",
            "Type": "System.String",
            "Alias": "ЭтапРабот",
            "Index": -1,
            "NameInSource": "ЭтапРабот"
          },
          "3": {
            "Name": "ВидРабот",
            "Type": "System.String",
            "Alias": "ВидРабот",
            "Index": -1,
            "NameInSource": "ВидРабот"
          },
          "4": {
            "Name": "Статус",
            "Type": "System.String",
            "Alias": "Статус",
            "Index": -1,
            "NameInSource": "Статус"
          },
          "5": {
            "Name": "ПроцентГотовности",
            "Type": "System.Decimal",
            "Alias": "ПроцентГотовности",
            "Index": -1,
            "NameInSource": "ПроцентГотовности"
          },
          "6": {
            "Name": "ДнейОтставания",
            "Type": "System.Decimal",
            "Alias": "ДнейОтставания",
            "Index": -1,
            "NameInSource": "ДнейОтставания"
          },
          "7": {
            "Name": "ДатаНачала",
            "Type": "System.String",
            "Alias": "ДатаНачала",
            "Index": -1,
            "NameInSource": "ДатаНачала"
          },
          "8": {
            "Name": "ДатаОкончания",
            "Type": "System.String",
            "Alias": "ДатаОкончания",
            "Index": -1,
            "NameInSource": "ДатаОкончания"
          },
          "9": {
            "Name": "ПроцентГотовностиОсвоение",
            "Type": "System.Decimal",
            "Alias": "ПроцентГотовностиОсвоение",
            "Index": -1,
            "NameInSource": "ПроцентГотовностиОсвоение"
          },
          "10": {
            "Name": "ОсвоениеПлан",
            "Type": "System.Decimal",
            "Alias": "ОсвоениеПлан",
            "Index": -1,
            "NameInSource": "ОсвоениеПлан"
          },
          "11": {
            "Name": "ОсвоениеФакт",
            "Type": "System.Decimal",
            "Alias": "ОсвоениеФакт",
            "Index": -1,
            "NameInSource": "ОсвоениеФакт"
          },
          "12": {
            "Name": "relationId",
            "Type": "System.String",
            "Alias": "relationId",
            "Index": -1,
            "NameInSource": "relationId"
          }
        },
        "NameInSource": "suek_rpo_object_readiness_report.Объект_ЭтапРабот"
      },
      "4": {
        "Key": "9592961ba1c245bdbbce9109efaba987",
        "Name": "Фильтр",
        "Alias": "Фильтр",
        "Ident": "StiDataTableSource",
        "Columns": {
          "0": {
            "Name": "РПО",
            "Type": "System.String",
            "Alias": "РПО",
            "Index": -1,
            "NameInSource": "РПО"
          },
          "1": {
            "Name": "ТекДата",
            "Type": "System.String",
            "Alias": "ТекДата",
            "Index": -1,
            "NameInSource": "ТекДата"
          },
          "2": {
            "Name": "ПрошлДата",
            "Type": "System.String",
            "Alias": "ПрошлДата",
            "Index": -1,
            "NameInSource": "ПрошлДата"
          }
        },
        "NameInSource": "suek_rpo_object_readiness_report.Фильтр"
      }
    }
  },
  "ReportFile": "suek_rpo_object_readiness_report.mrt",
  "ReportGuid": "1fc95b506b594a3680d71e826490c4a4",
  "ReportName": "Report",
  "ReportUnit": "Centimeters",
  "ReportAlias": "Report",
  "EngineVersion": "EngineV2",
  "ReportChanged": "/Date(1612527632000+0300)/",
  "ReportCreated": "/Date(1600360432000+0300)/",
  "CalculationMode": "Interpretation",
  "PreviewSettings": 268435455,
  "DashboardViewerSettings": 1
}
