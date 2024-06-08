document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const cursor = document.getElementById('cursor');

    //DESCRIÇÃO
    const texts = [
        "Uma noite de terror assola o condomínio de luxo Torres do Horizonte quando Sofia Mendes é encontrada morta em sua cobertura. A atmosfera de segurança e tranquilidade é substituída por medo e suspeita.",

        "A polícia chega rapidamente e inicia uma investigação. Você, um morador do condomínio, é trazido para um interrogatório. Cada olhar é carregado de desconfiança, cada pergunta é uma tentativa de revelar a verdade por trás do crime.",

        "Os corredores elegantes do condomínio agora são palco de um interrogatório tenso, onde cada resposta pode selar o destino de um suspeito.",

        "Quem é o verdadeiro assassino entre os moradores? Você pode provar sua inocência ou será pego na teia da suspeita?",

        "Os olhos da lei estão sobre você. Será que você consegue resistir ao interrogatório e convencer os investigadores de que não e o responsável pelo crime?"
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;

    function typeText() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            const currentChar = texts[currentTextIndex].charAt(currentCharIndex);
            textElement.insertBefore(document.createTextNode(currentChar), cursor);
            currentCharIndex++;
            setTimeout(typeText, 80);
        } else {
            setTimeout(nextParagraph, 1000);
        }
    }

    //PROXIMO PARÁGRAFO
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

    //TROCA DE PÁGINA
    const btn = document.getElementById('floatingButton');
    btn.addEventListener("click", function () {
        window.location.href = "../HTML/questions.html"
    })
});
