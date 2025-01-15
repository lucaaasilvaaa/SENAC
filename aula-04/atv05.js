//Declaração das variáveis
var peso = 92
var altura = 1.72
var imc = peso / altura ** 2
console.log(`Seu i.m.c é: ${imc}`)

//Exibindo o resultado
if (imc > 25) {
    console.log(`Acima do Peso Ideal`)
} else {
    console.log(`Peso Ok`)
}