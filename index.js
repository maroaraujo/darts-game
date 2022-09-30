const bullseye = document.getElementById('bullseye');
const counter = document.getElementById('counter');

let count = 501;
counter.innerText = String(count);
let singleArr = [];

bullseye.addEventListener('click', () => {
    count = 'bullseye!';
    counter.innerText = String(count);
    console.log(count);
});

for (let i = 1; i < 21; i++) {
    let currentId = i;
    singleArr.push(currentId);
}

console.log(singleArr);

singleArr.map((id) => {
    let section = document.getElementById(`sngl_${id}`);
    section.addEventListener('click', () => {
        count -= id;
        counter.innerText = String(count);
    });
    console.log(section);
});
