var idade = 4
console.log(`O nadador tem ${idade} anos de idade`)

if (idade >= 5 && idade <= 7) {
    console.log("Infantil A")
} else if (idade >= 8 && idade <= 10) {
    console.log("Infantil B")
} else if (idade >= 11 && idade <= 13) {
    console.log("Juvenil A")
} else if (idade >= 14 && idade <= 17) {
    console.log("Juvenil B")
} else if (idade >= 18) {
    console.log("Adulto")
} else {
    console.log("Idade fora do intervalo")
}