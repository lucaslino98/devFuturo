const numero = 11;

const parOuImpar = new Promise((resolve, reject) => {
    if (numero % 2 == 0) {
        resolve(`Seu número é ${numero}, este é um número par.`);
    } else {
        reject(`Error: número informado é impar`);
    }


});
parOuImpar.then((text) => {
    document.write(text)
})
    .catch((error) => {
        document.write(error)
    })