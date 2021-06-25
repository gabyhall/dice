let welcome = document.getElementById("welcome")
let start = document.getElementById("start")

let roll = document.getElementById("roll")
let score = document.getElementById("score")

let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let win = document.getElementById("win")


start.addEventListener('click', () => {
          start.style.display = 'none'
          roll.style.display = 'block'
});

let diceRoll = () => {
       return Math.ceil(Math.random()*6)
};

function diceDisplay(x) {
   if (x == 1) {
        one.style.display = 'block'
    } else if (x == 2){
        two.style.display = 'block'
    } else if (x == 3){
        three.style.display = 'block'
    } else if (x == 4) {
        four.style.display = 'block'
    } else if (x == 5) {
        five.style.display = 'block'
    } else if (x == 6) {
        six.style.display = 'block'
    }
};

function hideDice(){
    one.style.display = "none"
    two.style.display = "none"
    three.style.display = "none"
    four.style.display = "none"
    five.style.display = "none"
    six.style.display = "none" 
    win.style.display= "none"
}

let runningTotal = 0;

roll.addEventListener('click', () => {
    roll.textContent = "Roll Dice";
    hideDice();
    let diceNum = diceRoll(); 
    diceDisplay(diceNum);
    if (diceNum == 1) {
        score.style.display='block';
        score.textContent=`You lose! Try Again?`; 
        runningTotal = 0;
        roll.textContent = "Restart and Roll";
    } else if (diceNum > 1) {
        runningTotal = runningTotal + diceNum;
        if (runningTotal < 20){
            score.style.display='block';
            score.textContent=`Score: ${runningTotal}`;
        } else {
            score.style.display='block';
            score.textContent=`${runningTotal}. You win!`;
            hideDice();
            win.style.display='block';
            roll.textContent = "Restart and Roll";
            runningTotal = 0;
        }
    } 
});
