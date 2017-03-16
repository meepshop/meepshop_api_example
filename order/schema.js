query.order.schema = {
  "name": "order",
  "type": "object",
  "description": "Order data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "系統訂單編號"
    },
    "storeId": {
      "type": "string",
      "description": "商店編號"
    },
    "orderNo": {
      "type": "string",
      "description": "訂單編號"
    },
    "userId": {
      "type": "string",
      "description": "會員(購買者)編號"
    },
    "userInfo": {
      "type": "object",
      "description": "會員(購買者)資料",
      "properties": {
        "name": {
          "type": "string",
          "description": "會員(購買者)姓名"
        },
        "email": {
          "type": "string",
          "description": "會員(購買者)email"
        },
        "tel": {
          "type": "string",
          "description": "會員(購買者)電話"
        },
        "mobile": {
          "type": "string",
          "description": "會員(購買者)手機"
        }
      }
    },
    "paymentInfo": {
      "type": "object",
      "description": "訂單金流資訊",
      "properties": {

      }
    },
    "shipmentInfo": {
      "type": "object",
      "description": "訂單物流資訊",
      "properties": {

      }
    },
    "orderRegularId": {
      "type": "string",
      "description": "定期購編號, 有此欄位表示此單為定期購訂單"
    },
    "environment": {
      "type": "object",
      "description": "訂單下單系統環境",
      "properties": {
        "properties": {
          "userAgent": {
            "type": "object",
            "description": "買家下訂單所使用的硬體規格",
            "properties": {
              "browserName": {
                "type": "string",
                "description": "瀏覽器名稱"
              },
              "browserVersion": {
                "type": "string",
                "description": "瀏覽器版本"
              },
              "os": {
                "type": "string",
                "description": "作業系統"
              },
              "deviceModel": {
                "type": "string",
                "description": "裝置型號"
              },
              "deviceType": {
                "type": "string",
                "description": "裝置類型"
              }
            }
          },
          "domain": {
            "type": "string",
            "description": "買家下訂單時所使用的網域名稱"
          },
          "locale": {
            "type": "string",
            "description": "買家所觀看的語言別(目前可使用幣別為zh_TW, en_US, zh_CN, ja_JP, vi_VN)"
          },
          "currency": {
            "type": "string",
            "description": "買家所觀看的幣別(目前可使用幣別為TWD, USD, JPY, RMB, EUR, VND, KRW, HKD)"
          },
          "rate": {
            "type": "number",
            "description": "買家下訂單時所看到的匯率"
          }
        }
      }
    },
    "invoiceInfo": {
      "type": "object",
      "description": "發票資訊",
      "properties": {
        "invoiceType": {
          "type": "number",
          "description": "發票類型; 二聯式發票:1, 三聯式發票:2, 電子發票:3, 捐贈:4",
          "enum": [1, 2, 3, 4]
        },
        "invoiceTitle": {
          "type": "string",
          "description": "發票抬頭"
        },
        "invoiceVAT": {
          "type": "string",
          "description": "統一編號"
        },
        "donateUnit": {
          "type": "string",
          "description": "捐贈單位"
        },
        "streetAddress": {
          "type": "string",
          "description": "發票地址"
        },
        "vehicleType": {
          "type": "number",
          "description": "電子發票類型; 會員載具:1, 手機條碼:2, 自然人憑證:3",
          "enum": [1, 2, 3]
        },
        "citizenDigitalCertificate": {
          "type": "string",
          "description": "自然人憑證 (限vehicleType=3)"
        },
        "mobileBarcode": {
          "type": "string",
          "description": "手機條碼(限vehicleType=2)"
        }
      }
    },
    "activityInfo": {
      "type": "array",
      "description": "訂單的活動資訊",
      "items": {
        "type": "object",
        "properties": {
          "plugin": {
            "type": "string",
            "description": "活動類型"
          },
          "title": {
            "type": "object",
            "description": "活動名稱",
            "properties": {
              "zh_TW": {
                "type": "string",
                "description": "繁體中文名稱"
              }
            }
          }
        }
      }
    },
    "priceInfo": {
      "type": "object",
      "description": "訂單價格的相關資訊",
      "properties": {
        "currency": {
          "type": "string",
          "description": "店家使用幣別(目前可使用幣別為TWD, USD, JPY, RMB, EUR, VND, KRW, HKD)"
        },
        "cost": {
          "type": "number",
          "description": "訂單商品總成本"
        },
        "discount": {
          "type": "number",
          "description": "訂單折扣總金額"
        },
        "total": {
          "type": "number",
          "description": "訂單付款金額"
        },
        "adjust": {
          "type": "number",
          "description": "訂單總金額調整, 可為正負數"
        },
        "orderDiscount": {
          "type": "number",
          "description": "訂單類型折扣金額"
        },
        "productPrice": {
          "type": "number",
          "description": "未扣掉商品折扣的商品總金額"
        },
        "productQuantity": {
          "type": "integer",
          "description": "商品總數量"
        },
        "productDiscount": {
          "type": "integer",
          "description": "商品類型折扣金額"
        },
        "shipmentFee": {
          "type": "integer",
          "description": "運費折扣前的運費總金額"
        },
        "shipmentDiscount": {
          "type": "integer",
          "description": "運費折扣"
        },
        "return": {
          "type": "number",
          "description": "退款金額"
        },
        "actualTotal": {
          "type": "number",
          "description": "實際付款金額(退貨用)"
        }
      }
    },
    // categories: {
    //   type: new GraphQLList(groupProductsObjectType)
    // },
    // products: {type: new GraphQLList(productsObjectType)},
    "note": {
      "type": "string",
      "description": "賣家備註"
    },
    "comment": {
      "type": "string",
      "description": "買家備註"
    },
    "points": {
      "type": "integer",
      "description": "此張訂單使用的購物金"
    },
    // formData: {type: outformDataObjectType},
    "status": {
      "type": "integer",
      "description": "訂單狀態, 0:處理中; 1: 訂單結案, 2: 訂單取消 , 3:退換貨處理中, 5:取消處理中"
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
    "createdOn",
    "createdBy",
    "updatedOn",
    "updatedBy"
  ]
};
