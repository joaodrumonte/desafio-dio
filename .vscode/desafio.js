//Declaração de variáveis
let nomeHeroi = "Igris" 
let xpHeroi="20000"

//Variável para armazenar o nível do herói
let nivelHeroi =""

//Estrutura de Decisão para determinar o nível do heroi
if (xpHeroi <1000 ) {
    nivelHeroi = "Ferro"
} else if (xpHeroi < 2001 ) {
    nivelHeroi = "Bronze"
}else if (xpHeroi < 5001 ) {
    nivelHeroi = "Prata"
}else if (xpHeroi < 7001 ) {
    nivelHeroi = "Ouro"
}else if (xpHeroi < 8001 ) {
    nivelHeroi = "Platina"
}else if (xpHeroi < 9001 ) {
    nivelHeroi = "Ascendente"
}else if (xpHeroi < 10001 ) {
    nivelHeroi = "Imortal"
}else if (xpHeroi > 10000 ) {
    nivelHeroi = "Radiante"
}



console.log ("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)