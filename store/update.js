query.store.update = {
  query: `mutation M($search: [UpdateStore]){
    updateStoreList(
      updateStoreList: $search
    ){
      id,
      cname
      domain
      name
      _error
    }
  }`,
  variables:{
    search: [
      {
          'id': '026c57a9-3cd4-44b7-bc37-4aa059030646',
          'name': 'annie shop'
      }
    ]
  }
};
