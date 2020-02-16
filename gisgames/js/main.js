$(".header__authorization").click(function() {
    $(".authorization").addClass("authorization_active")
    $("html").css({'overflow' : 'hidden',})

});
$(".authorization__btn-close").click(function() {
    $(".authorization").removeClass("authorization_active")
    $("html").css({'overflow-x' : 'hidden','overflow-y' : 'auto'})
});
