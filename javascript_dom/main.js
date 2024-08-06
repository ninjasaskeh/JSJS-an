// document.title = "kiwkiw"
// const body = document.body

// const h1 = document.createElement('h1')
// h1.textContent = 'ini h1'

// //.innerHTML itu bisa di <marquee> kan, yg lain ga bisa
// const myname = document.createElement('p')
// myname.innerHTML =  '<marquee>arip</marquee>'

// const yourname = document.createElement('b')
// yourname.innerText = 'panjul'

// body.append(h1)
// body.append(myname)
// body.append(yourname)

// console.log(document.title)

document.title = "kiwkiw"
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2') //querySelector bisa untuk id & class

const oriText = 'Klik saya 1'
const oriText2 = 'Klik saya 2'
btn1.textContent = oriText
btn2.textContent = oriText2

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.background = 'tomato'
btn1.style.fontSize = '20px'

function gantiWarna() {
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'halo gesss'
    body.append(newText)
}

function gantiText() {
    btn1.textContent = 'hihihi hahahah'
}

function balikLagi() {
    btn1.textContent = oriText
}

const nama = document.createElement('p')

function muncul() {
    nama.textContent = 'arip'
    body.append(nama)
}

function ganti() {
    nama.style.color = 'tomato'
}