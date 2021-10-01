import User from './user.js'

const user = new User()
user.userName = "Gipsz Jakab"
user.userAge = 34

// console.log(user)

// FETCH API https://developer.mozilla.org/en-US/docs/Web/API/fetch

function feedUsers () {
    // https://users.nik.uni-obuda.hu/siposm/db/people.json --> CORS problem, server is set like this...
    fetch('https://reqres.in/api/users')
        .then(res => res.json()) // console log res
        .then(data => console.log(data))
}

function feedUser () {
    // fetch always succeeds, even on 404 --> nothing to catch
    fetch('https://reqres.in/api/users/23') // ID 5 is ok, ID 23 is not
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

function feedUser2 () {
    // we have to write 'logic' to handle
    fetch('https://reqres.in/api/users/5') // ID 5 success --> data is displayed, ID 23 error --> no data (undefined)
        .then(res => {
          if(res.ok) // HTTP status codes lvl 200
          {
              console.log("SUCCESS")
              return res.json()
          }
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
feedUser2()

// createUser()

// ******************************************************************************

function displayUsers () {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => {

            console.log(data.data)

            // cannot write nested HTML tags here, meaning <h1>data.data[i].first_name</h1>
            // I have to query somehow the 'main' HTML element, and create new elements inside!

            for (let i = 0; i < data.data.length; i++) {
                let baseContainer = document.getElementById("userContainer")

                let userContainer = document.createElement('div')
                userContainer.className += "user-div"

                let userData = document.createElement('p')

                userData.innerText = data.data[i].first_name
                userData.innerText += " "
                userData.innerText += data.data[i].last_name

                userContainer.appendChild(userData)

                let userAvatar = document.createElement('img')

                userAvatar.src = data.data[i].avatar

                userContainer.appendChild(userAvatar)

                baseContainer.appendChild(userContainer)
            }

            // At this point we can feel that creating elements from JS is not the most convinient way...
            // Better approach: create HTML layout before, and populate/feed it from JS.

        })
}

// displayUsers()