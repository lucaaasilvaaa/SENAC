let mat = [
    [1,2],
    [3,4]
]

let soma = 0
let cont = 0

for (i=0; i<mat.length; i++) { //l in mat
    for (j=0; j<mat[i].length; j++) { //c in mat[l]
        soma+= mat[i][j]
        cont++
    }
}

let media = soma/cont
console.log('Soma dos valores: ' + soma)
console.log('Média dos valores: ' + media)