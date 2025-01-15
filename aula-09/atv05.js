let num = [2, 15, 3, 37, 4, 29, 5]
let par = []
let impar = []

for (i=0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        par++
        console.log(`O número ${num[i]} é par`)
    } else if (num[i] % 2 === 1) {
        impar++
        console.log(`O número ${num[i]} é ímpar`)
    } 
}

console.log(`Quantidade de números pares: ${par}
Quantidade de números ímpares: ${impar}`)
