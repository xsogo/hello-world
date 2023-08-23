var slideIndex = 0; // Start from the first image
var playPause = true;
var timerVar;
var intervalDuration = 5000; // Interval between slide changes (milliseconds)
var images = [
    "IMG_0145.JPG",
    "IMG_0146.JPG",
    "IMG_0147.JPG",
    "IMG_0148.JPG"
]; // List of image file names

showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timerVar);
    showSlides((slideIndex += n));
}

function playPauseHandler() {
    playPause = !playPause;
    var playPauseButtonIcon = document.getElementById("play-pause-icon");
    
    if (playPause) {
        playPauseButtonIcon.className = "fa fa-pause";
        showSlides(slideIndex);
    } else {
        playPauseButtonIcon.className = "fa fa-play";
        clearTimeout(timerVar);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n >= images.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = images.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
    
    if (playPause) {
        timerVar = setTimeout(function () {
            plusSlides(1);
        }, intervalDuration);
    }
}
