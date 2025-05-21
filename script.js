let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score');
const genCompChoice=()=>{
    let options=["rock","paper","scissors"]
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}
const drawGame=()=>{
    console.log('Game was draw');
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor='#081b31'
}
const showWinner =(userwin)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        console.log("You win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You loose");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }
}
const playGame =(userchoice)=>{
    console.log("User choice: ",userchoice);
    // To generate the computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice: ",compChoice)
    if(userchoice===compChoice){
        drawGame();
    }
    else{
        let userwin =true;
        if(userchoice==='rock'){
            //paper,scissors
            userwin = compChoice==='paper'?false:true
        }
        else if(userchoice=='paper'){
            //rock,scissors
            userwin=compChoice==='scissors'?false:true;
        }
        else{
            //rock,paper
            userwin=compChoice==='rock'?false:true;
        }
        showWinner(userwin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute('id')
        console.log("Choice was clicked",userchoice);
        playGame(userchoice);
    });
});