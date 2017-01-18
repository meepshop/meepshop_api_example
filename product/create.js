query.product.create = {
  query: `mutation M($search: [NewProduct]){
    createProductList(
      createProductList: $search
    ){
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
      _error
    }
  }`,
  variables:{
    search: [
      {
        variants: {
          createData: [
            {
              sku: 'p1',
              listPrice: 200,
              retailPrice: 100,
              stock: 100,
              cost: 50,
              vendorSku: 'V00001',
              maxPurchaseLimit: 99,
              minPurchaseItems: 1,
              specs: {
                createData: [
                  {
                    title: {
                      zh_TW: 'S'
                    }
                  }
                ],
                updateData: [],
                deleteData: []
              },
              status: 1
            }
          ],
          updateData: [],
          deleteData: []
        },
        status: 1,
        specs: {
          createData: [
            {
              title: {
                zh_TW: '尺寸'
              }
            }
          ],
          updateData: [],
          deleteData: []
        },
        title: {
          zh_TW: 'product-1'
        },
        description: {
          zh_TW: 'product description'
        }
      }
    ]
  }
};
