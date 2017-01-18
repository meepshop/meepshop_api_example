query.user.update = {
  query: `mutation M($search: [UpdateUser]){
    updateUserList(
      updateUserList: $search
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
        id: 'bec40a86-3a48-4ded-bfd5-993bc66ebad7',
        name: 'test2',
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
      }
    ]
  }
};
