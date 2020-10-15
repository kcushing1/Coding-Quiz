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
let btnSelected = document.querySelector(".btn")
let responseMsg = document.querySelector("#responseHere")
let scoreCardForm = document.querySelector(".scorecard")
let accessScoreCard = document.querySelector(".clickscores")
let name = document.querySelector("#name")
let submitBtn = document.querySelector("#submitBtn")

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
    {question: "stringC",
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

    if(secCountdown == 0 || secCountdown < 0){
      clearInterval(timerInterval);
      timeEl.style.display = "none";
      theCard.style.display = "none"
      window.location.href="./highscore.html"
    }
  }, 3000);
}

startBtn.addEventListener("click", function(){
  startBtn.style.display = "none";
  timeEl.style.display = "block";
  setTime();
  generateQuiz();
})

function generateQuiz(){
  theCard.style.display = "block";
  //elements that will be manipulated
  let questionIndex = 0 
  let placeQuestion = document.createElement("h4");
  let btnTextA = document.createElement("p")
  let btnTextB = document.createElement("p")
  let btnTextC = document.createElement("p")
  let btnTextD = document.createElement("p")
  let wrongAnswer = document.createElement("p")
  let correctAnswer = document.createElement("p") 

  //view question at top of card
  function showQuestion(){
      let listQuestion = theQuestions[questionIndex].question
      placeQuestion.textContent = listQuestion
      questionEl.appendChild(placeQuestion)
         
    console.log("showQs is connected")
  
    //show answers as buttons
    function showAnswers(){
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
    }

  showAnswers()
  }
  showQuestion()

   //listen for correct answer
   let wrongMessage = function(){
    let wrongText = "Wrong Answer!"
    wrongAnswer.textContent = wrongText
    responseMsg.appendChild(wrongAnswer)

    setTimeout(function(){
      responseMsg.removeChild(wrongAnswer)
    }, 1500)
  }

  let correctMessage = function(){
    let correctText = "Correct Answer!"
    correctAnswer.textContent = correctText
    responseMsg.appendChild(correctAnswer)

    setTimeout(function(){
      responseMsg.removeChild(correctAnswer)
    }, 1500)
  }

    //the chosen answer promps correct or incorrect
  multChoiceA.addEventListener("click", function(){
    if (theQuestions[questionIndex].answer[0].response === false){
      wrongMessage()
      secCountdown -=5
    } else {
      correctMessage()
      score ++
    }
    setTimeout(function(){
      resetCard()
    }, 1500)

  multChoiceB.addEventListener("click", function(){
    if (theQuestions[questionIndex].answer[1].response === false){
      wrongMessage()
      secCountdown -=5
    } else {
      correctMessage()
      score ++
    }   
    setTimeout(function(){
      resetCard()
    }, 1500)
  })

  multChoiceC.addEventListener("click", function(){
    if (theQuestions[questionIndex].answer[2].response === false){
      wrongMessage()
      secCountdown -=5
    } else {
      correctMessage()
      score ++
    }   
    setTimeout(function(){
      resetCard()
    }, 1500)
  })

  multChoiceD.addEventListener("click", function(){
    if (theQuestions[questionIndex].answer[3].response === false){
      wrongMessage()
      secCountdown -=5
    } else {
      correctMessage()
      score ++
    }   
    setTimeout(function(){
      resetCard()
    }, 1500)
  })

  //clear the card so it can reset with next question
  function resetCard(){
      placeQuestion.parentNode.removeChild(placeQuestion)
      btnTextA.parentNode.removeChild(btnTextA)
      btnTextB.parentNode.removeChild(btnTextB)
      btnTextC.parentNode.removeChild(btnTextC)
      btnTextD.parentNode.removeChild(btnTextD)
   
    nextQuestion()
  }

  //pull the next question from theQuestions index and apply to card
  function nextQuestion(){
    questionIndex++
    if (theQuestions.length > questionIndex){
      showQuestion()
    } else {
      quizEnd()
  }
}

  function quizEnd(){
    let finalScore = score
    secCountdown =- secCountdown
    localStorage.setItem("mostRecentScore", finalScore)
    goToScoreCard()
    console.log("quizEnd is connected")
  }

 function goToScoreCard(){
   window.location.href="./highscore.html"
 }

})
}

//see works cited, James Q Quick
//scorecard specific, names in local storage
const highScoresList = document.querySelector("#highScoresList")
let scorePosted = document.getElementById("scorePosted")
const userInitials = form.name
let mostRecentScore = localStorage.getItem("mostRecentScore") || []
scorePosted.innerText = mostRecentScore
const highScores = JSON.parse(localStorage.getItem("highscores"))

submitBtn.addEventListener("click", function(event){
  event.preventDefault()
  let scoreKeep = {
    name : userInitials,
    score : mostRecentScore
  }
  //highScores.push(scoreKeep)

  scoreCard()
  console.log("submit button connected")
  console.log(highScoresList)
})

function scoreCard(){
  let newLi = document.createElement("li")
  newLi.textContent = userInitials + " - " + mostRecentScore
  highScoresList.appendChild(newLi)

}


console.log(userInitials)

