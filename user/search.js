query.user.search = {
  query: `query Q($search: searchInputObjectType){
    getUserList(
      search: $search
    ){
      data{
        id
        storeId
        type
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
      }
      total
    }
  }`,
  variables:{
    search: {
      size: 10,
      from: 0,
      filter: {
        and: [
          // {
          //   type: 'query_string',
          //   fields: ['email'],
          //   query: 'meepshop'
          // }
        ]
      },
      sort: [
        {
          field: 'createdOn',
          order: 'desc'
        }
      ]

    }
  }
};
