ready(() => {
  renderSideMenu()
  document.querySelector('.side_menu').onclick = (evt) => {
    var subject = evt.target.getAttribute("data-subject")
    var action = evt.target.innerText
    login((err, token) => {
      graphql(token, query[subject][action], (err, data) => {
        document.querySelector('#json').innerHTML = JSON.stringify(data, null, 2)
      })
    })
  }
})
