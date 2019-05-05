$(".card").hover(function (event) {
    console.log("hovering");
    $(this).children(".overlay").toggleClass("hide");
})

$(".card").on("mouseenter", function (event) {
    $(this).children("img").css("opacity", "0.7");
})

$(".card").on("mouseleave", function (event) {
    $(this).children("img").css("opacity", "1");
})