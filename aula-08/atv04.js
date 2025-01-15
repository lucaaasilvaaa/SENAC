let nome = "Lucas"
let cidade = "São Paulo"

function usuario (n, c) {
    if (c == "Rio de Janeiro") {
        console.log(`${n}, Seja Bem-vindo à Cidade Maravilhosa`)
    } else {
        console.log(`Nome: ${n}
Cidade: ${c}`)
    }
}

usuario (nome, cidade)