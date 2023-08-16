// 定义图片路径数组
const images = [
    "images/IMG_0145.JPG",
    "images/IMG_0146.JPG",
    "images/IMG_0147.JPG",
    "images/IMG_0148.JPG",
    "images/IMG_0166.JPG"
];

// 获取页面元素
const image = document.getElementById('image');
const playButton = document.getElementById('play-button');
const progressBar = document.getElementById('progress-bar');

let isPlaying = false; // 标志变量，用于判断是否正在播放
let progressInterval; // 用于存储进度条更新的间隔
let currentImageIndex = 0; // 当前显示的图片索引

// 点击播放按钮切换播放状态
playButton.addEventListener('click', togglePlay);

// 进度条拖动事件，更新图片和进度
progressBar.addEventListener('input', updateProgress);

// 播放按钮切换函数
function togglePlay() {
    if (isPlaying) {
        clearInterval(progressInterval); // 停止进度条更新
        playButton.textContent = '▶'; // 切换按钮文本为播放符号
    } else {
        progressInterval = setInterval(updateProgressBar, 1000); // 每秒更新进度
        playButton.textContent = '||'; // 切换按钮文本为暂停符号
    }
    isPlaying = !isPlaying; // 切换播放状态
}

// 更新进度条和图片
function updateProgressBar() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // 更新图片索引
    progressBar.value = currentImageIndex; // 更新进度条值
    updateImage(); // 更新显示的图片
}

// 进度条拖动事件，更新图片
function updateProgress() {
    clearInterval(progressInterval); // 停止进度条更新
    currentImageIndex = parseInt(progressBar.value); // 根据进度条值更新图片索引
    updateImage(); // 更新显示的图片
}

// 更新显示的图片
function updateImage() {
    image.src = images[currentImageIndex]; // 更新图片元素的 src 属性
}

// 初始化页面，显示第一张图片
updateImage();
