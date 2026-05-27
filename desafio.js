const aluno = "Eduardo";
let idade = 19;
const email = "eduardo77.gmail.com";
const curso = "esportes";
const desempenhoDoAluno = "Ensino fundamental completo, Ensino médio completo e notas acima das médias";

let trabalhoNoInicioDoAno = 1.6
let provaNoInicioDoAno = (3.0 + 4.0);
let notasInicioDoAno = 8.6;

let trabalhoNoMeioDoAno = 1.5
let provaNoMeioDoAno = (2.5 + 3.0);
let notasMeioDoAno = 7.0;

let trabalhoNoFinalDoAno = 1.0;
let provaNoFinalDoANo = (3.1 + 5.0);
let notasFinalDoAno = 9.1;

let notaTotal = (notasInicioDoAno + notasMeioDoAno + notasFinalDoAno) / 3;


let diferencaNota = (notasFinalDoAno - notasMeioDoAno);
let notasDeclaradas = "A maior nota dele foi no final do ano de 91 e a menor nota dele foi de 70, a diferença de notas foi:";

let frequêcia = 94;

console.log(`O aluno ${aluno} tem ${idade} anos, ele faz o curso de ${curso} e o desempenho dele escolar foi de: ${desempenhoDoAluno}`);
console.log(`${notasDeclaradas} ${diferencaNota}`);
console.log(`ele teve a frequência de ${frequêcia} e teve a média de ${notaTotal}`);