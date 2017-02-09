ready(() => {
  renderSideMenu()
  document.querySelector('.side_menu').onclick = (evt) => {
    var subject = evt.target.getAttribute("data-subject")
    var action = evt.target.innerText
    if( action!=='schema' ){
      login((err, token) => {
        graphql(token, query[subject][action], (err, data) => {
          document.querySelector('#json').innerHTML = JSON.stringify(data, null, 2)
        })
      })
    }else{
      document.querySelector('#json').innerHTML = JSON.stringify(query[subject][action], null, 2)
    }
  }
})
