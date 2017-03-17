query.userPoints.schema = {
  "name": "userPoints",
  "type": "object",
  "description": "UserPoints data output schema.",
  "properties": {
    "id": {
      "type": "string",
      "description": "購物金編號"
    },
    "userId": {
      "type": "string",
      "description": "會員編號"
    },
    "class": {
      "type": "string",
      "description": "購物金發送條件類型; 會員加入: 1, 首次購物: 2, 滿額贈送: 3, 生日: 4, 其他: 99"
    },
    "points": {
      "type": "integer",
      "description": "購物金數量"
    },
    "startTime": {
      "type": "integer",
      "description": "購物金開始使用時間"
    },
    "endTime": {
      "type": "integer",
      "description": "購物金結束使用時間"
    },
    "note": {
      "type": "string",
      "description": "發送備註"
    },
    "status": {
      "type": "integer",
      "description": "購物金狀態"
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
    "userId",
    "class",
    "points",
    "startTime",
    "endTime",
    "status",
    "createdOn",
    "createdBy",
    "updatedOn",
    "updatedBy"
  ]
};
