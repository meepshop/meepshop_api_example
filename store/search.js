query.store.search = {
  query: `query Q($search: searchInputObjectType){
    getStoreList(
      search: $search
    ){
      data{
        id
        cname
        domain
        name
        currency
      }
      total
    }
  }`,
  variables:{
    search: {
      size: 1,
      from: 0,
      filter: {
        and: [
        ]
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
