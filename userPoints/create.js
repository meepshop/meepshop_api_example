query.userPoints.create = {
  query: `mutation M($search: [NewUserPoints]){
    createUserPointsList(
      createUserPointsList: $search
    ){
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
      _error
    }
  }`,
  variables:{
    search: [
      {
        userId: '5da8aa6b-79ee-4e2d-b2a9-657dbd554a2f',
        class: 99,
        points: 124,
        startTime: 1476783371,
        endTime: 1485380171,
        status: 1
      },
    ]
  }
};
