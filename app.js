alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
let chute = prompt('Escolha um número entre 1 e 10');

console.log(numeroSecreto)

//se o chute fo igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
}else{
    alert('Você erru :(')
}