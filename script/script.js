const tic = 50;
let x = 0;
let y = 0;
let keys = [];
let character = document.getElementById("character");
let treesbushes = document.getElementById("trees");
let distanttrees = document.getElementById("distant_trees");
let clouds = document.getElementById("clouds");
let ground = document.getElementById('ground');

changeSpirit();

document.addEventListener('keydown', function (event) {
    if (event.key && !keys.includes(event.key)) {
        keys.push(event.key);
        console.log(keys);
        changePosition();
        changeSpirit();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key) {
        let index = keys.indexOf(event.key);
        if (index !== -1) {
            keys.splice(index, 1);
        }
    }
    changeSpirit();
});

function changePosition() {
    if (keys.includes('ArrowRight')) {
        x -= 1;
        character.style.transform = 'scaleX(-1)';
    }
    if (keys.includes('ArrowLeft')) {
        x += 1;
        character.style.transform = 'scaleX(1)';
    }
    ground.style.backgroundPositionX = 4 * x + "px";
    treesbushes.style.backgroundPositionX = 3 * x + "px";
    distanttrees.style.backgroundPositionX = 2 * x + "px";
    clouds.style.backgroundPositionX = x + "px";
    setTimeout(changePosition, tic);
}
function changeSpirit() {
    if (keys.length !== 0) {
    character.style.backgroundImage = "url(../images/walking.gif)";
    character.style.backgroundSize = "260px";
    } else {
    character.style.backgroundImage = "url(../images/idle.gif)";
    character.style.backgroundSize = "100px";
    }
}




