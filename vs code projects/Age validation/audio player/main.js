    let songImg = document.getElementById('songImg');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let speedUp = document.getElementById('speedUp');
    let speedDown = document.getElementById('speedDown');
    let playPause = document.getElementById('playPause');
    let range = document.getElementById('range');
    let track = document.getElementById('track');
    let songName = document.getElementById('songName');
    let artistName = document.getElementById('artistName');
    let audio = document.getElementById('audio');
    let rotate = document.getElementById('rotate');
    let slide = document.getElementById('slide');
    let volDown = document.getElementById('volDown');
    let volUp = document.getElementById('volUp');
    let mute = document.getElementById('mute');
    let love = document.getElementById('love');
    let bars = document.getElementById('bars');
    let songDrop = document.getElementById('songDrop');
    let collapse = document.getElementById('collapse');



    let trianglePlay = document.querySelector('#trianglePlay');
    let trianglePlayOne = document.querySelector('#trianglePlayOne');
    let trianglePlayTwo = document.querySelector('#trianglePlayTwo');









    let songList = ["audio/Attention.mp3", "audio/Cheap-Thrills.mp3", "audio/Company.mp3", "audio/Forever.mp3"]

    let artistList = ["Charlie Puth", "Sia", "Justin Bieber", "Justin Bieber"]

    let nameList = ["Attention", "Cheap-Thrills", "Company", "Forever"]

    let imgList = ["images/Attention.jpg", "images/Cheap-Thrills.jpg", "images/Company.png", "images/forever.png"]





    let count = 0;

    let cal = 0;

    let one = 0;

    let two = 0;

    audio.src = songList[count];
    songName.textContent = nameList[cal];
    artistName.textContent = artistList[one];
    songImg.src = imgList[two];

    playPause.onclick = function allOne(p) {

        if (audio.paused) {
            audio.play();
            playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg> ';
            rotate.style.animation = 'rotate 6.5s infinite linear';
            slide.style.animation = ' slide 5.5s infinite';


        } else {
            audio.pause();
            rotate.style.animation = '';
            playPause.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9 17L17 12 9 7z"></path></svg> ';
            slide.style.animation = ' slideend 5.5s infinite linear';
        }


    }


    range.onchange = function() {

        audio.currentTime = range.value;
    }

    audio.ontimeupdate = function() {
        range.value = this.currentTime;

    }

    audio.onloadedmetadata = function() {
        range.max = this.duration;
    }




    speedDown.onclick = function() {
        audio.currentTime -= 30;
    }

    speedUp.onclick = function() {
        audio.currentTime += 30;
    }

    prev.onclick = function() {
        audio.src = songList[count--];
        audio.play();
        playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg> ';
        songName.textContent = nameList[cal--];
        artistName.textContent = artistList[one--];
        songImg.src = imgList[two--];
        rotate.style.animation = 'rotate 6.5s infinite linear';
        slide.style.animation = ' slide 5.5s infinite';
    }

    next.onclick = function() {
        audio.src = songList[count++];
        audio.play();
        playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg> ';
        songName.textContent = nameList[cal++];
        artistName.textContent = artistList[one++];
        songImg.src = imgList[two++];
        rotate.style.animation = 'rotate 6.5s infinite linear';
        slide.style.animation = ' slide 5.5s infinite';
    }


    volDown.onclick = function() {
        audio.volume -= 0.2;
    }


    volUp.onclick = function() {
        audio.volume += 0.2;
    }

    mute.onclick = function() {
        if (audio.muted) {
            audio.muted = false;
            mute.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, .5);transform:;-ms-filter:"><path d="M21.707 20.293l-2.023-2.023c1.44-1.686 2.315-3.846 2.315-6.27 0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7 0 1.832-.629 3.543-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4c0-.369-.203-.708-.528-.882-.324-.174-.72-.154-1.026.05L7.727 6.313l-4.02-4.02L2.293 3.707l18 18L21.707 20.293zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832C12.612 20.943 12.806 21 13 21c.162 0 .324-.039.472-.118C13.797 20.708 14 20.369 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033-.061-.033-.123-.058-.19-.078-.064-.019-.126-.032-.192-.038C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223C2.451 7.554 2 8.222 2 9v6C2 16.103 2.897 17 4 17z"></path></svg';
        } else {
            audio.muted = true;
            mute.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M7.727 6.313l-4.02-4.02L2.293 3.707l18 18 1.414-1.414-2.02-2.02c1.44-1.687 2.312-3.851 2.312-6.273 0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7 0 1.832-.63 3.543-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223C2.451 7.554 2 8.222 2 9v6C2 16.103 2.897 17 4 17z"></path></svg>';

        }
    }


    love.onclick = function() {
        love.classList.toggle("pa-heart");
    }


    trianglePlay.onclick = function() {



        if (audio.paused) {

            songName.textContent = nameList[0];
            artistName.textContent = artistList[0];
            songImg.src = imgList[0];
            audio.src = songList[0];
            audio.play();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg>';
            playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg> ';
            rotate.style.animation = 'rotate 6.5s infinite linear';
            slide.style.animation = ' slide 5.5s infinite';
        } else {
            audio.pause();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M7 6L7 18 17 12z"></path></svg>';
            rotate.style.animation = '';
            playPause.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9 17L17 12 9 7z"></path></svg> ';
            slide.style.animation = ' slideend 5.5s infinite linear';

        }


    }



    trianglePlayOne.onclick = function() {

        if (audio.paused) {

            songName.textContent = nameList[1];
            artistName.textContent = artistList[1];
            songImg.src = imgList[1];
            audio.src = songList[1];
            audio.play();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg>';
            playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg> ';
            rotate.style.animation = 'rotate 6.5s infinite linear';
            slide.style.animation = ' slide 5.5s infinite';
        } else {
            audio.pause();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M7 6L7 18 17 12z"></path></svg>';
            rotate.style.animation = '';
            playPause.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9 17L17 12 9 7z"></path></svg> ';
            slide.style.animation = ' slideend 5.5s infinite linear';

        }


    }


    trianglePlayTwo.onclick = function() {

        if (audio.paused) {

            songName.textContent = nameList[2];
            artistName.textContent = artistList[2];
            songImg.src = imgList[2];
            audio.src = songList[2];
            audio.play();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg>';
            playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M8 7H11V17H8zM13 7H16V17H13z"></path></svg> ';
            rotate.style.animation = 'rotate 6.5s infinite linear';
            slide.style.animation = ' slide 5.5s infinite';
        } else {
            audio.pause();
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M7 6L7 18 17 12z"></path></svg>';
            rotate.style.animation = '';
            playPause.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill:#ff5500;transform:;-ms-filter:"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9 17L17 12 9 7z"></path></svg> ';
            slide.style.animation = ' slideend 5.5s infinite linear';

        }


    }


    bars.onclick = function() {
        songDrop.classList.toggle('bartoggle');
    }

    collapse.onclick = function() {
        songDrop.classList.remove('bartoggle');
    }