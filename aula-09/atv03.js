let num = [8, 7, 9, 5, 6, 4, 3, 1]
let maior = 0
let menor = 1000

for (i=0; i < num.length; i++) {
    if (num[i] > maior) {
        maior = num[i]
    }
    
    if (num[i] < menor) {
        menor = num[i]
    }
}

console.log(`O maior número é o ${maior} e o menor é ${menor}`)