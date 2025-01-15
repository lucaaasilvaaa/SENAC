var n1 = 4
var n2 = 2
var opcao = 3
console.log("Informe 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão!")

switch (opcao) {
    case 1:
        console.log("Soma dos dois números: " + (n1 + n2))
        break
    case 2:
        console.log("Subtração do primeiro pelo segundo: " + (n1 - n2))
        break
    case 3:
        console.log("Multiplicação dos números: " + (n1 * n2))
        break
    case 4:
        console.log("Divisão do primeiro pelo segundo: " + (n1 / n2))
        break
    default:
        console.log("Opção inválida")
}