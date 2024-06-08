const questions = [
    "Telefonou para a vítima?",
    "Esteve no local da ocorrência?",
    "Mora perto da vítima?",
    "Já trabalhou com a vítima?",
    "Devia para a vítima?",
    "Você já teve algum desentendimento com a vítima?",
    "Você já esteve envolvido em algum crime anteriormente?",
    "Você estava sozinho na noite do crime?",
    "Você se encontrou com a vítima no dia do crime?",
    "Você possui alguma chave ou meio de acesso ao local do crime?"
];

let currentQuestionIndex = 0;
let answers = [];

function typeQuestion(question) {
    const questionElement = document.getElementById('question');
    const cursor = document.getElementById('cursor');
    const options = document.getElementById('options');
    questionElement.textContent = '';
    let index = 0;

    const typeInterval = setInterval(() => {
        if (index < question.length) {
            questionElement.textContent += question.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            cursor.style.display = 'none';
            options.style.display = 'block';
        }
    }, 50);
}

function selectAnswer(answer) {
    answers.push(answer);
    const options = document.getElementById('options');
    options.style.display = 'none';
    document.getElementById('cursor').style.display = 'inline-block';

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        typeQuestion(questions[currentQuestionIndex]);
    } else {
        document.getElementById('cursor').style.display = 'none';
        showLoading();
    }
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        classifyUser();
    }, 5000); // 5 segundos de carregamento
}

function classifyUser() {
    let positiveCount = answers.filter(answer => answer === 'Sim').length;
    let result = '';

    if (positiveCount <= 5) {
        result = 'Suspeito';
    } else if (positiveCount <= 8) {
        result = 'Cúmplice';
    } else {
        result = 'Culpado';
    }
    console.log(result);
    localStorage.setItem('resultado', result);
    window.location.href = 'result.html';
}

document.addEventListener('DOMContentLoaded', () => {
    typeQuestion(questions[currentQuestionIndex]);
});
