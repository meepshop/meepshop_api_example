query.payment.search = {
  query: `query Root($search: searchInputObjectType){
    getStorePaymentList(
      search: $search
    ){
      data {
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
