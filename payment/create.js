query.payment.create = {
  query: `mutation M($search: [NewStorePayment]){
    createStorePaymentList(
      createStorePaymentList: $search
    ){
      id
      storeId
      title{
        zh_TW
        en_US
      }
      template
      status
    }
  }`,
  variables:{
    search: [
      {
        'maxPurchase': 10000,
        'minPurchase': 0,
        'title': {
            'zh_TW': 'oooo0721',
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
