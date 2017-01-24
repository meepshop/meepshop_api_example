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
            query: '5da8aa6b-79ee-4e2d-b2a9-657dbd554a2f'
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
