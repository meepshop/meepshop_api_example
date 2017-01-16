query.user.create = {
  query: `mutation M($search: [NewUser]){
    createUserList(
      createUserList: $search
    ){
      storeId
      email
      name
      gender
      platform{
        facebook{
          id
        }
      }
      birthday{
        day
        month
        year
      }
      additionalInfo{
        mobile
        tel
        address{
          streetAddress
        }
      }
      createdOn
      updatedOn
      _error
    }
  }`,
  variables:{
    search: [
      {
        type: 'SHOPPER',
        email: 'test@meepshop.com',
        password: '123456',
        name: 'test',
        gender: 0,
        platform: {
          facebook: {
            id: '124346556udgvsdfftu56' 
          }
        },
        birthday: {
          day: 1,
          month: 1,
          year: 2017
        },
        additionalInfo: {
          mobile: '0911111111',
          tel: '02-11111111',
          address: {
            streetAddress: 'Taiwan, Taipei, 100, xxx street'
          }
        }
      },
    ]
  }
};
