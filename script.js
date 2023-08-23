var slideIndex = 1;
var playPause = true;
var timerVar;
var scrubberVar;
var intervalDuration = 5000;
var i = 0;
var presentationSize = 0;
const playPauseButtonIcon = document.getElementById("play-pause-icon");

// Fetch GitHub API to get the list of image files
fetch("https://api.github.com/repos/your-username/your-repo/contents/images")
    .then(response => response.json())
    .then(data => {
        presentationSize = data.length;
        showSlides(slideIndex, data);
    })
    .catch(error => {
        console.error("Error fetching image file list:", error);
    });

// Rest of your script.js code...
