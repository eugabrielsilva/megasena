// Elementos
let divJogos = document.getElementById('jogos');
let inpQtd = document.getElementById('qtd');

/**
 * Limpa a tabela de resultados.
 */
function limpar() {
    divJogos.innerHTML = '';
}

/**
 * Gera todos os jogos.
 */
function gerarJogos() {
    // Prepara para armazenar os resultados
    let jogos = [];

    // Obtém a quantidade de jogos a ser gerada
    let qtd = inpQtd.value;

    // Gera um novo jogo único e adiciona aos resultados
    for(let i = 0; i < qtd; i++) {
        let jogo;

        do {
            jogo = gerarJogo();
        } while(jogos.includes(jogo))

        jogos.push(jogo);
    }

    // Limpa a tabela de resultados
    limpar();

    // Cria os elementos na tabela de resultados
    jogos.forEach((jogo, key) => {
        let element = document.createElement('div');
        let count = document.createElement('i');
        count.innerHTML = key + 1;
        element.appendChild(count);

        jogo.forEach(num => {
            let span = document.createElement('span');
            span.innerHTML = num;
            element.appendChild(span);
        });

        divJogos.appendChild(element);
    });
}

/**
 * Gera um único jogo.
 */
function gerarJogo() {
    // Prepara para armazenar os resultados
    let jogo = [];

    // Gera um número aleatório de 1 a 6 que ainda não foi sorteado
    for(let num = 0; num < 6; num++) {
        let resultado;

        do {
            resultado = Math.floor(Math.random() * 60) + 1;
            resultado = resultado.toString().padStart(2, '0');
        } while(jogo.includes(resultado))

        jogo.push(resultado);
    }

    // Retorna o jogo gerado
    return jogo.sort();
}

/**
 * Gera os jogos ao pressionar a tecla ENTER.
 */
function enter(event) {
    if(event.keyCode === 13) {
        gerarJogos();
    }
}