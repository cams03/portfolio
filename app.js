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
        //Section FORMATION
    $(".formation").find(".more").click(function () {
        $(".formation").find(".title").fadeOut(0100);
        $(".formation").find(".more").fadeOut(0100);
        $(".ul_formation").fadeIn("slow");
        $(".formation").find(".close").fadeIn("slow");
    })
    $(".formation").find(".close").click(function () {
            $(".formation").find(".title").fadeIn("slow");
            $(".formation").find(".more").fadeIn("slow");
            $(".ul_formation").fadeOut(0100);
            $(".formation").find(".close").fadeOut("slow");
        })
        //Section EXPERIENCE
    $(".exp").find(".more").click(function () {
        $(".exp").find(".title").fadeOut(0100);
        $(".exp").find(".more").fadeOut(0100);
        $(".ul_exp").fadeIn("slow");
        $(".exp").find(".close").fadeIn("slow");
    })

    $(".exp").find(".close").click(function () {
            $(".exp").find(".title").fadeIn("slow");
            $(".exp").find(".more").fadeIn("slow");
            $(".ul_exp").fadeOut(0100);
            $(".exp").find(".close").fadeOut("slow");
        })
        //Section COMPETENCES
    $(".skills").find(".more").click(function () {
        $(".skills").find(".title").fadeOut(0100);
        $(".skills").find(".more").fadeOut(0100);
        $(".ul_skills").fadeIn("slow");
        $(".skills").find(".close").fadeIn("slow");
    })

    $(".skills").find(".close").click(function () {
        $(".skills").find(".title").fadeIn("slow");
        $(".skills").find(".more").fadeIn("slow");
        $(".ul_skills").fadeOut(0100);
        $(".skills").find(".close").fadeOut("slow");
    })
})