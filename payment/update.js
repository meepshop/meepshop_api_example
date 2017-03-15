query.payment.update = {
  query: `mutation M($search: [UpdateStorePayment]){
    updateStorePaymentList(
      updateStorePaymentList: $search
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
        value
      }
      excludeShipping
      status
      createdOn
      updatedOn
      _error
    }
  }`,
  variables:{
    search: [
      {
        'id': 'b2e25a76-23da-46f4-a3f6-70e30601e9fc',
        'title': {
          'zh_TW': 'payment 1'
        },
        'maxPurchase': 10000,
        'minPurchase': 0,
        'description': {
          'zh_TW': 'payment description'
        },
        'status': 1
      }
    ]
  }
};
