const bullseye = document.getElementById('bullseye');
const counter = document.getElementById('counter');

let count = 501;
counter.innerText = String(count);
let idArray = [];

bullseye.addEventListener('click', () => {
    count = 'bullseye!';
    counter.innerText = String(count);
    console.log(count);
});

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
    });
    console.log(idArray);
});

//double
let section2 = document.getElementById('dbl_5');
section2.addEventListener('click', () => {
    count -= 5 * 2;
    counter.innerText = String(count);
    console.log(section2);
});
// debugger;
