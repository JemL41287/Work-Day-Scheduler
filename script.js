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

    function getData() {

        var hour9 = localStorage.getItem("hour-9");
        $("#hour-9 .description").text(hour9);

        var hour10 = localStorage.getItem("hour-10");
        $("#hour-10 .description").text(hour10);

        var hour11 = localStorage.getItem("hour-11");
        $("#hour-11 .description").text(hour11);

        var hour12 = localStorage.getItem("hour-12");
        $("#hour-12 .description").text(hour12);

        var hour1 = localStorage.getItem("hour-1");
        $("#hour-1 .description").text(hour1);

        var hour2 = localStorage.getItem("hour-2");
        $("#hour-2 .description").text(hour2);

        var hour3 = localStorage.getItem("hour-3");
        $("#hour-3 .description").text(hour3);

        var hour4 = localStorage.getItem("hour-4");
        $("#hour-4 .description").text(hour4);

        var hour5 = localStorage.getItem("hour-5");
        $("#hour-5 .description").text(hour5);
    }

    var date = new Date();
    var hours = date.getHours();

    $(".time-block").each(function() {
        var compareHours = parseInt($(this).attr("id").split("-")[1]);

        if (compareHours < 9) {
            compareHours +=12
        }


        if (compareHours < hours) {
            $(this).addClass("past"); 
        } else if (compareHours === hours) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })


});