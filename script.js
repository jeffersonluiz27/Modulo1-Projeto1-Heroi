/**
 *
 * Projeto 1 do Modulo 1 - A Jornada do Heroi!!
 *
 */

// Chamada do prompt
const prompt = require('prompt-sync')();

// Declarando Variaveis Principais
var answersY = 0; //Respostas SIM
var question; //Perguntas

// Apresentando Background da história
console.log();
console.log(`
Você é um personagem de uma história em quadrinhos,
mas você não é o personagem principal.
Você então decide se tornar o herói da história.
Percorre uma longa jornada enfrentando diversos desafios
e luta contra diversos personagens,
para então conseguir chegar na capa
e colocar o seu nome no título da história.\n
`);

// Instrução
console.log(`
Responda as perguntas a seguir para descobrir se você chegou 
no seu objetivo. Use (S) para Sim e (N) para Não.\n
`);

// Pergunta 1
question = '';                                 // Zerando a variavel
while (question != 'S' && question != 'N') {   // Loop exibe a pergunta até o usuario digitar uma opção válida
  question = prompt(
    'Você encontrou o número da página em que você aparece? (S/N): '
  ).toUpperCase();                             // Convertendo a entrada para maiuscula
  if (question != 'S' && question != 'N') {    // Verificando a entrada e exibindo erro se não corresponder como o esperado 
    console.log('Opção invalida! Por favor escolha uma opção válida!');
  }
}

if (question == 'S') {                         // Verifica se o usuario escolheu SIM e contabiliza
  answersY = answersY + 1;
}

//Pergunta 2
question = ''; // Zerando a variavel
while (question != 'S' && question != 'N') {
  question = prompt(
    'Você identificou em que direção fica a capa? (S/N): '
  ).toUpperCase();
  if (question != 'S' && question != 'N') {
    console.log('Opção invalida! Por favor escolha uma opção válida!');
  }
}

if (question == 'S') {
  answersY = answersY + 1;
}

//Pergunta 3
question = '';
while (question != 'S' && question != 'N') {
  question = prompt(
    'Você descobriu como saltar as páginas? (S/N): '
  ).toUpperCase();
  if (question != 'S' && question != 'N') {
    console.log('Opção invalida! Por favor escolha uma opção válida!');
  }
}

if (question == 'S') {
  answersY = answersY + 1;
}

//Pergunta 4
question = '';
while (question != 'S' && question != 'N') {
  question = prompt(
    'Você descobriu quem são seus aliados? (S/N): '
  ).toUpperCase();
  if (question != 'S' && question != 'N') {
    console.log('Opção invalida! Por favor escolha uma opção válida!');
  }
}

if (question == 'S') {
  answersY = answersY + 1;
}

//Pergunta 5
question = '';
while (question != 'S' && question != 'N') {
  question = prompt('Você lembrou de pegar um pincel? (S/N): ').toUpperCase();
  if (question != 'S' && question != 'N') {
    console.log('Opção invalida! Por favor escolha uma opção válida!');
  }
}

if (question == 'S') {
  answersY = answersY + 1;
}

//Pergunta 6
question = '';
while (question != 'S' && question != 'N') {
  question = prompt('Você encontrou o frasco de tinta? (S/N): ').toUpperCase();
  if (question != 'S' && question != 'N') {
    console.log('Opção invalida! Por favor escolha uma opção válida!');
  }
}

if (question == 'S') {
  answersY = answersY + 1;
}
console.log();

// Exibindo os resultados
if (answersY == 0) {
  console.log('Que pena! Você falhou!! \nE ainda foi apagado da história!');
} else if (answersY <= 2) {
  console.log(
    'Que pena! Você falhou!!  \nMas felizmente você se safou de ser apagado!'
  );
} else if (answersY <= 4) {
  console.log(
    'Ops!! Você quase conseguiu! \nMas o autor te descobriu antes de você chegar lá!'
  );
} else if (answersY == 5) {
  console.log(
    'Você conseguiu! \nFoi sofrido chegar até aqui, mas dava pra fazer melhor!!'
  );
} else if (answersY == 6) {
  console.log(
    'Parabéns!! \nVocê alcançou seu objetivo com perfeição. \nForam tão notáveis seus feitos, \nque o autor decidiu fazer uma serie de histórias sobre você!!!'
  );
} else {
  console.log('Ops! Algo Deu Errado');
}
console.log('');
