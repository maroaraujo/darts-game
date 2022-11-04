let count = 6;
let turnsArray = [];
let idArray = [];
populateIdArray();

//Grabs all the single, double and triple point fields
//And adds handleclicks to them:
idArray.map((id) => {
    document
        .getElementById(`sngl_${id}`)
        .addEventListener('click', (e) => handleClick(id, e));
    document
        .getElementById(`dbl_${id}`)
        .addEventListener('click', (e) => handleClick(id * 2, e));
    document
        .getElementById(`trpl_${id}`)
        .addEventListener('click', (e) => handleClick(id * 3, e));
});

//Grabs all the "special" point fields and adds handleclicks to the "special" point fields
document
    .getElementById('bullseye')
    .addEventListener('click', (e) => handleClick(50, e));
document
    .getElementById('sngl_25')
    .addEventListener('click', (e) => handleClick(25, e));
document
    .getElementById('missed-button')
    .addEventListener('click', (e) => handleClick(0, e));
document
    .getElementById('outer_circle')
    .addEventListener('click', (e) => handleClick(0, e));

let turnsList = document.getElementById('turns-list');

//grabs the counter and puts the initial count in it:
const counter = document.getElementById('counter');
counter.innerText = String(count);

//The spacebar shortcut for missed throws:
document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        handleClick(0);
    }
});

/* ------FUNCTION DECLARATIONS--------*/

function clearTurns() {
    //Clears the turns list that's displayed to the user.
    for (let i = 0; i < turnsArray.length; i++) {
        turnsList.removeChild(turnsList.firstChild);
    }
    //Clears the turns counter by reducing the length of turnsArray to 0.
    turnsArray = [];
}

function handleClick(num, e) {
    count -= num;
    counter.innerText = String(count);
    let turnsListItem = document.createElement('li');
    turnsListItem.innerText = String(num);
    turnsList.appendChild(turnsListItem); //This may need to be below the if-else statement

    //Adds current throw to the turnsArray. If the turnsArray is already full, clears it first before adding the throw.
    if (turnsArray.length < 3) {
        turnsArray.push(num);
    } else {
        clearTurns();
        turnsArray = [num];
    }
    //the turnsList.appendchild may need to go here

    endgame(e);
}

//The endgame logic. Controls what happens when you try to checkout.
function endgame(e) {
    if (
        count === 0 &&
        (e.target.id.includes('dbl') || e.target.id === 'bullseye')
    ) {
        counter.innerText = 'Checked out! :D';
    } else if (count < 0 || count === 1) {
        updateScoreBoard("You're bust ");
        //creating a span for the frown emoji so it doesn't wrap (treats it as a word)
        const span = document.createElement('span');
        counter.appendChild(span);
        span.classList.add('nowrap');
        span.textContent = ':(';
    } else if (count === 0 && !e.target.id.includes('dbl')) {
        updateScoreBoard('U need dbl or bullseye');
    }
}

function updateScoreBoard(message) {
    //Adds the previous turns BACK into the turnsArray:
    count = count + turnsArray.reduce((prev, cur) => prev + cur, 0);
    clearTurns();
    counter.innerText = message;
}

function populateIdArray() {
    for (let i = 1; i < 21; i++) {
        let currentId = i;
        idArray.push(currentId);
    }
}
export { handleClick };
