// let gameSeq=[];
// let userSeq=[];
// let btns=["red","yellow","green","purple"];
// let started=false;
// let level=0;
// let h2=document.querySelector('h2');


// document.addEventListener("keypress", startGame);
// document.querySelector("body").addEventListener("click", function (event) {
//     if (!started) {
//         event.preventDefault(); 
//         startGame();
//     }
// });
// document.querySelector("body").addEventListener("touchstart", function (event) {
//     if (!started) {
//         event.preventDefault(); 
//         startGame();
//     }
// });

// function startGame(){
//     if(started==false){
//         console.log("game started");
//         started=true;

//         levelUp();
//     }
// }
// function btnFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }
// function checkAns(idx){
//     if(userSeq[idx]===gameSeq[idx]){
//         if(userSeq.length===gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }
//     else{
//         h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
//         setTimeout(reset(),2000);
//     }
// }
// function levelUp(){
//     userSeq=[];
//     level++;
//     h2.innerText=`Level ${level}`;
//     let randIdx=Math.floor(Math.random()*4);
//     let randColor=btns[randIdx];
//     let randBtn=document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     btnFlash(randBtn);
// }
// function btnPress(){
//     let btn=this;
//     btnFlash(btn);
//     let userColor=btn.getAttribute("id");
//     userSeq.push(userColor);
//     console.log(userSeq);
//     checkAns(userSeq.length-1);
// }
// let allBtns=document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click",btnPress);
// }

// function reset(){
//     started=false;
//     gameSeq=[];
//     userSeq=[];
//     level=0;
//      h2.innerHTML = "Press any key or tap to start";
//     let btns = document.querySelectorAll('.btn');
//     btns.forEach(function(btn) {
//         btn.classList.remove("flash");
//     });
    
// }
let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", startGame);
document.querySelector("body").addEventListener("click", function (event) {
    if (!started) {
        event.preventDefault();
        startGame();
    }
});
document.querySelector("body").addEventListener("touchstart", function (event) {
    if (!started) {
        event.preventDefault();
        startGame();
    }
});

function startGame() {
    if (!started) {
        console.log("Game started");
        started = true;
        h2.innerText = "Game is starting...";
        levelUp();
    }
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
       
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key or tap to start`;
        setTimeout(reset, 2000);
    }
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    const randIdx = Math.floor(Math.random() * 4);
    const randColor = btns[randIdx];
    const randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnPress(event) {
    event.preventDefault();
    const btn = this;
    btnFlash(btn);
    const userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}


const allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
    btn.addEventListener("touchstart", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

    allBtns.forEach(btn => btn.classList.remove("flash"));
}
