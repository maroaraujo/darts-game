const bullseye = document.getElementById("bullseye");
const sngl25 = document.getElementById("sngl_25");
const counter = document.getElementById("counter");
let turnsList = document.getElementById("turns-list");
let missedButton = document.getElementById("missed-button");
let outerCircle = document.getElementById("outer_circle");

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    handleClick(0);
  }
});

let count = 6;
counter.innerText = String(count);
let turnsArray = [];
let idArray = [];
function clearList() {
  for (let i = 0; i < turnsArray.length; i++) {
    turnsList.removeChild(turnsList.firstChild);
  }
  //Unless we clear the turnsArray (in addtion to clearing the turnsList, which we do above),
  //we will get this error: "Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'."
  turnsArray = [];
}

function handleClick(num, e) {
  count -= num;
  counter.innerText = String(count);
  let scoreList = document.createElement("li");
  scoreList.innerText = String(num);

  //As long as the number of turns is less than 3, it adds the current throw score to the turnsArray.
  //If the number of turns is 3, it clears the list and then adds the current throw score to turnsArray.
  //Regardless of which condition is triggered, it adds the current throw score to the list.
  if (turnsArray.length < 3) {
    turnsArray.push(num);
  } else {
    clearList();
    turnsArray = [num];
  }
  turnsList.appendChild(scoreList);

  if (
    count === 0 &&
    (e.target.id.includes("dbl") || e.target.id === "bullseye")
  ) {
    counter.innerText = "Checked out! :D";
  } else if (count < 0 || count === 1) {
    count = count + turnsArray.reduce((prev, cur) => prev + cur, 0);
    counter.innerText = String(count);
    clearList();
    counter.innerText = "You're bust :(";
  } else if (count === 0 && !e.target.id.includes("dbl")) {
    count = count + turnsArray.reduce((prev, cur) => prev + cur, 0);
    counter.innerText = String(count);
    clearList();
    counter.innerText = "U need dbl or bullseye";
  }
  console.log(turnsArray);
  console.log("count just changed", count);
}

outerCircle.addEventListener("click", (e) => handleClick(0, e));
missedButton.addEventListener("click", (e) => handleClick(0, e));
bullseye.addEventListener("click", (e) => handleClick(50, e));
sngl25.addEventListener("click", (e) => handleClick(25, e));

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

  singlePoints.addEventListener("click", (e) => handleClick(id, e));
  doublePoints.addEventListener("click", (e) => handleClick(id * 2, e));
  triplePoints.addEventListener("click", (e) => handleClick(id * 3, e));
});

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
