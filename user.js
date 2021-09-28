import Cat from './cat.js'

class User {
    userName = ""
    userAge = ""
    cat = undefined

    constructor() {
        this.userName = "lorem"
        this.userAge = 0
        this.cat = new Cat()
        this.cat.catName = "lorem-cat"
        this.cat.catAge = 0
    }

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