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
        userId: '49a4413d-7570-472b-89d9-ec0c8b19f9a9',
        class: 99,
        points: 124,
        startTime: 1476783371,
        endTime: 1485380171,
        status: 1
      },
    ]
  }
};
