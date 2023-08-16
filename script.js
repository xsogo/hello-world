const images = [
    "images/IMG_0145.JPG",
    "images/IMG_0146.JPG",
    "images/IMG_0147.JPG",
    "images/IMG_0148.JPG",
    "images/IMG_0166.JPG"
];


const image = document.getElementById('image');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const progressBar = document.getElementById('progress-bar');

let isPlaying = false;
let progressInterval;
let currentImageIndex = 0;

playButton.addEventListener('click', togglePlay);
pauseButton.addEventListener('click', togglePlay);
progressBar.addEventListener('input', updateProgress);

function togglePlay() {
    if (isPlaying) {
        clearInterval(progressInterval);
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    } else {
        progressInterval = setInterval(updateProgressBar, 1000);
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    }
    isPlaying = !isPlaying;
}

function updateProgressBar() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    progressBar.value = currentImageIndex;
    updateImage();
}

function updateProgress() {
    clearInterval(progressInterval);
    currentImageIndex = parseInt(progressBar.value);
    updateImage();
}

function updateImage() {
    image.src = images[currentImageIndex];
}
