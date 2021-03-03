$(document).ready(function() {

    $('#next').click(function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });


    $('#prev').click(function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });




    $('#bars').click(function() {
        $('#menu').slideDown(1000);
    });

    $('#times').click(function() {
        $('#menu').hide();
    });

});