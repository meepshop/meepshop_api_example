query.shipment.update = {
  query: `mutation M($search: [UpdateStoreShipment]){
    updateStoreShipmentList(
      updateStoreShipmentList: $search
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
          'id': '7cd06623-bbaa-4935-b439-280aedee8532',
          'title': {
            'zh_TW': 'shipment-2'
          },
      }
    ]
  }
};
