$(document).ready(function () {

    //GLOBAL
    
    $(".container_menu").click(function() {
        $(".close").hide();
        $("ul").hide();
        $(".icon_skills").hide();
        $(".blocPro").find(".right_column").find("p").hide();
        $(".blocPro").find(".right_column").find("a").hide();
        $(".blocPro").find(".right_column").find("div").css("background-image", "none");
        $(".right_column").find(".title").fadeIn("slow");
        $(".right_column").find(".more").fadeIn("slow");
    })

    //HOMEPAGE

    $(".container_cv").click(function () {
        $(".rond").fadeOut(0100);
        $(".blocPro").fadeOut(0300);
        $(".blocCo").fadeOut(0300);
        $(".blocCV").fadeIn("slow");
        $(".blocCV").css("display", "flex");     
    })

    $(".container_pro").click(function () {
        $(".rond").fadeOut(0100);
        $(".blocCV").fadeOut(0300);
        $(".blocCo").fadeOut(0300);
        $(".blocPro").fadeIn("slow");
        $(".blocPro").css("display", "flex");
    })

    $(".container_co").click(function () {
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

    /*function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarWidth
        }, 500).html(percent + "% ");
    }*/


    $(".skills").find(".more").click(function () {
        $(".skills").find(".title").fadeOut(0100);
        $(".skills").find(".more").fadeOut(0100);
        $(".icon_skills").css("display", "flex");
        $(".icon_skills").fadeIn("slow");
        $(".skills").find(".close").fadeIn("slow");
        /*progress(80, $(".progressBarHtml"));
        progress(80, $(".progressBarCss"));
        progress(50, $(".progressBarJs"));
        progress(60, $(".progressBarJquery"));
        progress(40, $(".progressBarBs"));
        progress(40, $(".progressBarWp"));
        progress(80, $(".progressBarGit"));*/
    })

    $(".skills").find(".close").click(function () {
        $(".skills").find(".title").fadeIn("slow");
        $(".skills").find(".more").fadeIn("slow");
        $(".icon_skills").hide();
        $(".skills").find(".close").hide();
        /*progress(0, $(".progressBarHtml"));
        progress(0, $(".progressBarCss"));
        progress(0, $(".progressBarJs"));
        progress(0, $(".progressBarJquery"));
        progress(0, $(".progressBarBs"));
        progress(0, $(".progressBarWp"));
        progress(0, $(".progressBarGit"));*/
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