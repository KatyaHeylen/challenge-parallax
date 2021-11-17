const tic = 50;
let x = 0;
let y = 0;
const moverate = 10;
let character = document.getElementById("character");
let treesbushes = document.getElementById("trees");
let distanttrees = document.getElementById("distant_trees");
let clouds = document.getElementById("clouds");
let ground = document.getElementById('ground');

window.addEventListener('keydown', function (event) {
    if (event.code === "Space"){
        console.log("jump");
        makeJump ();
    } else if (event.code === "ArrowLeft"){
        console.log('Walking left');
        character.style.transform = 'scaleX(-1)';
        changePosition(-x);
    } else if (event.code === "ArrowRight"){
        console.log('Walking right');
        character.style.transform = 'scaleX(1)';
        changePosition(x);
    }
}, true);

function changePosition() {
ground += 10;
setTimeout(changePosition, tic);
}


// document.addEventListener('keydown', function (event) {
//     if (event.key && !keys.includes(event.key)) {
//         keys.push(event.key);
//         console.log(keys);
//         changePosition();
//     }
// });
//
// document.addEventListener('keyup', function (event) {
//     if (event.key) {
//         let index = keys.indexOf(event.key);
//         if (index !== -1) {
//             keys.splice(index, 1);
//             console.log(keys);
//         }
//     }
// });