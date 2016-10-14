query.payment.search = {
  query: `query Root($search: searchInputObjectType){
    getStorePaymentList(
      search: $search
    ){
      data {
          id,
          title{
            zh_TW,
          },
          template
          maxPurchase
          minPurchase
        }
      total
    }
  }`,
  variables:{
    search: {
      size: 10,
      from: 0,
      filter: {
        and: []
      },
      sort: [
        {
          field: 'createdOn',
          order: 'desc'
        }
      ]
    }
  }
};
