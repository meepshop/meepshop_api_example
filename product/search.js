query.product.search = {
  query: `query Root($search: searchInputObjectType){
    getProductList(
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
        variants {
          id
          sku
          listPrice
          retailPrice
          stock
          cost
          vendorSku
          maxPurchaseLimit
          minPurchaseItems
          status
          specs{
            id
            specId
            title{
              zh_TW
            }
          }
        }
        specs {
          id
          title {
            zh_TW
          }
        }
        status
        galleryInfo{
          mainId
          media
        }
        createdOn
        updatedOn
      }
      total
    }
  }`,
  variables:{
    search: {
      size: 2,
      from: 0,
      filter: {
        and: [
          // {
          //   type: 'ids',
          //   ids: ['deb658a1-c659-11e6-812c-d593dfa0e125']
          // }
        ]
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
