class Fruit {
    context;
    gridSize = 10;
    x;
    y;
    rows;
    cols;

    constructor(canvas, gridSize) {
        this.context = canvas.getContext('2d');
        this.gridSize = gridSize;
        
        this.rows = canvas.height / gridSize;
        this.cols = canvas.width / gridSize;

        this.changeLocation();
    }

    draw(snake) {
        const centerX = this.x + (gridSize / 2);
        const centerY = this.y + (gridSize / 2);
        const radius = gridSize / 1.8;

        this.context.beginPath();
        this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = '#ff0000';
        this.context.fill();
    }

    changeLocation(snake) {
        this.x = (Math.floor(Math.random() * this.rows - 1) + 1) * this.gridSize;
        this.y = (Math.floor(Math.random() * this.cols - 1) + 1) * this.gridSize;

        if (!snake) {
            return;
        }
        
        const isColliding = snake.tail.some(({ x, y }) => (
            this.x === x && this.y === y
        )) || (this.x === snake.x && this.y === snake.y);

        if (isColliding) {
            this.changeLocation();
        }
    }
}
