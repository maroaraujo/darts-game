/*
REFACTOR:
1. Pull out the click event listeners into a sepaate module
2.  */

const bullseye = document.getElementById('bullseye');
const sngl25 = document.getElementById('sngl_25')
const counter = document.getElementById('counter');
let turnsList = document.getElementById('turns-list');

let count = 501;
counter.innerText = String(count);
let turnsArray = [];
let idArray = [];

function handleClick(num){
    count -= num;
    counter.innerText = String(count);

    turnsArray.length === 3
    ? turnsArray = [num]
    : turnsArray.push(num);

    console.log(turnsArray);
    /* let scoreList = document.createElement("li")
    scoreList.innerText = String(num)
    turnsList.appendChild(scoreList) */
    // console.log(count);
}

bullseye.addEventListener('click', () => handleClick(50));
sngl25.addEventListener('click', () => handleClick(25)
);

for (let i = 1; i < 21; i++) {
    let currentId = i;
    idArray.push(currentId);
}
//mapping for single scores
idArray.map((id) => {
    //mapping for single scores
    // console.log(idArray);

    let singlePoints = document.getElementById(`sngl_${id}`);
    let doublePoints = document.getElementById(`dbl_${id}`);
    let triplePoints = document.getElementById(`trpl_${id}`);

    singlePoints.addEventListener('click', () => handleClick(id));
    doublePoints.addEventListener('click', () => handleClick((id * 2)));
    triplePoints.addEventListener('click', () => handleClick((id * 3)));




});

if(count === 0){
    counter.innerText = "Checked out! :D";
} 

//double

// debugger;

//RULES
// You have to finish on a double OR bullseye
//