query.userPoints.search = {
  query: `query Q($search: searchInputObjectType){
    getUserPointList(
      search: $search
    ){
      data{
        id
        userId
        class
        points
        startTime
        endTime
        note
        status
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
          {
            type: 'exact',
            field: 'userId',
            query: '49a4413d-7570-472b-89d9-ec0c8b19f9a9'
          }
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
