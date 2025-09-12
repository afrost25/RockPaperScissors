const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

playGame();

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

function getHumanChoice()
{
    return prompt(`Enter ${ROCK}, ${PAPER}, or ${SCISSORS}`);
}

function humanWin(humanChoice, computerChoice)
{
    console.log(`You win. ${humanChoice} beats ${computerChoice}`);
    return 1;
}

function computerWin(humanChoice, computerChoice)
{
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
    return -1;
}

function humanComputerTie(humanChoice, computerChoice)
{
    console.log(`It was a tie. ${humanChoice} and ${computerChoice}`);
}

function playRound(humanChoice, computerChoice)
{
    let scoreDelta = 0;

    if(humanChoice === ROCK && computerChoice === SCISSORS
        || humanChoice === PAPER && computerChoice === ROCK
        || humanChoice === SCISSORS && computerChoice === PAPER)
    {
        scoreDelta = humanWin(humanChoice, computerChoice);
    }
    else if(computerChoice === PAPER && humanChoice === ROCK 
        || computerChoice === SCISSORS && humanChoice === PAPER
        || computerChoice === ROCK && humanChoice === SCISSORS)
    {
        scoreDelta = computerWin(humanChoice, computerChoice);
    }
    else
    {
        humanComputerTie(humanChoice, computerChoice);
    }

    return scoreDelta;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for(let round = 0; round < 5; round++)
    {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();

        let playerDeltaScore = playRound(humanChoice, computerChoice);

        if(playerDeltaScore > 0)
        {
            humanScore +=  playerDeltaScore;
        }
        else
        {
            computerScore -= playerDeltaScore;
        }
    }

    if(humanScore > computerScore)
    {
        console.log('You Win!');
    }
    else if(computerScore > humanScore)
    {
        console.log('You lose!');
    }
    else
    {
        console.log('It was a tie!');
    }

    console.log(`Final Score: Human: ${humanScore} Computer: ${computerScore}`)
}

