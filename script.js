const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta Principal",
        alternativas: [
            {
                texto: "enunciado da pergunta",
                afirmacao: "afirmação dependendo da pergunta"
            },
            {
                texto: "Texto 2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 2",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 2"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 3",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
},
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
