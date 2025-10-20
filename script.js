const timerElement1 = document.getElementById('timer1');
const timerElement2 = document.getElementById('timer2');
const startButton = document.getElementById('startBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');
const sound = document.getElementById('soundFile');

let intervalID;
let secondsRemaining = 3000; // 25 минут * 60 секунд

// Форматируем секунды в минуты и секунды
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Обновляем счётчик времени
function updateTimer() {
    if (secondsRemaining > 0) {
        secondsRemaining--;
        timerElement1.textContent = formatTime(secondsRemaining);
        timerElement2.textContent = formatTime(secondsRemaining);
    } else {
        clearInterval(intervalID); // Остановка таймера
        sound.play();
    }
}

// Запускаем таймер
startButton.addEventListener('click', () => {
    intervalID = setInterval(updateTimer, 1000);
    showNotification()
});

// Пауза таймера
pauseButton.addEventListener('click', () => {
    clearInterval(intervalID);
});

// Сбрасываем таймер
resetButton.addEventListener('click', () => {
    clearInterval(intervalID);
    secondsRemaining = 3000;
    timerElement1.textContent = formatTime(secondsRemaining);
    timerElement2.textContent = formatTime(secondsRemaining);
});

