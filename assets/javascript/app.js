$(".card").on("hover", function(event) {
    console.log("hovering");
    $(".overlay").removeClass("hide");
})



$(".card").hover(function (event) {
    console.log("hovering");
    $(this).children(".overlay").toggleClass("hide");
})