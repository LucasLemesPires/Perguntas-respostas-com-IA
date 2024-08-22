const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual método de estudo você prefere para revisar o conteúdo aprendido em sala de aula?",
        alternativas: [
            {
                texto: "Revisar os materiais da aula (anotações, slides, livros).",
                afirmacao: "Você prefere um metodo de estudo mais classico e tradicional."
            },
            {
                texto: "Assistir a vídeos e fazer exercícios práticos.",
                afirmacao: "Você prefere usar de todo o material disponivel, como videos e exercicios online, abranjendo suas possibilidades."
            }
        ]
    },
    {
        enunciado: "Durante o estudo, como você prefere organizar seu tempo?",
        alternativas: [
            {
                texto: "Estudar continuamente por longos períodos, com pausas espaçadas.",
                afirmacao: "Você prefere fazer estudos comtinuos com pausas regulares para fixar e compreender os conteudos."
            },
            {
                texto: "Estudar em blocos curtos e intensos, com pausas frequentes.",
                afirmacao: "Você prefere fazer revisões intensas e frequentes para melhor fixação acompanhado de pausas frequentes para que crie uma importância da informação."
            }
        ]
    },
    {
        enunciado: "Em relação ao ambiente de estudo, o que você considera mais importante?",
        alternativas: [
            {
                texto: "Estar em um local silencioso, sem distrações.",
                afirmacao: "Você prefere ter um ambiem com que possa se comcentrar completamente."
            },
            {
                texto: "Ter música ou algum ruído de fundo para manter a concentração.",
                afirmacao: "Você se sente mais comfortavel com uma musica de sua preferencia e se comcentra mais mesmo com esse ruido."
            }
        ]
    }, {},
   
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
