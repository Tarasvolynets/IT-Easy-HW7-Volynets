const cardContainer = document.querySelector('.container__card');
const addBtn = document.querySelector('.btn__add');


let arrCards = [
    {
        cardName: 'Card Name',
        cardDescription: 'card description',
        id: 1
    }
];

function cardRender() {
    let result = '';
    for (let i = 0; i < arrCards.length; i++) {
        result += `<div class='card__wrapper'>
                    <div class="card">
                        <p class="card__name">${arrCards[i].cardName}</p>
                        <img class="card__picture" src="https://random.imagecdn.app/500/500" alt="">
                        <p class="card__description">${arrCards[i].cardDescription}</p>
                    </div>
                    <button onclick="deleteCard(${arrCards[i].id})" class="btn__remove"></button>
                   </div>`
    }
    cardContainer.innerHTML = result;
}

addBtn.addEventListener('click', () => {
    arrCards.push(getCard());
    cardRender();
});

function getCard() {
    return {
        cardName: 'Card Name',
        cardDescription: 'card description',
        id: Math.floor(Math.random() * 100000)
    }
}

function deleteCard(cardId) {
    arrCards = arrCards.filter(card => card.id !== cardId);
    cardRender();
}

cardRender();