let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

//draw game
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor = "black"

}



//show result;
const showwinner=(userwin)=>{
    if(userwin==true){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor = "green"; 

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText="You Lose!";
        msg.style.backgroundColor = "Red";

    }
}

//game conditions


const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
if(userchoice===compchoice){
    //draw game
    drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        //scissor,paper;
        userwin=compchoice==="paper" ? false : true;
    }
    else if(userchoice==="paper"){
        //rock,scissor;
        userwin=compchoice==="scissor" ?false : true;
    }
    else{
        //rock,paper;
        userwin=compchoice==="rock" ? false : true;
    }
    showwinner(userwin);
}
};



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
