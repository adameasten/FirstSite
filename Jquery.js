$(function () {

    var card = $("main div");
    card.hide();

    $("#newgame").on("click", function () {
        card.show();
    });

});