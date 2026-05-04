//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase){
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
};

const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluida"; //=== igualdade  estrita
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoItem){
    let novoInventario;

    if (acao === "pegar"){
        const inventarioComItemNovo =[inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItemNovo;
    } else if (acao ==="descartar") {
        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
        novoInventario = inventarioAtual;
    }
    return novoInventario; //Retorna a mochila do jogador atualizado

};
const pontosDoJogador = [100, 50, 200, 10];
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log(pontosDoJogador);

const missoes = [
    {nome: "Salvar a aldeia", status:"Concluída"},
    {nome: "Encontrar o mapa", status:"Em andamento"},
    {nome: "Derrotar o Chefe", status:"Falhou"},
    {nome: "Coletar recursos", status:"Concluída"},
];

console.log(missoes);