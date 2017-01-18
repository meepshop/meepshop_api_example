query.product.update = {
  query: `mutation M($search: [UpdateProduct]){
    updateProductList(
      updateProductList: $search
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
        id: 'db4c76c1-dbaf-11e6-b6ee-f7f3c0647cac',
        title: {
          zh_TW: 'product-2'
        },
        variants: {
          createData: [
            {
              sku: 'p2',
              listPrice: 200,
              retailPrice: 100,
              stock: 100,
              cost: 50,
              vendorSku: 'V00002',
              maxPurchaseLimit: 99,
              minPurchaseItems: 1,
              specs: {
                createData: [
                  {
                    title: {
                      zh_TW: 'M'
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
        }
      }
    ]
  }
};
