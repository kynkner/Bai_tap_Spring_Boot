const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];
// sự kiện 
document.getElementById('btn').addEventListener('click', randomizeAnswers);

function randomizeAnswers() {
  // xóa nội dung
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = ''; 
  // tạo phần tử
    quizes.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.classList.add('quiz-item');

        const quizTitle = document.createElement('h3');
        quizTitle.textContent = `Câu ${quiz.id} : ${quiz.question}`;
        quizItem.appendChild(quizTitle);

        const shuffledAnswers = shuffleArray(quiz.answers);

        shuffledAnswers.forEach(answer => {
            const answerItem = document.createElement('div');
            answerItem.classList.add('quiz-answer-item');
          // đáp án
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question_${quiz.id}`; 
            radioInput.value = answer;

            const label = document.createElement('label');
            label.textContent = answer;

            answerItem.appendChild(radioInput);
            answerItem.appendChild(label);

            quizItem.appendChild(answerItem);
        });

        quizContainer.appendChild(quizItem);
    });
}
// random
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
