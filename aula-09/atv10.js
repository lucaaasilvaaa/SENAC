let nome = ['Ana', 'Bia', 'Cadu', 'Jose', 'Rita']
let tel = ['2222-2222', '2233-4455', '2345-6789', '2222-5555', '2213-0123']
let cidade = ['Campo Grande', 'Caju', 'Campo Grande', 'Olaria', 'Bonsucesso']

for (i in nome) {
    if (cidade[i] == 'Campo Grande') {
        console.log(`${nome[i]} com telefone ${tel[i]} mora em Campo Grande`)
    }
}