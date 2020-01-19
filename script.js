$(document).ready(function () {

    getData();

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".saveBtn").on("click", function () {
        var value = $(this)
            .siblings(".description")
            .val();
        var time = $(this)
            .parent()
            .attr("id");

        localStorage.setItem(time, value);


    });



});