let playerCard;
let computerCard;
let playerscore = 0;
let counter = 0;

$(function () {

    let deckId;
    const baseUrl = "https://deckofcardsapi.com/api/deck/"

    $("#newgame").on("click", function () {
        $.getJSON(baseUrl + "new/shuffle/")
            .done(function (data) {
                deckId = data.deck_id;
                $.getJSON(baseUrl + deckId + "/draw/")
                    .done(function (drawData) {
                        setPlayerCard(drawData.cards[0]);

                        setInterval(function () {
                            $.getJSON(baseUrl + deckId + "/draw/")
                                .done(function (computerDraw) {
                                    computerCard = computerDraw.cards[0].code;
                                    $("#computer-deck img").attr("src", computerDraw.cards[0].image);
                                });
                        }, 2000);
                    });
            });
    });

    $("#player-deck").on("click", function () {
        SetScore(computerCard, playerCard);
        console.log(playerscore);
    });

    setInterval(function () {
        counter++
        $("#gametimer").text(counter)
    }, 1000);
});

function setPlayerCard(card) {
    playerCard = card.code;
    $("#player-deck img")
        .attr("src", card.image);
};


function SetScore(computercard, playercard) {
    if (computercard.charAt(0) === playercard.charAt(0) || computercard.charAt(1) === playercard.charAt(1)) {
        playerscore += 1;
    }
    else {
        playerscore += -1;
    }

    $("#gamepoints").text(playerscore);
};
