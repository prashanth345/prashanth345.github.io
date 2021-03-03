setInterval(function() {

    var time = new Date();
    day = String(time.getDate()).padStart(2, '0');
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();



    document.getElementById('day').innerHTML = day;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}, 1000);