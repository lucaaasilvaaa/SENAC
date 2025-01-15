let nome = ['Ana', 'Caike', 'Fabio', 'Julia', 'Paula']
let media = [8,5,9,6,5]

for (i in media) {
    if (media[i] >= 6) {
        console.log(`Aluno(a) ${nome[i]} se encontra dentro da média`)
    }
}