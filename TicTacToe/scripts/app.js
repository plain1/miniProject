const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver= false;

const players = [
    {
        name:'',
        symbol:'O'
    },
    {
        name:'',
        symbol:'X'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');


const editPlayer1BtnElement = document.getElementById('edit1');
const editPlayer2BtnElement = document.getElementById('edit2');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const newGameBtnElement = document.getElementById('newGame');
const gameBoardElement = document.getElementById('game-board');
 
editPlayer1BtnElement.addEventListener('click',open);
editPlayer2BtnElement.addEventListener('click',open);

cancelConfigBtnElement.addEventListener('click',close);
backdropElement.addEventListener('click',close);

formElement.addEventListener('submit',save);

newGameBtnElement.addEventListener('click',newGame);


gameBoardElement.addEventListener('click',selectGameField);