let mat = [
    [3,5,7],
    [1,3,5],
    [2,4,6]
]

let maior = 0
let linha = 0
let coluna = 0

for (i=0; i < mat.length; i++) {
    for (j=0; j < mat[i].length; j++) {
        if (mat[i][j] > maior) {
            maior = mat[i][j]
            linha = [i]
            coluna = [j]
        }
    }
}

console.log(maior)
console.log(`${linha}`)
console.log(`${coluna}`)