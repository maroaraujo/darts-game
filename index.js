const bullseye = document.getElementById('bullseye');
const sngl25 = document.getElementById('sngl_25')
const counter = document.getElementById('counter');
let turnsList = document.getElementById('turns-list');

let turnsCounter = 0
let count = 501;
counter.innerText = String(count);
let idArray = [];

bullseye.addEventListener('click', () => {
    count -= 50;
    counter.innerText = String(count);
    turnsCounter += 50
    let scoreList = document.createElement("li")
    scoreList.innerText = String(50)
    turnsList.appendChild(scoreList)
    console.log(count);
});

sngl25.addEventListener('click', () => {
    count -= 25;
    counter.innerText = String(count);
    turnsCounter += 25
    let scoreList = document.createElement("li")
    scoreList.innerText = String(25)
    turnsList.appendChild(scoreList)

    console.log(count);
})

for (let i = 1; i < 21; i++) {
    let currentId = i;
    idArray.push(currentId);
}
//mapping for single scores
idArray.map((id) => {
    //mapping for single scores
    let section1 = document.getElementById(`sngl_${id}`);

    section1.addEventListener('click', () => {
        count -= id;
        counter.innerText = String(count);
        turnsCounter += id
        let scoreList = document.createElement("li")
        scoreList.innerText = String(id)
        turnsList.appendChild(scoreList)
    });
    console.log(idArray);
    let section2 = document.getElementById(`dbl_${id}`);
    section2.addEventListener('click', () => {
         count -= id * 2;       
        counter.innerText = String(count);
        turnsCounter += id *2
        let scoreList = document.createElement("li")
        scoreList.innerText = String(id*2)
        turnsList.appendChild(scoreList)
        console.log(section2);
    });
    let section3 = document.getElementById(`trpl_${id}`);
    section3.addEventListener('click', () => {
        count -= id * 3;
        counter.innerText = String(count);
        turnsCounter += id *3
        let scoreList = document.createElement("li")
        scoreList.innerText = String(id*3)
        turnsList.appendChild(scoreList)
        console.log(section3);
    });
});

if(count === 0){
    counter.innerText = "Checked out! :D";
} 

//double

// debugger;

//RULES
// You have to finish on a double OR bullseye
//