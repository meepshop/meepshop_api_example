query.product.create = {
  query: `mutation M($search: [NewProduct]){
    createProductList(
      createProductList: $search
    ){
      id,
      title{
        zh_TW,
        en_US
      },
      mainFileInfo{
        id
      },
      variants{
        id,
        sku
      },
      _error
    }
  }`,
  variables:{
    search: [
      {
        'variants': {
            'createData': [
                {
                    'sku': 'p1',
                    'listPrice': 200,
                    'retailPrice': 100,
                    'specs': {
                        'createData': [
                            {
                                'title': {
                                    'zh_TW': 'S'
                                }
                            }
                        ],
                        'updateData': [],
                        'deleteData': []
                    }
                }
            ],
            'updateData': [],
            'deleteData': []
        },
        'status': 1,
        'specs': {
            'createData': [
                {
                    'title': {
                        'zh_TW': '尺寸'
                    }
                }
            ],
            'updateData': [],
            'deleteData': []
        },
        'title': {
          'zh_TW': 'product-1'
        }
      }
    ]
  }
};
