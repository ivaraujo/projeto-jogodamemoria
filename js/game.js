const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const tabuada = [
    '3x1',
    '3x2',
    '3x3',
    '3x4',
    '3x5',
    '3x6',
    '3x7',
    '3x8',
    '3x9',
    '3x10',
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');
    if(disableCards.length === 20){
        clearInterval(this.loop);
        alert('Parabéns! Você venceu, FIM DE JOGO.');
    }
}

const checkCards = () => {
   const firstValor = firstCard.getAttribute('data-valor');
   const secondValor = secondCard.getAttribute('data-valor');
   if(firstValor === secondValor){
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');
        firstCard = '';
        secondCard = '';
        checkEndGame();
   }
   else{
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';  
        },500);              
   }
}

const revealCard = ({target}) => {
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }
    else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        checkCards();
    }

    
}

const createCard = (valor) => {
    const card = createElement('div','card');
    const front = createElement('div','face front');
    const back = createElement('div','face back');

    front.innerHTML = valor;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-valor', valor);

    return card;
}

const loadGame = () => {
    const duplicateTabuada = [ ...tabuada, ... tabuada ];

    const suffledArray = duplicateTabuada.sort(() => Math.random()-0.5);

    duplicateTabuada.forEach((valor) => {
        const card = createCard(valor);
        grid.appendChild(card);
    });
}

const startTimer = () => {
    this.loop = setInterval(()=>{
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime+1;
    },1000);
}

function recomecar(){
    window.location = 'game.html';
}

function irMenu(){
    window.location = '../index.html';
}

window.onload = () => {    
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}