const body = document.body;
let ghostVisible = false;

const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let counter = 0;
let codeInput = [];

let ghostX = 0;
let ghostY = 0;







body.addEventListener("keyup", getCode);




function getCode(e){

    if(ghostVisible){
        moveGhost(e);
    }

    if(codeInput.length < code.length){
        codeInput.push(e.key);
    } else {
        codeInput.splice(0, 10)
        codeInput.push(e.key);
    }

    check();

}


function check(){

    let counter = 0;

    for(let i = 0; i < codeInput.length; i++){
        if(codeInput[i] === code[i]){

            counter++;
    
        }
    }

    if (counter == 10){
        changeBody();
    }

}


function changeBody(){

    ghostVisible = true;

    body.style.backgroundColor = "black";
    const ghost = document.createElement("img");

    ghost.src = "ghost.png";
    ghost.id = "ghost";
    ghost.style.position = "absolute";
    
    body.appendChild(ghost);

}


function moveGhost(e){

    if(e.key === "ArrowRight"){
        ghostX += 10;
        updateGhost();
    } else if(e.key === "ArrowLeft"){
        ghostX -= 10;
        updateGhost();
    } else if(e.key === "ArrowDown"){
        ghostY += 10;
        updateGhost();
    } else if(e.key === "ArrowUp"){
        ghostY -= 10;
        updateGhost();
    }

}

function updateGhost(){

    const ghost = document.querySelector("#ghost");

    if(ghostX < 0){
        ghostX = 0;
    }

    if(ghostY < 0){
        ghostY = 0;
    }

    if(ghostX >= 0){
        console.log(ghost)
        ghost.style.left = ghostX + "px";
    }
    if(ghostY >= 0){
        ghost.style.top = ghostY + "px";
    }

}