let startBtn = document.querySelector("#start");
let timeEl = document.querySelector(".time");
let questionEl = document.querySelector(".questions-here")
let secCountdown = 30
let score = 0;
const theCard = document.querySelector(".card")
let multChoiceA = document.querySelector("#btnA")
let multChoiceB = document.querySelector("#btnB")
let multChoiceC = document.querySelector("#btnC")
let multChoiceD = document.querySelector("#btnD")

const theQuestions =[
  {question: "stringA",
    answer: [
      {list: "answer 1a",
        response: true},
      {list: "answer 1b",
        response: false},
      {list: "answer 1c",
        response: false},
      {list: "answer 1d",
        response: false},
    ]},
    {question: "stringB",
    answer: [
      {list: "answer 2a",
        response: true},
      {list: "answer 2b",
        response: false},
      {list: "answer 2c",
        response: false},
      {list: "answer 2d",
        response: false},
    ]},
    {question: "stringB",
    answer: [
      {list: "answer 3a",
        response: true},
      {list: "answer 3b",
        response: false},
      {list: "answer 3c",
        response: false},
      {list: "answer 3d",
        response: false},
    ]},
]

function setTime(){
  let timerInterval = setInterval(function(){
    secCountdown--;
    timeEl.textContent = "Time: " + secCountdown;

    if(secCountdown === 0){
      clearInterval(timerInterval);
      //stop quiz function here
    }
  }, 1000);

  console.log("timer working")
}

startBtn.addEventListener("click", function(){
  theCard.style.display = "block";
  startBtn.style.display = "none";
  timeEl.style.display = "block";
  setTime();
  generateQuiz();
  console.log("start button working")
})

function generateQuiz(){
    
  function showQuestion(){
      let questionIndex = 0
      let listQuestion = theQuestions[questionIndex].question
      let placeQuestion = document.createElement("h4");
      placeQuestion.textContent = listQuestion
      questionEl.appendChild(placeQuestion)
         
    console.log("showQs is connected")
  
    function showAnswers(){
      let btnTextA = document.createElement("p")
      let btnTextB = document.createElement("p")
      let btnTextC = document.createElement("p")
      let btnTextD = document.createElement("p")
      let answerA = theQuestions[questionIndex].answer[0].list
      let answerB = theQuestions[questionIndex].answer[1].list
      let answerC = theQuestions[questionIndex].answer[2].list
      let answerD = theQuestions[questionIndex].answer[3].list
      btnTextA.textContent = answerA
      btnTextB.textContent = answerB
      btnTextC.textContent = answerC
      btnTextD.textContent = answerD
      multChoiceA.appendChild(btnTextA)
      multChoiceB.appendChild(btnTextB)
      multChoiceC.appendChild(btnTextC)
      multChoiceD.appendChild(btnTextD)

      console.log("showAnswers is connected")
  }
  showAnswers()
  }
  showQuestion()
  console.log("genQuiz is connected")
}
  
