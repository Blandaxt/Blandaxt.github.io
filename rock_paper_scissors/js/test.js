// user will choose between 3 buttons
// a second choice will be randomly assigned to computer
// results of choices will be displayed as win loss or tie
//Record each win by user & computer (in dom)

var botScore=0;
var playerScore=0;
var botsWeapon=0;
var playersWeapon=0;


//event listener for rock
document.getElementById("rock").onclick = rock;
//event listener for paper
document.getElementById("paper").onclick = paper;
//event listener for scissors
document.getElementById("scissors").onclick = scissors;
//event listner for lizard
document.getElementById("lizard").onclick = lizard;
//event listner for lizard
document.getElementById("spock") .onclick = spock;


//function if you choose rock
function rock(){
    playersWeapon="rock";
    bostsWeapon= getRandomWeapon()
    checkWhoWon(botsWeapon, "rock");
}

//function if you choose paper
function paper(){
    playersWeapon="paper";
    bostsWeapon= getRandomWeapon()
  checkWhoWon(botsWeapon, "paper");
    //if computer chooses paper
}

//function if you choose scissors
function scissors(){
    playersWeapon="scissors";
    bostsWeapon= getRandomWeapon()
  checkWhoWon(botsWeapon, "scissors");
}
//function if you choose spock
function spock(){
    playersWeapon="spock";
    bostsWeapon= getRandomWeapon()
    checkWhoWon(botsWeapon, "spock");
}


//function if you choose lizard
function lizard(){
    playersWeapon="lizard";
    bostsWeapon= getRandomWeapon()
    checkWhoWon(botsWeapon, "lizard");

}
//function computer chooses rock, paper, or scissors
    //Random choice between rock, paper, or scissors
function getRandomWeapon(){

    var randomNumber=Math.random();
        if(randomNumber<=.2){
            botsWeapon="scissors";
        }

    else if(randomNumber<=.4){
        botsWeapon="paper";
    }

    else if(randomNumber<=.6){
        botsWeapon="spock";
    }

    else if(randomNumber<=.8){
        botsWeapon="lizard";
    }

        else{ botsWeapon="rock";
    }
    return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
    if(botsWeapon==playersWeapon){
                displayPlayersChoice("You choose " + playersWeapon);
                displayBotsChoice("Computer choose " + botsWeapon);
        displayCompleteMessage("There was a Tie");
}
 else if(
         (botsWeapon=="scissors" && playersWeapon=="paper") ||
         (botsWeapon=="scissors" && playersWeapon=="lizard") ||
         (botsWeapon=="paper"    && playersWeapon=="rock") ||
         (botsWeapon=="paper"    && playersWeapon=="spock") ||
         (botsWeapon=="rock"     && playersWeapon=="lizard") ||
         (botsWeapon=="rock"     && playersWeapon=="scissors")||
         (botsWeapon=="spock"    && playersWeapon=="rock") ||
         (botsWeapon=="spock"    && playersWeapon=="rock")   ||
         (botsWeapon=="lizard"   && playersWeapon=="paper") ||
         (botsWeapon=="lizard"   && playersWeapon=="spock")

        ){
              displayPlayersChoice("You choose " + playersWeapon);
              displayBotsChoice("Computer choose " + botsWeapon);
              increaseBotScore();
    }
    else{
              displayPlayersChoice("You choose " + playersWeapon);
              displayBotsChoice("Computer choose " + botsWeapon);
              increasePlayerScore();
    }
    }

//function scoreUp
function increaseBotScore(){
    botScore++;
    document.getElementById("computerScore").innerHTML=botScore;
    displayCompleteMessage("Sorry, you're a loser");
}


function increasePlayerScore(){
    playerScore++;
    document.getElementById("humanScore").innerHTML=playerScore;
    displayCompleteMessage("Winner winner, chicken dinner!");
}


function displayCompleteMessage(msg){
    document.getElementById("status").innerHTML=msg;
}
function displayPlayersChoice(msg){
    document.getElementById("player").innerHTML=msg;
}
function displayBotsChoice(msg){
    document.getElementById("bot").innerHTML=msg;
}



    //Create userScore variable, create cpuScore variable
//If  user wins, increment userScore by 1
//if computer wins, increment cpuScore by 1
//if it is a tie, dont change either cpuScore or userScore
