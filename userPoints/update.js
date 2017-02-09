query.userPoints.update = {
  query: `mutation M($search: [UpdateUserPoints]){
    updateUserPointsList(
      updateUserPointsList: $search
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
        id: '77a1c267-ba6a-498d-8f20-9a7d6c8bab55',
        status: 1
      }
    ]
  }
};
