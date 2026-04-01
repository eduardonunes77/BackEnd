const idade = 23;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

// Operador E
const podeDirigir = maiorDeIdade && possuiCNH;
console.log("Pode dirigir? " + podeDirigir);

//Operador OU
const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log("Pode viajar sozinho? " +  podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhamento = !maiorDeIdade;
console.log("Precisa de acompanhante? " + precisaDeAcompanhamento);