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
        id: 'aa457804-382c-4b03-bc03-4a84c45e156f',
        status: 0
      }
    ]
  }
};
