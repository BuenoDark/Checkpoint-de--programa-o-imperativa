// Microondas
const PIPOCA = 1;
const MACARRAO = 2;
const CARNE = 3;
const FEIJAO = 4;
const BRIGADEIRO = 5;

const TEMPO_PADRAO_PIPOCA = 10;
const TEMPO_PADRAO_MACARRAO = 8;
const TEMPO_PADRAO_CARNE = 15;
const TEMPO_PADRAO_FEIJAO = 12;
const TEMPO_PADRAO_BRIGADEIRO = 8;

const MENSAGEM_TEMPO_INSUFICIENTE = 'Tempo Insuficiente'
const MENSAGEM_QUEIMOU = 'A comida queimou';
const MENSAGEM_EXPLODIU = 'Kabuum';
const MENSAGEM_INEXISTENTE = 'Prato inexistente';
const MENSAGEM_SUCESSO = 'Prato pronto, bom apetite!!!';

//LOGICO

function exibirMensagem(texto) {
    console.log(texto);
}

function fazerPrato(prato, tempo) {
    if (prato === PIPOCA) {
      if (tempo > 2 * TEMPO_PADRAO_PIPOCA && tempo <= 3 * TEMPO_PADRAO_PIPOCA) {
        return exibirMensagem(MENSAGEM_QUEIMOU);
      } else if (tempo < TEMPO_PADRAO_PIPOCA) {
        return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
      } else if (tempo > 3 * TEMPO_PADRAO_PIPOCA) {
        return exibirMensagem(MENSAGEM_EXPLODIU);
      }
    } else if (prato === MACARRAO) {
      if (tempo > 2 * TEMPO_PADRAO_MACARRAO && tempo <= 3 * TEMPO_PADRAO_MACARRAO) {
        return exibirMensagem(MENSAGEM_QUEIMOU);
      } else if (tempo < TEMPO_PADRAO_MACARRAO) {
        return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
      } else if (tempo > 3 * TEMPO_PADRAO_MACARRAO) {
        return exibirMensagem(MENSAGEM_EXPLODIU);
      }
    } else if (prato === CARNE) {
      if (tempo > 2 * TEMPO_PADRAO_CARNE && tempo <= 3 * TEMPO_PADRAO_CARNE) {
        return exibirMensagem(MENSAGEM_QUEIMOU);
      } else if (tempo < TEMPO_PADRAO_CARNE) {
        return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
      } else if (tempo > 3 * TEMPO_PADRAO_CARNE) {
        return exibirMensagem(MENSAGEM_EXPLODIU);
      }
    } else if (prato === FEIJAO) {
      if (tempo > 2 * TEMPO_PADRAO_FEIJAO && tempo <= 3 * TEMPO_PADRAO_FEIJAO) {
        return exibirMensagem(MENSAGEM_QUEIMOU)
      } else if (tempo < TEMPO_PADRAO_FEIJAO) {
        return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
      } else if (tempo > 3 * TEMPO_PADRAO_FEIJAO) {
        return exibirMensagem(MENSAGEM_EXPLODIU);
      }
    } else if (prato === BRIGADEIRO) {
      if (tempo > 2 * TEMPO_PADRAO_BRIGADEIRO && tempo <= 3 * TEMPO_PADRAO_BRIGADEIRO) {
        return exibirMensagem(MENSAGEM_QUEIMOU);
      } else if (tempo < TEMPO_PADRAO_BRIGADEIRO) {
        return exibirMensagem(MENSAGEM_TEMPO_INSUFICIENTE);
      } else if (tempo > 3 * TEMPO_PADRAO_BRIGADEIRO) {
        return exibirMensagem(MENSAGEM_EXPLODIU);
      }
    } else {
      return exibirMensagem(MENSAGEM_INEXISTENTE);
    }
  
    return exibirMensagem(MENSAGEM_SUCESSO);
  }

// Usuario

//Prato com tempo correto
fazerPrato(CARNE, TEMPO_PADRAO_CARNE);

//PRATO Existente com tempo maior que o dobro
fazerPrato(CARNE, TEMPO_PADRAO_CARNE + 20);

//PRATO Existente com tempo maior que o triplo
fazerPrato(CARNE, TEMPO_PADRAO_CARNE + 25);

//Prato Inexistente
fazerPrato()
