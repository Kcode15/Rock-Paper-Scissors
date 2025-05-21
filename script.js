let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorepara = document.querySelector('#user-score');
const compscorepara = document.querySelector('#comp-score');

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const resetGame = () => {
    console.log("clicked");
    compscore = 0;
    userscore = 0;
    userScorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
}

const drawGame = () => {
    console.log('Game was draw');
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        userScorepara.innerText = userscore;
        userScorepara.classList.add("score-pop");
        console.log("You win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        compscorepara.classList.add("score-pop");
        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }

    // Remove pop class after animation completes
    setTimeout(() => {
        userScorepara.classList.remove("score-pop");
        compscorepara.classList.remove("score-pop");
    }, 400);
}

const playGame = (userchoice) => {
    const compChoice = genCompChoice();
    console.log("User choice: ", userchoice);
    console.log("Computer choice: ", compChoice);

    const userDiv = document.getElementById(userchoice);
    const compDiv = document.getElementById(compChoice);

    // Add shake animation
    userDiv.classList.add("shake");
    compDiv.classList.add("shake");

    setTimeout(() => {
        userDiv.classList.remove("shake");
        compDiv.classList.remove("shake");

        if (userchoice === compChoice) {
            drawGame();
        } else {
            let userwin = true;
            if (userchoice === 'rock') {
                userwin = compChoice === 'paper' ? false : true;
            } else if (userchoice === 'paper') {
                userwin = compChoice === 'scissors' ? false : true;
            } else {
                userwin = compChoice === 'rock' ? false : true;
            }
            showWinner(userwin);
        }
    }, 400); // Delay matches animation duration
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
        playGame(userchoice);
    });
});
