$(document).ready(function() {

    $('#bar').click(function() {
        $('#menu').slideToggle('slow');
    });

    // images slide

    $('#line1').click(function() {

        $('.slide').css('marginLeft', 0);
    });

    $('#line2').click(function() {
        // $(this).css('backgroundColor', 'orange');

        $('.slide').css('marginLeft', '-102%');
    });

    $('#line3').click(function() {
        // $(this).css('backgroundColor', 'orange');

        $('.slide').css('marginLeft', '-204%');
    });

    $('#line4').click(function() {
        // $(this).css('backgroundColor', 'orange');

        $('.slide').css('marginLeft', '-306%');
    });

    $('#line5').click(function() {
        $(this).add().toggleClass('orange');

        $('.slide').css('marginLeft', '-409%');
    });


});