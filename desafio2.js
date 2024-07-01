// Função para calcular o saldo de partidas e determinar o nível do jogador
function calcularSaldoERank(vitorias, derrotas) {
    // Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Determinar o nível baseado no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    // Retornar o resultado como um objeto
    return { saldoVitorias, nivel };
}

// Função principal para exibir o resultado
function exibirResultado(vitorias, derrotas) {
    const resultado = calcularSaldoERank(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}

// Exemplo de uso
const vitorias = 75; // Número de vitórias
const derrotas = 20; // Número de derrotas

exibirResultado(vitorias, derrotas);
