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
function clearList(){
    
}

function handleClick(num, e){
    count -= num;
    counter.innerText = String(count);
    let scoreList = document.createElement("li");
    scoreList.innerText = String(num);
    
if(turnsArray.length === 3){
    turnsArray = [num] ;
    //We used the same line 3 times because once the first child is removed the next child becomes the first child. 
    turnsList.removeChild(turnsList.firstChild); //see if this can be done with 1 line of code. 
    turnsList.removeChild(turnsList.firstChild);
    turnsList.removeChild(turnsList.firstChild);
    turnsList.appendChild(scoreList);
}else{
    turnsArray.push(num);
    turnsList.appendChild(scoreList) ;
    console.log(turnsArray);
}

if(count === 0 && e.target.id.includes("dbl")){
    counter.innerText = "Checked out! :D";
} else if (count < 0 || count === 1) {
    count = count + turnsArray.reduce((prev, cur) => prev + cur, 0);
    counter.innerText = String(count);

}

console.log("count just changed", count)}

bullseye.addEventListener('click', (e) => handleClick(50,e));
sngl25.addEventListener('click', (e) => handleClick(25,e)
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

    singlePoints.addEventListener('click', (e) => handleClick(id,e));
    doublePoints.addEventListener('click', (e) => handleClick((id * 2),e));
    triplePoints.addEventListener('click', (e) => handleClick((id * 3),e));




});

//ENDGAME LOGIC: 
/*
1. Has to end on exactly 0
2. If the current throw puts the score below zero, all the throws in current turn get reversed.
3. The last throw has to be a double or a bullseye */

