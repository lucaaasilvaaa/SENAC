//Declaração das variáveis
var salario = 2000
var reaj1 =  salario * 35 / 100
var reaj2 = salario * 15 / 100

//Exibindo o resultado
if (salario <= 1412) {
    let sal1 = salario + reaj1 
    console.log(`O valor do aumento será igual a R$${reaj1} e o salário será igual a R$${sal1}`)
} else {
    let sal2 = salario + reaj2
    console.log(`O valor do aumento será igual a R$${reaj2} e o salário será igual a R$${sal2}`)
}