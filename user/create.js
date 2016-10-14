query.user.create = {
  query: `mutation M($search: [NewUser]){
    createUserList(
      createUserList: $search
    ){
      storeId
      email
    }
  }`,
  variables:{
    search: [
      {
        type: 'SHOPPER',
        email: 'sunny@meepshop.com',
        password: '123456',
        name: 'sunny01'
      },
    ]
  }
};
