function login (callback) {
  var body = {
    email: 'annie@meepshop.com', // 請輸入帳號
    password: '123456'           // 請輸入密碼
  }
  var request = new XMLHttpRequest()

  request.open('POST', 'http://api.meepshop.tw/auth/login', true)
  request.setRequestHeader('Content-Type', 'application/json')
  request.setRequestHeader('x-meepshop-domain', 'admin.meepshop.tw')
  request.send(JSON.stringify(body))

  request.onload = function () {
    if (request.status >= 400) {
      callback({status: request.status})
    } else {
      callback(null, JSON.parse(request.responseText).token)
    }
  }
}

function graphql(token, query, callback) {
  var request = new XMLHttpRequest()

  request.open('POST', 'http://api.meepshop.tw/graphql', true)
  request.setRequestHeader('Content-Type', 'application/json')
  request.setRequestHeader('x-meepshop-domain', 'admin.meepshop.tw')
  request.setRequestHeader('x-meepshop-authorization-token', token)
  request.send(JSON.stringify(query))

  request.onload = function () {
    if (request.status >= 400) {
      callback({status: request.status})
    } else {
      callback(null, JSON.parse(request.responseText))
    }
  }
}

function renderSideMenu() {
  var mainUL = document.createElement('ul')
  Object.keys(query).forEach((subject) => {
    var subjectLI = document.createElement('li')
    mainUL.appendChild(subjectLI)
    subjectLI.innerText = subject
    var subjectUL = document.createElement('ul')
    subjectLI.appendChild(subjectUL)
    Object.keys(query[subject]).forEach((action) => {
      var li = document.createElement('li')
      li.innerHTML = `<button class="query" data-subject="${subject}">${action}</button>`
      subjectUL.appendChild(li)
    })
  })
  document.querySelector('.side_menu').appendChild(mainUL)
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
