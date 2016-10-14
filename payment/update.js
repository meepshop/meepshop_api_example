query.payment.update = {
  query: `mutation M($search: [UpdateStorePayment]){
    updateStorePaymentList(
      updateStorePaymentList: $search
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
          'id': '25ceb063-b990-4d5b-9d72-8a8df32c3b0c',
          'title': {
            'zh_TW': 'payment-2'
          },
      }
    ]
  }
};
