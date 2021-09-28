import User from './user.js'

const user = new User()
user.userName = "Gipsz Jakab"
user.userAge = 34

// console.log(user)

function feedUsers () {
    // https://users.nik.uni-obuda.hu/siposm/db/people.json --> CORS problem, server is set like this...
    fetch('https://reqres.in/api/users')
        .then(res => res.json()) // console log res
        .then(data => console.log(data))
}

function feedUser () {
    // fetch always succeeds, even on 404 --> nothing to catch
    fetch('https://reqres.in/api/users/23')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

function feedUser2 () {
    // we have to write 'logic' to handle
    fetch('https://reqres.in/api/users/23')
        .then(res => {
          if(res.ok) // HTTP status codes lvl 200
              console.log("SUCCESS")
          else
              console.log("FAIL")
        })
        .then(data => console.log(data))
}

function createUser () {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'User_1'
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

// feedUsers()
// feedUser()
// feedUser2()

createUser()