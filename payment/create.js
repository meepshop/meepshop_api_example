query.payment.create = {
  query: `mutation M($search: [NewStorePayment]){
    createStorePaymentList(
      createStorePaymentList: $search
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
        'maxPurchase': 10000,
        'minPurchase': 0,
        'title': {
            'zh_TW': 'payment 1',
            'en_US': ''
        },
        'template': 'custom',
        'description': {
          'zh_TW': '123'
        },
        'status': 1
      }
    ]
  }
};
