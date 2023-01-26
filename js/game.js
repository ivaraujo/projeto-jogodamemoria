const grid = document.querySelector('.grid');

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

const createCard = () => {
    const card = createElement('div','card');
    const front = createElement('div','face front');
    const back = createElement('div','face back');

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = (){
    tabuada.forEach((valor) => {
        const card = createCard();
        grid.appendChild(card);
    });
}

loadGame();