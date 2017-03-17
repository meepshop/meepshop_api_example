query.shipment.schema = {
  "name": "shipment",
  "type": "object",
  "description": "Shipment data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "物流編號"
    },
    "title": {
      "type": "object",
      "description": "物流名稱",
      "properties": {
        "zh_TW": {
          "type": "string",
          "description": "繁體物流名稱"
        }
      }
    },
    "description": {
      "type": "object",
      "description": "物流描述",
      "properties": {
        "zh_TW": {
          "type": "string",
          "description": "繁體物流描述"
        }
      }
    },
    "template": {
      "type": "string",
      "description": "物流類型, custom:自訂物流; blackcat:黑貓; allpay:綠界; gmo; chunghwaPost:中華郵政"
    },
    "minPurchase": {
      "type": "number",
      "description": "最小購買金額"
    },
    "maxPurchase": {
      "type": "number",
      "description": "最大購買金額"
    },
    "priceRule": {
      "type": "object",
      "description": "金額計算方式",
      "properties": {
        "method": {
          "type": "integer",
          "description": "運費計算方式, 均一價: 0, 件數: 1, 訂單金額: 3",
          "enum": [0, 1, 2, 3]
        },
        "fix": {
          "type": "integer",
          "description": "均一價金額"
        },
        "count": {
          "type": "array",
          "description": "件數計算方式",
          "items": {
            "type": "object",
            "properties": {
              "price": {
                "type": "integer",
                "description": "此件數範圍的物流金額"
              },
              "min": {
                "type": "integer",
                "description": "最少件數"
              },
              "max": {
                "type": "integer",
                "description": "最多件數"
              }
            }
          }
        }
      }
    },
    "status": {
      "type": "integer",
      "description": "物流狀態"
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
    "template",
    "status",
    "createdOn",
    "createdBy",
    "updatedOn",
    "updatedBy"
  ]
};
