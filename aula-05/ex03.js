let opcao = 2

console.log("Teste de maioridade" + '\n')
console.log(`1 = Maior de idade
2 = Menor de idade`)

    switch (opcao) {
        case 1: 
            console.log("Maior de idade")
            break
        case 2:
            console.log("Menor de idade")
            break
        default:
            console.log("Opção inválida! Informe 1 para maior de idade ou 2 para menor de idade")
    }