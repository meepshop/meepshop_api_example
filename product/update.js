query.product.update = {
  query: `mutation M($search: [UpdateProduct]){
    updateProductList(
      updateProductList: $search
    ){
      id,
      title{
        zh_TW,
        en_US
      },
      variants {
        id,
        sku
      },
      mainFileInfo{
        id
      }
      _error
    }
  }`,
  variables:{
    search: [
      {
          'id': 'b87d8f61-48d1-11e6-8df8-d12d9a3269af',
          'title': {
            'zh_TW': 'product-2'
          },
      }
    ]
  }
};
