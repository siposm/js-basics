class User {
    userName = "";
    userAge = "";

    printName () {
        console.log(userName)
    }
    printAge() {
        console.log(userAge)
    }
}

function someMethodHere () {
    console.log("something")
}

export default User

// export { someMethodHere, User }
// or inline export --> don't like