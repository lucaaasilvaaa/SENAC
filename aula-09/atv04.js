let num = [2, 15, 3, 37, 4, 29, 5, 33, 7, 45]
let maior = 0

for (i=0; i < num.length; i++) {
    if (num[i] > 10) {
        console.log(`O número ${num[i]} é maior que 10`)
        maior++
    }
}

console.log(`Quantidade de números maiores que 10: ${maior}`)
