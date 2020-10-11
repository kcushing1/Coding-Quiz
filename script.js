let startBtn = document.querySelector("#start");
let timeEl = document.querySelector(".time");
let secCountdown = 30

let score = 0;
const modal = document.querySelector("#modal")


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
  modal.style.display = "block";
  startBtn.style.display = "none";
  setTime();
  console.log("working start button")
})

//if wrong, timer = -5
//else, score++