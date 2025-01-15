let mat = [
    [1,2,3,4],
    [4,5,6,7]
]

let soma = 0

for (i=0; i<mat.length;i++) {
    for (j=0; j<mat[i].length; j++) {
        console.log(`${mat[i][j]}`)
        soma+=mat[i][j]
    }
}

console.log(soma)