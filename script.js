//grabbing all my HTML elements
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
let nameBtn = document.querySelector("#nameBtn")

const theQuestions =[
  {question: "In what year was the first computer virus created?",
    answer: [
      {list: "1983",
        response: true},
      {list: "1892",
        response: false},
      {list: "1946",
        response: false},
      {list: "1963",
        response: false},
    ]},
    {question: "What does 'www' in a url stand for?",
    answer: [
      {list: "Women's Worldwide Wrestling",
        response: false},
      {list: "Wicked Wild Wonders",
        response: false},
      {list: "World Wide Web",
        response: true},
      {list: "Wonderful Witch of the West",
        response: false},
    ]},
    {question: "What is currently the most popular coding language in use?",
    answer: [
      {list: "JavaScript",
        response: true},
      {list: "Ruby on Rails",
        response: false},
      {list: "Python",
        response: false},
      {list: "cursive",
        response: false},
    ]},
    {question: "In what year was the first computer game created?",
    answer: [
      {list: "1974",
        response: false},
      {list: "1961",
        response: true},
      {list: "2002",
        response: false},
      {list: "1928",
        response: false},
    ]},
    {question: "Why are the names Java and JavaScript so similar?",
    answer: [
      {list: "Because the creators of JavaScript liked playing practical jokes on people",
        response: false},
      {list: "Because they were trying to out-compete each other",
        response: false},
      {list: "Because the creators of both really liked cofee",
        response: false},
      {list: "Because Java was a successful language and JavaScript wanted to ride the waves of their marketing success",
        response: true},
    ]},
    {question: "What does CSS stand for?",
    answer: [
      {list: "Cooling and Sanitation Station",
        response: false},
      {list: "Coding Shock Syndrome",
        response: false},
      {list: "Cascading Style Sheets",
        response: true},
      {list: "'Cause i Said So",
        response: false},
    ]},
    {question: "What goes between <head> tags in HTML?",
    answer: [
      {list: "a brain",
        response: false},
      {list: "the Wizard of Oz",
        response: false},
      {list: "metadata",
        response: true},
      {list: "the body",
        response: false},
    ]},
    {question: "What defines a variable in JavaScript?",
    answer: [
      {list: "fun, get, con",
        response: false},
      {list: "let, load, so",
        response: false},
      {list: "var, mar, par",
        response: false},
      {list: "var, let, const",
        response: true},
    ]},
    {question: "Why was Javascrip created?",
    answer: [
      {list: "To produce dynamic web pages",
        response: true},
      {list: "To confuse unsuspecting programming students",
        response: false},
      {list: "To write laws regarding coffee production",
        response: false},
      {list: "To sadden dogs everywhere because their humans would like the internet too much to take them for walks",
        response: false},
    ]},
]

//start the timer
function setTime(){
  let timerInterval = setInterval(function(){
    secCountdown--;
    timeEl.textContent = "Time: " + secCountdown;

    //time can be negative if all questions answered wrong
    if(secCountdown == 0 || secCountdown < 0){
      clearInterval(timerInterval);
      timeEl.style.display = "none";
      theCard.style.display = "none"
      window.location.href="./highscore.html"
    }
  }, 3000);//set for 30 sec
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

    //have the message disappear when the next question is displayed
    setTimeout(function(){
      responseMsg.removeChild(wrongAnswer)
    }, 1000)
  }

  let correctMessage = function(){
    let correctText = "Correct Answer!"
    correctAnswer.textContent = correctText
    responseMsg.appendChild(correctAnswer)

    //have the message disappear when the next question is displayed
    setTimeout(function(){
      responseMsg.removeChild(correctAnswer)
    }, 1000)
  }

    //the chosen answer promps correct or incorrect
    //5 sec subtracted from timer if wrong
    //score increased by 1 if correct
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
    }, 1000)

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
    }, 1000)
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
    }, 1000)
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
    }, 1000)
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
    secCountdown =- secCountdown
    let finalScore = score
    JSON.stringify(localStorage.setItem("mostRecentScore", finalScore))

    goToScoreCard()
  }

  //open the highscore window
 function goToScoreCard(){
   window.location.href="./highscore.html" 
 }

})
}

//scorecard specific


function displayUserScore(){
  let finalScore = JSON.parse(localStorage.getItem("mostRecentScore"))
  //post the score to page
  let scorePostedh1 = document.createElement("h1")
  let scorePostedHere = document.querySelector("#scorePosted")
  scorePostedh1.innerText = "" + finalScore + ""
  scorePostedHere.appendChild(scorePostedh1)
}
displayUserScore()

nameBtn.addEventListener("click", function(event){
  event.preventDefault()
  let finalScore = JSON.parse(localStorage.getItem("mostRecentScore"))
  const userInitials = document.getElementById("name").value
  scoreKeep = []
  let newestScore = {
    user: userInitials,
    score: finalScore
  }
  scoreKeep.push(newestScore)

 
  addToScoreCard()
  
  
  })

function addToScoreCard(){
      let newLi = document.createElement("li")
      let inputUserInitials = scoreKeep[scoreKeep.length - 1].user
      let inputUserScore = scoreKeep[scoreKeep.length - 1].score
      newLi.textContent = inputUserInitials + " : " + inputUserScore
      highScoresList.appendChild(newLi)
}

