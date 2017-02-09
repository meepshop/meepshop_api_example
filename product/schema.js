query.product.schema = {
  "name": "product",
  "type": "object",
  "description": "Product data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "商品編號"
    },
    "storeId": {
      "type": "string",
      "description": "商店編號"
    },
    "tags": {
      "type": "array",
      "description": "商品所屬的tag",
      "items": {
        "type": "string"
      }
    },
    "title": {
      "type": "object",
      "description": "商品名稱",
    },
    "description": {
      "type": "object",
      "description": "商品描述"
    },
    "galleryInfo": {
      "type": "object",
      "description": "商品圖片",
      "properties": {
        "mainId": {
          "type": "string",
          "description": "主圖編號"
        },
        "media": {
          "type": "array",
          "description": "商品圖片編號列表",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "variants": {
      "type": "array",
      "description": "商品各個規格資訊",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "商品規格編號"
          },
          "sku": {
            "type": "string",
            "description": "店家所使用的商品規格編號"
          },
          "listPrice": {
            "type": "number",
            "description": "定價"
          },
          "retailPrice": {
            "type": "number",
            "description": "售價"
          },
          "stock": {
            "type": "integer",
            "description": "商品數量"
          },
          "cost": {
            "type": "number",
            "description": "成本"
          },
          "vendorSku": {
            "type": "string",
            "description": "廠商的商品規格編號"
          },
          "maxPurchaseLimit": {
            "type": "integer",
            "description": "單次可購買數量上限"
          },
          "minPurchaseItems": {
            "type": "integer",
            "description": "單次可購買數量下限"
          },
          "status": {
            "type": "integer",
            "description": "規格狀態"
          },
          "specs": {
            "type": "array",
            "description": "規格資料",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "description": "此筆規格資料的編號"
                },
                "specId": {
                  "type": "string",
                  "description": "規格編號  如：顏色的編號"
                },
                "title": {
                  "type": "object",
                  "description": "規格內容名稱",
                }
              },
              "required": [
                "id",
                "specId"
              ]
            }
          }
        },
        "required": [
          "id"
        ]
      }
    },
    "specs": {
      "type": "array",
      "description": "商店的規格表",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "規格編號"
          },
          "title": {
            "type": "object",
            "description": "規格名稱"
          }
        },
        "required": [
          "id",
          "title"
        ]
      }
    },
    "status": {
      "type": "integer",
      "description": "商品狀態, 0: 商品下架; 1: 商品上架",
      "default": 0,
      "enum": [0, 1]
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
    "status",
    "createdOn",
    "createdBy",
    "updatedOn",
    "updatedBy"
  ]
};
