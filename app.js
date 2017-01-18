$(document).ready(function () {
    $(".left_arrow").click(function () {
        $(".rond").fadeOut(0100);
        $(".blocPro").fadeOut(0300);
        $(".blocCo").fadeOut(0300);
        $(".blocCV").fadeIn("slow");
        $(".blocCV").css("display", "flex");
    })

    $(".middle_arrow").click(function () {
        $(".rond").fadeOut(0100);
        $(".blocCV").fadeOut(0300);
        $(".blocCo").fadeOut(0300);
        $(".blocPro").fadeIn("slow");
        $(".blocPro").css("display", "flex");
    })

    $(".right_arrow").click(function () {
        $(".rond").fadeOut(0100);
        $(".blocCV").fadeOut(0300);
        $(".blocPro").fadeOut(0300);
        $(".blocCo").fadeIn("slow");
        $(".blocCo").css("display", "flex");
    })

    $(".up_arrow").click(function () {
        $(".blocCV").fadeOut(0100);
        $(".rond").fadeIn(0300);
    })

    $(".div_title").click(function () {
        $(".div_title").fadeOut("slow");
        $(".ul_formation").fadeIn(0100);
    })
})