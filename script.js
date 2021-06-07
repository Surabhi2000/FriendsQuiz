const quizData = [
    {
        question: "The series Friends is set in which city?",
        a: "Los Angeles",
        b: "New York City",
        c: "Miami",
        d: "Seattle",
        correct: "b",
    },
    {
        question: "Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?",
        a: "France",
        b: "Italy",
        c: "England",
        d: "Greece",
        correct: "b",
    },
    {
        question: "What’s the name of the 1950s-themed diner where Monica worked as a waitress?",
        a: "Marilyn & Audrey",
        b: "Twilight Galaxy",
        c: "Moondance Diner",
        d: "Marvin’s",
        correct: "c",
    },
    {
        question: "What’s the name of Janice’s first husband?",
        a: "Gary Litman",
        b: "Sid Goralnik",
        c: "Rob Bailystock",
        d: "Nick Layster",
        correct: "a",
    },
    {
        question: "What is Chandler’s middle name?",
        a: "Muriel",
        b: "Jason",
        c: "Kim",
        d: "Zachary",
        correct: "a",
    },
    {
        question: "What kind of uniform does Joey wear to Monica and Chandler’s wedding?",
        a: "Chef",
        b: "Soldier",
        c: "Fire fighter",
        d: "A baseball player",
        correct: "b",
    },
    {
        question: "What is the name of Rachel’s Sphynx cat?",
        a: "Baldy",
        b: "Mrs. Whiskerson",
        c: "Sid",
        d: "Felix",
        correct: "b",
    },
    {
        question: "Who sang the Friends theme?",
        a: "The Banksys",
        b: "The Rembrandts",
        c: "The Constables",
        d: "The Da Vinci Band",
        correct: "b",
    },
    {
        question: "Who was Chandler’s TV magazine always addressed to?",
        a: "Chanandler Bong",
        b: "Chanandler Bang",
        c: "Chanandler Bing",
        d: "Chanandler Beng",
        correct: "a",
    },
    {
        question: " Which cartoon character was on Phoebe’s thermos that Ursula threw under a bus?",
        a: "Pebbles Flintstone",
        b: "Yogi Bear",
        c: "Judy Jetson",
        d: "Bullwinkle",
        correct: "c",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});