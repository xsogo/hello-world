const images = [
    "images/IMG_0145.jpg",
    "images/IMG_0146.jpg",
    "images/IMG_0147.jpg",
    "images/IMG_0148.jpg"
];

const image = document.getElementById('image');
const playButton = document.getElementById('play-button');
const progressBar = document.getElementById('progress-bar');

let isPlaying = false;
let progressInterval;
let currentImageIndex = 0;

playButton.addEventListener('click', togglePlay);
progressBar.addEventListener('input', updateProgress);

function togglePlay() {
    if (isPlaying) {
        clearInterval(progressInterval);
        playButton.textContent = 'Play';
    } else {
        progressInterval = setInterval(updateProgressBar, 1000);
        playButton.textContent = 'Pause';
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
