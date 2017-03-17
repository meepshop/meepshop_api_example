query.shipment.search = {
  query: `query Root($search: searchInputObjectType){
    getStoreShipmentList(
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
