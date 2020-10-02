// - DRAWING

const gridSize = 20; // - (en pixels)
const speed = 10; // - (en images par secondes)

const canvasElement = document.querySelector('.Canvas');
const context = canvasElement.getContext('2d');
const scoreElement = document.querySelector('.Score');
const gameOverElement = document.querySelector('.GameOver');

const snake = new Snake(canvasElement, gridSize);
const fruit = new Fruit(canvasElement, gridSize);

const displayScore = (totalFruits) => {
    scoreElement.innerHTML = `${totalFruits} fruit${totalFruits > 1 ? 's' : ''}`;
    
    if (totalFruits >= 1 && totalFruits < 30) {
        scoreElement.innerHTML += ' 😋';
    }
    
    if (totalFruits >= 30) {
        scoreElement.innerHTML += ' 🤩';
    }
};

const displayGameOver = () => {
    gameOverElement.style.display = 'block';
}

window.addEventListener('keydown', (e) => {
    const direction = e.key.replace('Arrow', '');
    snake.setDirection(direction);
});

const mainRoutine = window.setInterval(() => {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);

    fruit.draw();
    snake.draw();

    try {
        snake.update();
    } catch (error) {
        displayGameOver();
        clearInterval(mainRoutine);
    }

    if (snake.eat(fruit)) {
        fruit.changeLocation(snake);
        displayScore(snake.totalFruits);
    }
}, (1 / speed) * 1000);
