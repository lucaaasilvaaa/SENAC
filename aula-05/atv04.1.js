var n1 = 4
var n2 = 2
var opcao = 4
var calculo

switch (opcao) {
    case 1:
        calculo = n1 + n2
        console.log(calculo)
        break
    case 2:
        calculo = n1 - n2
        console.log(calculo)
        break
    case 3:
        calculo = n1 * n2
        console.log(calculo)
        break
    case 4:
        calculo = n1 / n2
        console.log(calculo)
        break
    default:
        console.log("Opção inválida")
}
