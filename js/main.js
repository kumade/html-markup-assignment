
$(function(){

    $(window).scroll(function(){
        var scrollValue = $(this).scrollTop();

        if (scrollValue > 10) {
            $('header').addClass('scrolled');
        }
        else {
            $('header').removeClass('scrolled');
        }

    });

    var carousel = $("#reviewsCarousel");
    var reviewersList = $("#reviewersList");

    carousel.on('slid.bs.carousel', function() {
        var userId = parseInt($(this).find("div.active").data("user-id"));
        reviewersList.find("img").removeClass("active");
        $("#userPhoto" + userId).addClass("active");
    });



    reviewersList.on("mouseenter", function() {
        carousel.carousel('pause');
    });

    reviewersList.on("mouseleave", function() {
        carousel.carousel('cycle');
    });

    reviewersList.on('click touch', 'img', function() {
        reviewersList.find("img").removeClass("active");
        $(this).addClass("active");
    });

});
