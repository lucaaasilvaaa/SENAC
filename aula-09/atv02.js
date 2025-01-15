let num = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
let soma = 0
let media = 0
for (i=0; i < num.length; i++) {
    soma += num[i] 
}
console.log(`Soma dos números ${soma}`)
media = soma / num.length
//media = soma/i
console.log(`Média aritmética ${media}`)

    