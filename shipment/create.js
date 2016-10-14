query.shipment.create = {
  query: `mutation M($search: [NewStoreShipment]){
    createStoreShipmentList(
      createStoreShipmentList: $search
    ){
      id,
      title{
        zh_TW,
        en_US
      },
      _error
    }
  }`,
  variables:{
    search: [
      {
        'priceRule': {
          'method': 1,
          'fix': 0,
          'count': [
            {
              'min': 1,
              'max': 5,
              'price': 10
            },
            {
              'min': 6,
              'max': 10,
              'price': 20
            }
          ],
          'weight': []
        },
        'title': {
            'zh_TW': '1231'
        },
        'description': {
            'zh_TW': '123'
        },
        'minPurchase': '2',
        'maxPurchase': '3',
      }
    ]
  }
};
