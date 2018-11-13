
var cardDeck = randomCards();
var bothDecksSplitted = splitCardDeck(cardDeck);
//var resultOfCardsCompared = compareDrawedCards(computersDrawedCard, playersDrawedCard);

//console.log(resultOfCardsCompared);

//function compareDrawedCards(computersDrawedCard, playersDrawedCard) {
//    if (computersDrawedCard.value === playersDrawedCard.value || computersDrawedCard.number === playersDrawedCard.number) {
//        return 1;
//    }
//    else if (computersDrawedCard.value === playersDrawedCard.value && computersDrawedCard.number === playersDrawedCard.number) {
//        return 2;
//    }
//    else {
//        return -1;
//    }
//}

function ComputerDrawsCard(bothDecksSplitted, computerDrawFunction) {
    setTimeout(function () {
        let computercard = bothDecksSplitted.playerDeck.pop();
        computerDrawFunction(computercard);
    }, 1500);
}

function PlayerDrawsCard(bothDecksSplitted, playerDrawFunction) {
    setTimeout(function () {
        let playercard = bothDecksSplitted.computerDeck.pop();
        playerDrawFunction(playercard);
    }, 2500);
}

ComputerDrawsCard(bothDecksSplitted, function (card) {
    console.log("computers card: " + card.number + card.value);
});

PlayerDrawsCard(bothDecksSplitted, function (card) {
    console.log("players card: " + card.number + card.value);
});


function randomCards() {
    let counter = [];
    let colors = [ "H", "S", "C", "D"] ;
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

//let el = document.querySelector("main div");

//console.log(el);

//el.addEventListener("click", function (event) {

//    setTimeout(function () {
//        console.log(event);
//        let newDiv = document.createElement("div");
//        el.appendChild(newDiv);
//        newDiv.innerHTML = "<strong>VERY IMPORTANT!!!!!";
//    }, 1000);
//});

//alert("before?");

//window.alert = function (message) {
//    console.log("ALERT!!!!" + message);
//};
    
//alert("after?");
