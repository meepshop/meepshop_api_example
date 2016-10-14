query.shipment.search = {
  query: `query Root($search: searchInputObjectType){
    getStoreShipmentList(
      search: $search
    ){
      data {
          id,
          title{
            zh_TW,
          },
          status
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
