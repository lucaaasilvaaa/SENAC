let n1 = 8
let n2 = 2  
function escolha (opçao) {
    switch (opçao) {
        case 1:
            var n3 = n1 * n2
            console.log("O produto entre os dois números é igual a " + n3)
            break
        case 2:
            var n3 = n1 - n2
            console.log("O resultado da subtração dos números é igual a " + n3)
            break
        case 3:
            var n3 = n1 ** 3
            console.log("O primeiro número ao cubo é igual a " + n3)
            break
        default:
            console.log("Opção inválida, escolha uma opção de 1 a 3")
    }
}

let opc = 1
escolha (opc)