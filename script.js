
const masterPlay = document.getElementById('masterPlay');
const progressBar = document.getElementById('progressBar');


masterPlay.addEventListener('click', () => {
    if (masterPlay.classList.contains('fa-circle-play')) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        startProgress();
    } else {
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        stopProgress();
    }
});

let progressInterval;
let width = 30; 

function startProgress() {
    progressInterval = setInterval(() => {
        if (width >= 100) {
            width = 0; 
        } else {
            width += 0.5;
            progressBar.style.width = width + "%";
        }
    }, 100); 
}

function stopProgress() {
    clearInterval(progressInterval);
}