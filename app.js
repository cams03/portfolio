$(document).ready(function () {

    //HOMEPAGE

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
            $(".blocPro").fadeOut(0100);
            $(".blocCo").fadeOut(0100);
            $(".rond").fadeIn(0300);
        })
        //SECTION CV
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
        $(".ul_formation").hide();
        $(".formation").find(".close").hide();
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
        $(".ul_exp").hide();
        $(".exp").find(".close").hide();
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
        $(".ul_skills").hide();
        $(".skills").find(".close").hide();
    })

    //SECTION PROJETS

    $(".projet_xy").find(".more").click(function () {
            $(".projet_xy").find(".title").fadeOut(0100);
            $(".projet_xy").find(".more").fadeOut(0100);
            $(".xy_p").fadeIn("slow");
            $(".projet_xy").find(".close").fadeIn("slow");
            $(".projet_xy").find("a").fadeIn("slow");
            $(".projet_xy").css("background-image", "url(img/espace.jpg)");
        })
        //Projet XY
    $(".projet_xy").find(".close").click(function () {
            $(".projet_xy").find(".title").fadeIn("slow");
            $(".projet_xy").find(".more").fadeIn("slow");
            $(".xy_p").hide();
            $(".projet_xy").find("a").hide();

            $(".projet_xy").find(".close").hide();
            $(".projet_xy").css("background-image", "none");
        })
        //Projet gestionnaire
    $(".projet_gestionnaire").find(".more").click(function () {
        $(".projet_gestionnaire").find(".title").fadeOut(0100);
        $(".projet_gestionnaire").find(".more").fadeOut(0100);
        $(".gestionnaire_p").fadeIn("slow");
        $(".projet_gestionnaire").find(".close").fadeIn("slow");
        $(".projet_gestionnaire").find("a").fadeIn("slow");
        $(".projet_gestionnaire").css("background-image", "url(img/console.png)");
    })

    $(".projet_gestionnaire").find(".close").click(function () {
        $(".projet_gestionnaire").find(".title").fadeIn("slow");
        $(".projet_gestionnaire").find(".more").fadeIn("slow");
        $(".gestionnaire_p").hide();
        $(".projet_gestionnaire").find("a").hide();
        $(".projet_gestionnaire").find(".close").hide();
        $(".projet_gestionnaire").css("background-image", "none");
    })


})