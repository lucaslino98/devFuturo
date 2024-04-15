function getUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nome: "Lucas",
                idade: 26,
                Email: "Lucaslino.martins@hotmail.com",
            });
        }, 2000);
    });
}

async function exibirUserInfo() {
    const userInfo = await getUserInfo()
    console.log(`Informações do Usuário`, userInfo);
}

exibirUserInfo()