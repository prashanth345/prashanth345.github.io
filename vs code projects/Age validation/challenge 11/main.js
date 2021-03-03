$(document).ready(function() {

    $('#submit').click(function() {

        let email = $('#email').val();

        // regular expression for email validation
        let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

        if (reg.test(email)) {
            return true;
        } else {
            $('#span').text('please provide correct email').css('color', 'red');
        }
    });

});