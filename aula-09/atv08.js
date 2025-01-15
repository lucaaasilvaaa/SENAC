let nome = ['Ana', 'Caike', 'Fabio', 'Julia', 'Paula', 'Bia', 'Maria', 'Artur', 'Gabriel', 'João']
let idade = [20, 18, 33, 6, 10, 26, 18, 14, 25, 24]
let menorId = 200
let maisNovo = ''

for (i in idade) {
    if (idade[i] < menorId) {
        menorId = idade[i]
        maisNovo= nome[i]
    }
}

console.log(`O usuário mais novo é ${maisNovo} possuindo a idade ${menorId}`)
