function infor(obj){
const nome = prompt("Qual seu nome?");
const idade = prompt("Qual sua idade?");
const email = prompt("Qual seu Email?");
const usuario = {
    nome: nome,
    idade: idade,
    email: email
}
localStorage.setItem('user', JSON.stringify(usuario));
console.log("Seus dados foram salvos com sucesso!")
}

infor()