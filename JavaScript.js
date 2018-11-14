
var cardDeck = randomCards();
var bothDecksSplitted = splitCardDeck(cardDeck);

function randomCards() {
    let counter = [];
    let colors = ["H", "S", "C", "D"];
    do {
        let x = Math.floor((Math.random() * 13));
        let y = Math.floor((Math.random() * 4));
        let cardValue = colors[y];
        var card = {
            number: x,
            value: cardValue,
        }

        var existingCard = found(counter, card);

        if (existingCard) {
            counter.push(card);
        }

    } while (counter.length < 52);

    return counter;
};

function found(counter, card) {

    var exist = true;

    for (var i = 0; i < counter.length; i++) {
        if (counter[i].number === card.number && counter[i].value === card.value) {
            exist = false;
            break;
        }
    }

    return exist;
}

function splitCardDeck(cardDeck) {
    var playerCards = cardDeck.slice(0, 26);
    var computerCards = cardDeck.slice(26, 53);

    var obj = {
        playerDeck: playerCards,
        computerDeck: computerCards
    };

    return obj;
}

let theGame = {
    currentComputerCard: undefined,
    score: 0,
    ComputerDrawsCard: function (bothDecksSplitted, computerDrawFunction) {
        setTimeout(function () {
            let computercard = currentComputerCard = bothDecksSplitted.playerDeck.pop();
            computerDrawFunction(computercard);
        }, 1500);
    },
};

PlayerDrawsCard(bothDecksSplitted, function (card) {
    console.log("players card: " + card.number + card.value);
    theGame.score += compareDrawedCards(card, theGame.currentComputerCard);
});

theGame.ComputerDrawsCard(bothDecksSplitted, function (card) {
    console.log("computers card: " + card.number + card.value);
    theGame.currentComputerCard = card;
});

function PlayerDrawsCard(bothDecksSplitted, playerDrawFunction) {
    setTimeout(function () {
        let playercard = bothDecksSplitted.computerDeck.pop();
        playerDrawFunction(playercard);
    }, 2500);
};

function compareDrawedCards(playercard, computercard) {
    if (computercard.value === playercard.value || computercard.number === playercard.number) {
        theGame.score += 1;
    }
    else if (computercard.value === playercard.value && computercard.number === playercard.number) {
        theGame.score += 2;
    }
    else {
        theGame.score += -1;
    }
    console.log(theGame.score);
};

