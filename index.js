const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice()
{
    let result = ROCK;
    let randNum = Math.floor(Math.random() * 3 + 1);

    if(randNum === 1)
    {
        result = SCISSORS;
    }
    else if(randNum === 2)
    {
        result = PAPER;
    }

    return result
}

function playRound(humanChoice, computerChoice)
{
    let scoreDelta = 0;

    if(humanChoice === ROCK && computerChoice === SCISSORS
        || humanChoice === PAPER && computerChoice === ROCK
        || humanChoice === SCISSORS && computerChoice === PAPER)
    {
        scoreDelta = 1;
    }
    else if(computerChoice === PAPER && humanChoice === ROCK 
        || computerChoice === SCISSORS && humanChoice === PAPER
        || computerChoice === ROCK && humanChoice === SCISSORS)
    {
        scoreDelta = -1;
    }

    return scoreDelta;
}

let humanScore = 0;
let computerScore = 0;

function handlePlayerChoice(humanChoice) {
    let computerChoice = getComputerChoice();
    let playerDelta = playRound(humanChoice, computerChoice);

    if(playerDelta > 0)
    {
        humanScore += playerDelta;
        updateDisplay("You Win", `${humanChoice} beats ${computerChoice}. Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if(playerDelta < 0)
    {
        computerScore -= playerDelta;
        updateDisplay("You Lose", `${computerChoice} beats ${humanChoice}. Human: ${humanScore} Computer: ${computerScore}`);
    }
    else
    {
        updateDisplay("It was a tie", `${computerChoice} and ${humanChoice}. Human: ${humanScore} Computer: ${computerScore}`);
    } 
    
    if(humanScore === 5 || computerScore === 5)
    {
        let finalResult;
        if(humanScore > computerScore)
        {
            finalResult = 'You Win!';
        }
        else if(computerScore > humanScore)
        {
            finalResult = 'You lose!';
        }
        else
        {
            finalResult = 'It was a tie!';
        }
        
        updateDisplay(finalResult, `Final Score: Human: ${humanScore} Computer: ${computerScore}`);
    }
}

function updateDisplay(resultText, scoreText) {
    const result = document.querySelector(".gameStats .result");
    const score = document.querySelector(".gameStats .score");
    result.textContent = resultText;
    score.textContent = scoreText;
}

function setupEventListeners() {
    const choiceButton = document.querySelectorAll('.playerSelection');
    
    for(let button of Array.from(choiceButton))
    {
        button.addEventListener('click', () => {
            let humanChoice = button.textContent.toLocaleLowerCase();
            handlePlayerChoice(humanChoice);
        });
    }
}

function playGame() {
    setupEventListeners();
}

playGame();