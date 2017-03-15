query.shipment.create = {
  query: `mutation M($search: [NewStoreShipment]){
    createStoreShipmentList(
      createStoreShipmentList: $search
    ){
      id
      title{
        zh_TW
      }
      description{
        zh_TW
      }
      template
      maxPurchase
      minPurchase
      priceRule{
        method
        fix
        count{
          price
          min
          max
        }
        orderAmount{
          price
          min
          max
        }
      }
      searchLink
      status
      createdOn
      updatedOn
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
            'zh_TW': 'shipment 1'
        },
        'description': {
            'zh_TW': 'shipment description'
        },
        'minPurchase': 0,
        'maxPurchase': 10000,
      }
    ]
  }
};
