query.user.schema = {
  "name": "user",
  "type": "object",
  "description": "User data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "會員編號"
    },
    "storeId": {
      "type": "string",
      "description": "商店編號"
    },
    "type": {
      "type": "string",
      "description": "使用者類型, shopper:會員, merchant:店家"
    },
    "email": {
      "type": "string",
      "description": "使用者email"
    },
    "name": {
      "type": "string",
      "description": "會員名字"
    },
    "gender": {
      "type": "integer",
      "description": "會員性別, 0:男; 1:女"
    },
    "birthday": {
      "type": "object",
      "description": "會員生日",
      "properties": {
        "year": {
          "type": "integer",
          "minimum": 1900,
          "description": "會員生日西元年份"
        },
        "month": {
          "type": "integer",
          "minimum": 1,
          "maximum": 12,
          "description": "會員生日月份"
        },
        "day": {
          "type": "integer",
          "minimum": 1,
          "maximum": 31,
          "description": "會員生日日期"
        }
      },
      "required": [
        "year",
        "month",
        "day"
      ]
    },
    "additionalInfo": {
      "type": "object",
      "description": "會員的聯絡資訊",
      "properties": {
        "tel": {
          "type": "string",
          "description": "會員電話"
        },
        "mobile": {
          "type": "string",
          "description": "會員手機"
        },
        "address": {
          "type": "object",
          "description": "會員地址相關資料",
          "properties": {
            "country": {
              "type": "string",
              "description": "會員所在國家",
            },
            "postalCode": {
              "type": "string",
              "description": "會員郵遞區號",
            },
            "streetAddress": {
              "type": "string",
              "description": "會員完整的地址(country + city + county + street)"
            }
          },
          "required": [
            "country",
            "streetAddress"
          ]
        }
      }
    },
    "recipientData": {
      "type": "array",
      "description": "收件人資料, 紀錄會員常用的收件人資訊",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "收件人資料編號"
          },
          "email": {
            "type": "string",
            "description": "收件人的email"
          },
          "name": {
            "type": "string",
            "description": "收件人的姓名"
          },
          "mobile": {
            "type": "string",
            "description": "收件人的手機"
          },
          "tel": {
            "type": "string",
            "description": "收件人的電話"
          },
          "address": {
            "type": "object",
            "description": "收件人地址相關資料",
            "properties": {
              "country": {
                "type": "string",
                "description": "收件人所在國家",
              },
              "postalCode": {
                "type": "string",
                "description": "收件人郵遞區號",
              },
              "streetAddress": {
                "type": "string",
                "description": "收件人完整的地址(country + city + county + street)"
              }
            },
            "required": [
              "country",
              "streetAddress"
            ]
          }
        }
      }
    },
    "groupId": {
      "type": "string",
      "description": "會員最新的等級編號"
    },
    "group": {
      "type": "array",
      "description": "會員等級變動紀錄",
      "items": {
        "type": "object",
        "properties": {
          "expireDate": {
            "type": "integer",
            "description": "等級到期時間"
          },
          "memberGroupId": {
            "type": "string",
            "description": "會員等級編號"
          },
          "startDate": {
            "type": "integer",
            "description": "等級開始時間"
          },
          "unlimitedDate": {
            "type": "boolean",
            "description": "等級是否為無期限, false:有期限(會判斷expireDate); true:無期限"
          }
        },
        "required": [
          "memberGroupId",
          "startDate"
        ]
      }
    },
    "platform": {
      "type": "object",
      "description": "會員來源的相關資訊",
      "properties": {
        "facebook": {
          "type": "object",
          "description": "來自fb的會員資訊",
          "properties": {
            "id": {
              "type": "string",
              "description": "fb Id"
            }
          }
        }
      }
    },
    "createdOn": {
      "type": "integer",
      "description": "資料建立時間"
    },
    "createdBy": {
      "type": "string",
      "description": "資料建立的使用者編號"
    },
    "updatedOn": {
      "type": "integer",
      "description": "最後資料更新時間"
    },
    "updatedBy": {
      "type": "string",
      "description": "最後資料更新的使用者編號"
    }
  },
  "required": [
    "id",
    "storeId",
    "type",
    "email",
    "password",
    "createdOn",
    "createdBy",
    "updatedOn",
    "updatedBy"
  ]
};
