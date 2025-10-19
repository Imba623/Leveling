const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');
let intervalID;
let secondsRemaining = 10; // 25 минут * 60 секунд

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
        timerElement.textContent = formatTime(secondsRemaining);
    } else {
        clearInterval(intervalID); // Остановка таймера
        alert("Время вышло!");
    }
}

// Запускаем таймер
startButton.addEventListener('click', () => {
    intervalID = setInterval(updateTimer, 1000);
});

// Пауза таймера
pauseButton.addEventListener('click', () => {
    clearInterval(intervalID);
});

// Сбрасываем таймер
resetButton.addEventListener('click', () => {
    clearInterval(intervalID);
    secondsRemaining = 10;
    timerElement.textContent = formatTime(secondsRemaining);
});