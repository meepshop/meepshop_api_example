query.user.update = {
  query: `mutation M($search: [UpdateUser]){
    updateUserList(
      updateUserList: $search
    ){
      id,
      email
      name
      _error
    }
  }`,
  variables:{
    search: [
      {
          'id': 'a55490eb-cd98-41a2-8b4f-8c3126c5dec1',
          'name': 'sunny002'
      }
    ]
  }
};
