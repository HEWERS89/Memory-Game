const buttons = [topLeft,topLeft,bottomLeft,bottomRight,]
let play = false;
let clicks = 0;
let pattern= [];


// game buttons //
const game_container = document.querySelector('.game_btn')
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

// var soundAudio = [
//     //topLeft
//     //toprRight
//     //bottomLeft
//     //bottomRight
// ];


const sequence =[
    topLeft,
    topLeft,
    bottomLeft,
    bottomRight,
];

// Start Game
$(document).ready(function(){
    $('#start').click(function(){
        startSequence()
    })
})

//computer sequence//
function startSequence(){
    console.log('buttons');
}

//Random Sequence//
function getRandomNum(){
    var random =Math.floor(Math.random() *4);
    buttons.push(random);
}