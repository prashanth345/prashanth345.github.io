$(document).ready(function() {

    $('#prev').click(function() {

        var currentImg = $(".active");
        prevImg = currentImg.prev();

        if (prevImg.length) {

            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);

        }

    });

    $('#next').click(function() {

        var currentImg = $(".active");
        nextImg = currentImg.next();

        if (nextImg.length) {

            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);

        }

    });

    $('#prev').click(function() {

        var info2 = $(".info2");
        var info1 = $('.info1')

        if (info2.length) {

            info2.css('opacity', 1);

            info1.css('opacity', 0);

        }

    });

    $('#next').click(function() {

        var info2 = $(".info2");
        var info1 = $('.info1')

        if (info2.length) {

            info2.css('opacity', 0);
            info1.css('opacity', 1);

        }

    });


});