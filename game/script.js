document.addEventListener('DOMContentLoaded', () => {
    const stack = document.getElementById('stack');
    const startButton = document.getElementById('startButton');
    let isPlaying = false;
    let position = 0;
    let speed = 1;

    function moveStack() {
        position += speed;
        stack.style.bottom = position + 'px';

        if (position >= 600) {
            endGame();
        }
    }

    function endGame() {
        isPlaying = false;
        clearInterval(gameInterval);
        alert('Game Over! Stack height: ' + position + 'px');
    }

    let gameInterval;

    startButton.addEventListener('click', () => {
        if (!isPlaying) {
            isPlaying = true;
            position = 0;
            stack.style.bottom = position + 'px';
            gameInterval = setInterval(moveStack, 20);
        }
    });
});
