//biasa
// function addName(firstname, lastname) {
//     console.log(firstname)
//     console.log(lastname)
// }

// addName('sapa kek', 'anjay')

//make argurments
// function addName() {
//     console.log(arguments[0])
//     console.log(arguments[1])
// }

// addName('sapa kek', 'anjay')

//kalo gatau berapa arguments nya
// function addName() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }

// addName('sapa kek', 'anjay')

//bisa dijadiin var juga 
// const fullname = function addName(firstname, lastname) {
//     console.log(firstname, lastname)
// }

// fullname('sapa kek', 'anjay')

// function addName(firstname, lastname) {
//     console.log(firstname, lastname)
// }

//bisa gini juga
// const fullname = new Function(
//     'firstname',
//     'lastname',
//     'console.log(firstname, lastname)'
// )

// fullname('poko', 'loko')

//cara 1 -> keyword function
const sum1 = new Function('x', 'y', 'console.log(x + y)')

//cara 2 -> standard function -> ini bisa hoisting
function sum2(x,y ) {
    console.log(x + y)
}

//cara 3 -> arrow function
const sum3 = (x,y) => {
    console.log(x + y)
}

function randomize() {
    const randomNumber = ~~(Math.random() * 1000)
    if(randomNumber > 200) {
        console.log('wow lebih dari 200', randomNumber)
    } else {
        console.log(randomNumber)
    }
}
randomize()

sum1(1, 1)
sum2(2, 2)
sum3(3, 3)