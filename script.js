/**
 *
 * Projeto 1 do Modulo 1 - A Jornada do Heroi!!
 *
 */

// Chamada do prompt
const prompt = require('prompt-sync')();

// Declarando Variaveis Principais
var answersY; //Respostas SIM
var question; //Perguntas
var newGame;


do {
  answersY = 0;
  newGame = '';

  // Apresentando Background da história
  console.log();
  console.log(`
  Auryon é um personagem de uma história em quadrinhos, mas ele não é o personagem principal.
  O grandioso Lupan é o heroi cujo o nome está na capa, porém Lupan é um heroi que se aproveita 
  da boa vontade das pessoas para conseguir mais glorias. Indignado Auryon deseja fazer alguma 
  coisa para o bem dos outros personagens. Lucius seu melhor amigo disse a Auryon que para se 
  tornar um heroi, ele precisava ter seu nome escrito na capa! Auryon então decide se tornar o 
  herói da história, mas isso não vai ser facil, porque o autor da hitória não pode descobrir 
  o que ele está fazendo. Auryon então percorre uma longa jornada enfrentando diversos desafios 
  e lutando contra diversos personagens, para então conseguir chegar na capa e colocar o seu nome 
  no título da história sem que o autor descubra.\n
  `);

  // Instrução
  console.log(`
  Responda as perguntas a seguir para descobrir se Auryon 
  chegou no seu objetivo. Use (S) para Sim e (N) para Não.\n
  `);

  //Pergunta 1
  question = '';
  do {
    question = prompt(
      '1 - Auryon descobriu como andar entre as páginas? (S/N): '
    ).toUpperCase();
    if (question != 'S' && question != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else if (question == 'S') {
      answersY++;
    }
  } while (question != 'S' && question != 'N');

  //Pergunta 2
  question = '';
  do {
    question = prompt(
      '2 - Auryon descobriu quem são seus aliados? (S/N): '
    ).toUpperCase();
    if (question != 'S' && question != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else if (question == 'S') {
      answersY++;
    }
  } while (question != 'S' && question != 'N');

  //Pergunta 3
  question = '';
  do {
    question = prompt(
      '3 - Auryon conseguiu derrotar Lupan? (S/N): '
    ).toUpperCase();
    if (question != 'S' && question != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else if (question == 'S') {
      answersY++;
    }
  } while (question != 'S' && question != 'N');

  //Pergunta 4
  question = '';
  do {
    question = prompt(
      '4 - Auryon lembrou de pegar um pincel? (S/N): '
    ).toUpperCase();
    if (question != 'S' && question != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else if (question == 'S') {
      answersY++;
    }
  } while (question != 'S' && question != 'N');

  //Pergunta 5
  question = '';
  do {
    question = prompt(
      '5 - Auryon encontrou o frasco de tinta? (S/N): '
    ).toUpperCase();
    if (question != 'S' && question != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else if (question == 'S') {
      answersY++;
    }
  } while (question != 'S' && question != 'N');

  //Pergunta 6
  question = '';
  do {
    question = prompt(
      '6 - Auryon conseguiu se esconder da sentinela? (S/N): '
    ).toUpperCase();
    if (question != 'S' && question != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else if (question == 'S') {
      answersY++;
    }
  } while (question != 'S' && question != 'N');

  console.log();

  // Exibindo os resultados
  if (answersY == 0) {
    console.log('Que pena, Auryon falhou!! \nE ainda foi apagado da história!');
  } else if (answersY <= 2) {
    console.log(
      'Que pena, Auryon falhou!! \nMas felizmente ele se safou de ser apagado! \nO Autor colocou ele na ultima página.'
    );
  } else if (answersY <= 4) {
    console.log(
      'Ops!! Auryon quase conseguiu! \nMas o autor descobriu o que ele estava fazendo \ne impediu Auryon de chagar na capa!'
    );
  } else if (answersY == 5) {
    console.log(
      'Auryon conseguiu! \nFoi sofrido chegar até aqui, mas dava pra fazer melhor! \nO Autor não gostou muito da mudança!'
    );
  } else if (answersY == 6) {
    console.log(
      'Parabéns!! \nAuryon alcançou seu objetivo com perfeição. \nForam tão notáveis seus feitos, \nque o autor decidiu fazer uma série de histórias sobre ele!!!'
    );
  }
  console.log('');

  do {
    newGame = prompt(
      'Quer jogar de novo?: Use (S) para Sim e (N) para Não (SAIR). '
    ).toUpperCase();
    if (newGame != 'S' && newGame != 'N') {
      console.log('\nOpção invalida! Use (S) para Sim e (N) para Não.\n');
    } else{
      if (newGame == `S`) {
        console.clear();
        console.log();
      } else {
        console.clear();
        console.log('Obrigado por jogar!');
        console.log();
      }
    }
  } while (newGame != 'S' && newGame != 'N');
} while (newGame == 'S');