query.order.schema = {
  "name": "order",
  "type": "object",
  "description": "Order data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "系統訂單編號"
    },
    "userId": {
      "type": "string",
      "description": "會員(購買者)編號"
    },
    "orderNo": {
      "type": "string",
      "description": "訂單編號"
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
        },
        "memberGroupId": {
          "type": "string",
          "description": "會員群組編號(可對應商店的會員群組資料取得群組名稱)"
        }
      }
    },
    "categories": {
      "type": "object",
      "description": "訂單商品的分類資訊(依多物流分群)",
      "properties": {
        "products": {
          "type": "array",
          "description": "訂單商品購買資訊",
          "items": {
            "type": "object",
            "properties": {
              "productId": {
                "type": "string",
                "description": "系統的商品編號"
              },
              "variantId": {
                "type": "string",
                "description": "系統的規格編號"
              },
              "title": {
                "type": "object",
                "description": "商品名稱",
                "properties": {
                  "zh_TW": {
                    "type": "string",
                    "description": "繁體中文名稱"
                  }
                }
              },
              "type": {
                "type": "string",
                "description": "表示此為購買的商品(product)或是為贈品(gift)"
              },
              "sku": {
                "type": "string",
                "description": "店家所使用的商品規格編號"
              },
              "vendorSku": {
                "type": "string",
                "description": ""
              },
              "listPrice": {
                "type": "string",
                "description": ""
              },
              "retailPrice": {
                "type": "string",
                "description": ""
              },
              "totalPrice": {
                "type": "number",
                "description": "購買金額"
              },
              "discountPrice": {
                "type": "number",
                "description": ""
              },
              "quantity": {
                "type": "integer",
                "description": "購買數量"
              },
              "specs": {
                "type": "array",
                "description": "商品規格資訊",
                "items": {
                  "type": "object",
                  "properties": {
                    "specId": {
                      "type": "string",
                      "description": ""
                    },
                    "title": {
                      "type": "object",
                      "description": "",
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
              "galleryInfo": {
                "type": "object",
                "description": "",
                "properties": {
                  "mainId": {
                    "type": "string",
                    "description": "商品主圖"
                  },
                  "media": {
                    "type": "array",
                    "description": "",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "activityInfo": {
                "type": "array",
                "description": "此商品的活動資訊",
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
                    },
                    "discountPrice": {
                      "type": "number",
                      "description": "活動折扣金額"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "paymentInfo": {
      "type": "object",
      "description": "訂單金流資訊",
      "properties": {
        "price": {
          "type": "number",
          "description": "金流金額",
        },
        "status": {
          "type": "integer",
          "description": "金流狀態, 0:等待確認; 1:付款通知; 2:對帳完成; 3:資料有誤; 4:付款失敗; 6:退款處理",
          "enum": [0, 1, 2, 3, 4, 6]
        },
        "list": {
          "type": "array",
          "description": "訂單的各次金流付款資訊(訂單可能會換付款方式)",
          "items": {
            "type": "object",
            "properties": {
              "paymentId": {
                "type": "string",
                "description": "金流系統編號"
              },
              "template": {
                "type": "string",
                "description": "金流類型, custom:自訂金流; gmo; allpay:綠界; hitrust"
              },
              "name": {
                "type": "string",
                "description": "金流的名稱"
              },
              "description": {
                "type": "string",
                "description": "金流的描述"
              },
              "price": {
                "type": "number",
                "description": "金流金額"
              },
              "paymentTime": {
                "type": "integer",
                "description": "付款時間"
              }
            }
          }
        }
      }
    },
    "shipmentInfo": {
      "type": "object",
      "description": "訂單物流資訊",
      "properties": {
        "price": {
          "type": "number",
          "description": "物流金額",
        },
        "status": {
          "type": "integer",
          "description": "物流狀態, 0:未出貨; 1:備貨中; 2:缺貨中; 3:已出貨; 4:預購; 5:換貨處理; 6:退貨處理",
          "enum": [0, 1, 2, 3, 4, 5, 6]
        },
        "list": {
          "type": "array",
          "description": "訂單不同的物流資訊(可能為多物流訂單)",
          "items": {
            "type": "object",
            "properties": {
              "shipmentId": {
                "type": "string",
                "description": "物流系統編號"
              },
              "template": {
                "type": "string",
                "description": "物流類型, custom:自訂物流; blackcat:黑貓; allpay:綠界; gmo; chunghwaPost:中華郵政"
              },
              "name": {
                "type": "string",
                "description": "物流的名稱"
              },
              "description": {
                "type": "string",
                "description": "物流的描述"
              },
              "price": {
                "type": "number",
                "description": "物流金額"
              },
              "number": {
                "type": "string",
                "description": "物流編號"
              },
              "shipmentTime": {
                "type": "integer",
                "description": "出貨時間"
              },
              "recipient": {
                "type": "object",
                "description": "此物流要送的收件人地址",
                "properties": {
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
            }
          }
        }
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
