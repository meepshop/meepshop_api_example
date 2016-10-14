query.product.search = {
  query: `query Root($search: searchInputObjectType){
    getProductList(
      search: $search
    ){
      data {
          id,
          title{
            zh_TW,
          },
          variants {
            id,
            sku
          },
          specs {
            id,
            title {
              zh_TW,
              en_US
            }
          },
          status,
          mainFileInfo{
            id
            linkId
            type
          }
        }
      total
    }
  }`,
  variables:{
    search: {
      size: 2,
      from: 0,
      filter: {
        and: []
      },
      showVariants: true,
      showMainFile: true,
      sort: [
        {
          field: 'createdOn',
          order: 'desc'
        }
      ]
    }
  }
};
