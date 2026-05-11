//1. Declare 5 variáveis para representar uma viagem (destino, nome do viajante, cidade de origem, duração em dias e meio de transporte)
//2. Organizar uma forma de imprimir esses valores com interpolação ou saída individual

const destino = "Ponta Grossa";
const nomeDoViajante = "Eduardo";
const cidadeOrigem = "Curitiba";
let duracao = 2;
let transporte = "carro";

console.log(`O viajante ${nomeDoViajante} deseja viajar de ${cidadeOrigem} até ${destino}, de ${transporte} em um percurso de ${duracao} horas.`);

let custoDaPassagem = 50;
const hospedagem = 65;

console.log (`Ele vai ter alguns custos nessa viagem como a passagem de ${custoDaPassagem} Reais e a hospedagem ${hospedagem} Reais`);