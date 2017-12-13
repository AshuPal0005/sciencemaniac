var height, sectionHeight;
$(document).ready(function () {
    height = $(window).height();
    console.log("inner height = ", height);
    sectionHeight = height - 262;
    console.log("section height = ", sectionHeight);
    $("#section1").css("height", sectionHeight);
    /* animate on click */
    $(".scroll").click(function () {
        console.log("clicked");
        $("body, html").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
});