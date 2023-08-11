function Start(){
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const idade = document.getElementById("idade");
const peso = document.getElementById("peso");
const botao = document.getElementById ("data-input");
getInput(botao, nome, sobrenome, idade, peso);
}

function getInput(botao, nome, sobrenome, idade, peso){
    let pessoas = [];
    botao.addEventListener('click', function(){
        const Obj = Constructor(nome, sobrenome, idade, peso);
        pessoas.push(Obj);
        console.log(pessoas);
        alert("enviado!");
        Reset(nome, sobrenome, idade, peso)
    })
}

function Constructor(nome, sobrenome, idade, peso){
    return{
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value,
        peso: peso.value,
    }
}

function Reset (nome, sobrenome, idade, peso){
    nome.value = '';
    sobrenome.value = '';
    idade.value = '';
    peso.value = '';
}

Start();




