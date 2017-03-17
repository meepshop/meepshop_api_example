query.payment.schema = {
  "name": "payment",
  "type": "object",
  "description": "Payment data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "金流編號"
    },
    "title": {
      "type": "object",
      "description": "金流名稱",
      "properties": {
        "zh_TW": {
          "type": "string",
          "description": "繁體金流名稱"
        }
      }
    },
    "description": {
      "type": "object",
      "description": "金流描述",
      "properties": {
        "zh_TW": {
          "type": "string",
          "description": "繁體金流描述"
        }
      }
    },
    "template": {
      "type": "string",
      "description": "金流類型, custom:自訂金流; gmo; allpay:綠界; hitrust"
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
          "description": "金流計算 減少金額: 0, 增加金額: 1, 減少%: 2, 增加%: 3",
          "enum": [0, 1, 2, 3]
        },
        "value": {
          "type": "number",
          "description": "金流計算要加減的值"
        }
      }
    },
    "excludeShipping": {
      "type": "array",
      "description": "排除物流",
      "items": {
        "type": "string"
      }
    },
    "status": {
      "type": "integer",
      "description": "金流狀態"
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
