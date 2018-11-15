
$(function () {

    $("#submitForm").submit(function (e) {
        let allData = $("#submitForm").serializeArray();
        console.log(allData)
        $("#tableBody").append(
            "<tr>" + "<td>" +
            allData[0].value + "</td>"
            + "<td>" + allData[1].value +
            "</td>" + "</tr>");
            e.preventDefault();
    });
});