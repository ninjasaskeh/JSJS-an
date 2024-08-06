// //simple aja
// function satu() {
//     console.log('satu')
// }
// function dua() {
//     console.log('dua')
// }
// function tiga() {
//     setTimeout(() => {
//         console.log('tiga')
//     }, 3000)
   
// }

// satu()
// dua()
// tiga()

const token = ~~[Math.random() * 12345678]

const pictures = ['1.png', '2.png', '3.png', '4.png']

function login(username, callback) {
    console.log('sabar dulu gan lagi nyari token!!!!')
    setTimeout(() => {
        callback({token, username})
    }, 200)
}

function getUser(token, callback) {
    console.log('sabar dulu gan lagi nyari apiKey!!!!')
    if(token)
    setTimeout(() => {
        callback ({xKey: 'xkey123'})
    }, 500)
    
}

function getPictures(apiKey, callback ) {
    console.log('sabar dulu gan lagi nyari pictures!!!!')
    setTimeout(() => {
        if(apiKey) callback ({pic: pictures})
    }, 1500)
}

login('arip', function(response) {
    const {token} = response
    getUser(token, function(response) {
        const apiKey = response
        getPictures(apiKey, function(response) {
            const {pic} =response
             console.log(pic)
        })
        

    })
   
    
})
