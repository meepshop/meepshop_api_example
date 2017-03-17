query.shipment.update = {
  query: `mutation M($search: [UpdateStoreShipment]){
    updateStoreShipmentList(
      updateStoreShipmentList: $search
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
          'id': 'ac784621-a659-4977-a719-a7321f0bda02',
          'title': {
            'zh_TW': 'shipment 1'
          },
          'maxPurchase': 10000,
          'minPurchase': 0,
          'description': {
            'zh_TW': 'shipment description'
          },
          'status': 1
      }
    ]
  }
};
