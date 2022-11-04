let count = 6;
let turnsArray = [];
let idArray = [];
populateIdArray();

//Grabs all the single, double and triple point fields
//And adds handleclicks to them:
idArray.map((id) => {
  let singlePoints = document.getElementById(`sngl_${id}`);
  let doublePoints = document.getElementById(`dbl_${id}`);
  let triplePoints = document.getElementById(`trpl_${id}`);

  singlePoints.addEventListener("click", (e) => handleClick(id, e));
  doublePoints.addEventListener("click", (e) => handleClick(id * 2, e));
  triplePoints.addEventListener("click", (e) => handleClick(id * 3, e));
});

//Grabs all the "special" point fields:
const bullseye = document.getElementById("bullseye");
const sngl25 = document.getElementById("sngl_25");
let turnsList = document.getElementById("turns-list");
let missedButton = document.getElementById("missed-button");
let outerCircle = document.getElementById("outer_circle");

//adds handleclicks to the "special" point fields
outerCircle.addEventListener("click", (e) => handleClick(0, e));
missedButton.addEventListener("click", (e) => handleClick(0, e));
bullseye.addEventListener("click", (e) => handleClick(50, e));
sngl25.addEventListener("click", (e) => handleClick(25, e));

//grabs the counter and puts the initial count in it:
const counter = document.getElementById("counter");
counter.innerText = String(count);

//The spacebar shortcut for missed throws:
document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
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
  let turnsListItem = document.createElement("li");
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
    (e.target.id.includes("dbl") || e.target.id === "bullseye")
  ) {
    counter.innerText = "Checked out! :D";
  } else if (count < 0 || count === 1) {
    updateScoreBoard("You're bust ");
    const span = document.createElement("span");
    counter.appendChild(span);
    span.classList.add("nowrap");
    span.textContent = ":(";
  } else if (count === 0 && !e.target.id.includes("dbl")) {
    updateScoreBoard("U need dbl or bullseye");
  }
  console.log(turnsArray);
  console.log("count just changed", count);
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
//mapping for single scores

export { handleClick };
/*
Endgame rules:
1. Has to end on exactly 0 - done
2. If the current throw puts the score below zero, all the throws in current turn get reversed.
3. The last throw has to be a double or a bullseye 

To do:
1. Testing
2. Functionality for missed throws DONE
3. Functionality for 0 scores (the black part) DONE
4. Styling:
    a. SVG not to exceed viewpot hight. DONE
    b. Score to be displayed in the middle DONE
    c. Turns list to be displayed to the side BAILED
    d. LCD font for score + turns list
    e. Missed button- large (width of board?) and in the middle
    f. Background (billiard green? Wallpaper design?)
5. Spacebar shortcut for missed throws. 
6. Docs
7. Deploy
*/
