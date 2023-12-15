const questions = [
    {
      title: "1 + 1 bằng bao nhiêu?",
      choices: ["1", "2", "3", "4"],
      type: "single",
      answer: "2",
    },
    {
      title: "Những số nào sau đây là số nguyên tố?",
      choices: ["22", "31", "25", "11"],
      type: "multiple",
      answer: ["31", "11"],
    },
    {
      title: "Căn bậc hai của 81 là bao nhiêu?",
      choices: ["7", "8", "9", "10"],
      type: "single",
      answer: "9",
    },
    {
      title: "15% của 100 bằng bao nhiêu?",
      choices: ["10", "15", "20", "25"],
      type: "single",
      answer: "15",
    },
    {
      title: "Những số nào sau đây chia hết cho 3?",
      choices: ["15", "22", "27", "32"],
      type: "multiple",
      answer: ["15", "27"],
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let yourAnswers = [];
  
  const questionTitleEl = document.getElementById("question");
  const choiceEl = document.querySelector(".choices");
  const btnNext = document.getElementById("btn-next");
  const btnFinish = document.getElementById("btn-finish");
  
  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
  
    questionTitleEl.innerHTML = `Câu hỏi ${currentQuestionIndex + 1}: ${
      currentQuestion.title
    }`;
  
    let choiceHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
      if (questions[currentQuestionIndex].type === "single") {
        choiceHTML += `
              <div class="choice-item">
                <input type="radio" name="choice" id="${
                  index + 1
                }" value="${choice}" />
                <label for="${index + 1}">${choice}</label>
              </div>
      `;
      } else if (questions[currentQuestionIndex].type === "multiple") {
        choiceHTML += `
              <div class="choice-item">
                <input type="checkbox" name="choice" id="${
                  index + 1
                }" value="${choice}" />
                <label for="${index + 1}">${choice}</label>
              </div>
      `;
      }
    });
  
    choiceEl.innerHTML = choiceHTML;
  };
  
  btnNext.addEventListener("click", () => {
    let checkedChoice;
    if (questions[currentQuestionIndex].type === "single") {
      checkedChoice = document.querySelector("input[type=radio]:checked");
      if (!checkedChoice) {
        alert("Bạn chưa chọn đáp án");
        return;
      }
  
      yourAnswers.push(checkedChoice.value);
    } else if (questions[currentQuestionIndex].type === "multiple") {
      checkedChoice = document.querySelectorAll("input[type=checkbox]:checked");
      if (checkedChoice.length === 0) {
        alert("Bạn chưa chọn đáp án");
        return;
      }
  
      const checkedChoiceValues = [];
      checkedChoice.forEach(choice => {
        checkedChoiceValues.push(choice.value);
      });
  
      yourAnswers.push(checkedChoiceValues);
    }
  
    currentQuestionIndex++;
  
    renderQuestion();
  
    if (currentQuestionIndex == questions.length - 1) {
      btnNext.classList.add("hide");
      btnFinish.classList.remove("hide");
    }
  });
  
  btnFinish.addEventListener("click", () => {
    let checkedChoice;
    if (questions[currentQuestionIndex].type === "single") {
      checkedChoice = document.querySelector("input[type=radio]:checked");
  
      if (!checkedChoice) {
        alert("Bạn chưa chọn đáp án");
        return;
      }
      yourAnswers.push(checkedChoice.value);
    } else if (questions[currentQuestionIndex].type === "multiple") {
      checkedChoice = document.querySelectorAll("input[type=checkbox]:checked");
  
      if (checkedChoice.length === 0) {
        alert("Bạn chưa chọn đáp án");
        return;
      }
  
      const checkedChoiceValues = [];
      checkedChoice.forEach(choice => {
        checkedChoiceValues.push(choice.value);
      });
      yourAnswers.push(checkedChoiceValues);
    }
  
    questions.forEach((question, index) => {
      if (question.type === "single") {
        if (question.answer === yourAnswers[index]) {
          score++;
        }
      } else if (question.type === "multiple") {
        const isCorrect = yourAnswers[index].every(answer => {
          return (
            question.answer.includes(answer) &&
            question.answer.length === yourAnswers[index].length
          );
        });
        if (isCorrect) {
          score++;
        }
      }
    });
  
    alert(`Bạn trả lời đúng ${score} / ${questions.length} câu hỏi`);
  });
  
  renderQuestion();