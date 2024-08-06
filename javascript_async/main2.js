const token = ~~[Math.random() * 12345678]

const pictures = ['1.png', '2.png', '3.png', '4.png']

function login(username) {
    console.log('sabar dulu gan lagi nyari token!!!!')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if(username !== 'arip') failed('salah ygy')
            success(token)
        }, 200)
    })
}

function getUser(token) {
    console.log('sabar dulu gan lagi nyari apiKey!!!!')
    return new Promise((success, failed) => {
        if(!token) failed('gaada token')
        if(token)
        setTimeout(() => {
            success ({xKey: 'xkey123'})
        }, 500)
    })
}

function getPictures(apiKey) {
    console.log('sabar dulu gan lagi nyari gambar!!!!')
    return new Promise((success, failed) => {
        if(!apiKey) failed('tala ada api key lo')
        setTimeout(() => {
            success ( pic )
        })
    })
    
}

async function UserDisplay() {
    const  token  = await login('arip')
    const  apiKey  = await getUser(token)
    const  pic = await getPictures(apiKey)

    console.log(`
    token lu ${token}
    apikey lu ${apiKey}
    gambar lu ${pic}
    `)
}

UserDisplay()

   
    
