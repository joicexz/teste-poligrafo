document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const cursor = document.getElementById('cursor');
    const texts = [
        "Uma noite de terror assola o condominio de luxo Torres do Horizonte quando Sofia Mendes e encontrada morta em sua cobertura. A atmosfera de seguranca e tranquilidade e substituida por medo e suspeita.",

        "A policia chega rapidamente e inicia uma investigacao. Voce, um morador do condominio, e trazido para um interrogatorio. Cada olhar e carregado de desconfianca, cada pergunta e uma tentativa de revelar a verdade por tras do crime.",

        "Os corredores elegantes do condominio agora sao palco de um interrogatorio tenso, onde cada resposta pode selar o destino de um suspeito. ",

        "Quem e o verdadeiro assassino entre os moradores? Voce pode provar sua inocencia ou sera pego na teia da suspeita?",

        "Os olhos da lei estao sobre voce. Sera que voce consegue resistir ao interrogatorio e convencer os investigadores de que nao e o responsavel pelo crime?"
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;

    function typeText() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            const currentChar = texts[currentTextIndex].charAt(currentCharIndex);
            textElement.insertBefore(document.createTextNode(currentChar), cursor);
            currentCharIndex++;
            setTimeout(typeText, 80); // Velocidade de digitação
        } else {
            setTimeout(nextParagraph, 1000); // Espera um tempo antes de ir para o próximo parágrafo
        }
    }

    function nextParagraph() {
        currentCharIndex = 0;
        currentTextIndex++;
        if (currentTextIndex < texts.length) {
            textElement.textContent = ''; // Limpa o texto atual
            textElement.appendChild(cursor); // Reposiciona o cursor
            setTimeout(typeText, 100); // Tempo de pausa entre parágrafos
        }
    }

    typeText();

    const btn = document.getElementById('floatingButton');

    btn.addEventListener("click", function () {
        window.location.href = "../HTML/questions.html"
    })
});
