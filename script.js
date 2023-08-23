var slideIndex = 1;
var playPause = true;
var timerVar;
var scrubberVar;
var intervalDuration = 5000;
var i = 0;
const presentationSize = document.getElementsByClassName("mySlides").length;
const playPauseButtonIcon = document.getElementById("play-pause-icon");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timerVar);
  clearInterval(scrubberVar);
  showSlides((slideIndex += n));
}

function playPauseHandler() {
  playPause = !playPause;
  if (playPause) {
    playPauseButtonIcon.className = "fa fa-pause";
    showSlides(slideIndex);
  } else {
    playPauseButtonIcon.className = "fa fa-play";
    clearTimeout(timerVar);
    clearInterval(scrubberVar);
    document.getElementById("myBar").style.width = "0%";
  }
}

function autoplay() {
  showSlides((slideIndex += 1));
}

function moveScrubber(barFill) {
  if (barFill == 0) {
    clearInterval(scrubberVar);
    barFill = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var progBarInterval = intervalDuration / 100;
    scrubberVar = setInterval(frame, progBarInterval);
    function frame() {
      if (width >= 100 || !playPause) {
        elem.style.width = "0%";
        clearInterval(scrubberVar);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slideNumber = document.getElementById("slide-number");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideNumber.innerHTML = slideIndex + " / " + presentationSize;
  slides[slideIndex - 1].style.display = "block";

  if (playPause) {
    timerVar = setTimeout(autoplay, intervalDuration);
    moveScrubber(0);
  }
}
