// let nama = "arif"

// let usia = 20
// let tinggiBadan = 165.9
// let beratBadan
// let pacar = null

// beratBadan = 100
// pacar = 1

// if(pacar == null) {
//     pacar = "gaada"
// } else {
//     pacar = "udah ada"
//}

// switch(pacar) {
//     case 1 :
//         pacar = "punya satu aja"
//         break
//     case 2 :
//         pacar = "punya 2 ngab"
//         break
//     default :
//         pacar = "gaada"
//         break
// }

// let saldoAwal = 5000
// let saldoTambahan = 3000
// const hutang = 1000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 9
// const y = 3
// const z = x/y

// alert(`x: ${x} y: ${y} x/y =  ${z}`)
// alert(`nama saya ${nama} usia ${usia} berat ${beratBadan} kg tinggi Badan ${tinggiBadan} pacar ${pacar}`)
// alert(`saldo awal ${saldoAwal} & saldo tambahan ${saldoTambahan}, jadi total ${saldoAkhir} `)

// let namaGuru = ['jordi', 'koni', 'ayu']
// namaGuru.push('mamat', 'fikri')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru)

// let namaGuru = []

// namaGuru[0] = 'mamat'
// namaGuru[1] = 'papan'
// namaGuru[3] = 'joni'
// namaGuru.shift() //del index 0
// namaGuru.pop() //del latest index

//  alert(namaGuru)

// const namaGuru = ['budi', 'anjay', 'ilham', 'ratna']
// for(let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }

// let i = 0;

// while cari kondisi baru eksekusi
// while(i < 10) {
//     i++
//     console.log('arip')
// }

// let i = 0;

// do while akan eksekusi dulu baru cari kondisi
// do{
//     i++
//     console.log('arip')
// } while (i < 10)

// let i = 10

// while(i < 10) {
//     i++
//     console.log('arip')
// }

let saldoAkhir = prompt('berapa saldo mu')

alert(`saldo kamu = ${saldoAkhir}`)

let hari = new Date().getDay()
hari = 7
switch(hari) {
    case 1: console.log("senin")
    break
    case 2: console.log("selasa")
    break
    case 3: console.log("rabu")
    break
    case 4: console.log("kamis")
    break
    case 5: console.log("jumat")
    break
    case 6: console.log("sabtu")
    break
    case 7: console.log("minggu")
    break
    default: console.log("kiamat")
    break
}

