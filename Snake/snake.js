class Snake {
    canvasSize;
    context;
    gridSize = 10;
    x = 0;
    y = 0;
    move = { x: 1, y: 0 };
    direction = 'Left';

    totalFruits = 0;
    tail = [];

    constructor(canvas, gridSize) {
        this.canvasSize = { width: canvas.width, height: canvas.height };
        this.context = canvas.getContext('2d');
        this.gridSize = gridSize;
    }

    draw() {
        this.context.fillStyle = '#55da97';

        this.context.fillRect(this.x, this.y, gridSize, gridSize);

        this.tail.forEach(({ x, y }) => {
            this.context.fillRect(x, y, gridSize, gridSize);
        });
    }

    updateTail() {
        this.tail = Array.from({ length: this.totalFruits }, (t, index) => {
            if (this.tail[index + 1]) {
                return { ...this.tail[index + 1] };
            }
            return { x: this.x, y: this.y };
        });
    }

    update() {
        this.updateTail();

        this.x += this.move.x * this.gridSize;
        this.y += this.move.y * this.gridSize;

        this.checkSelfCollision();

        const { width, height } = this.canvasSize;
        if (this.x > (width - this.gridSize)) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = width;
        }
   
        if (this.y > (height - this.gridSize)) {
            this.y = 0;
        }
   
        if (this.y < 0) {
            this.y = height;
        }
    }

    setDirection(direction) {
        if (direction === this.direction) {
            return;
        }

        switch(direction) {
            case 'Up':
                if (this.direction === 'Down') {
                    break;
                }
                this.move.x = 0;
                this.move.y = -1;
                break;
            case 'Right':
                if (this.direction === 'Left') {
                    break;
                }
                this.move.x = 1;
                this.move.y = 0;
                break;
            case 'Down':
                if (this.direction === 'Up') {
                    break;
                }
                this.move.x = 0;
                this.move.y = 1;
                break;
            case 'Left':
                if (this.direction === 'Right') {
                    break;
                }
                this.move.x = -1;
                this.move.y = 0;
                break;
        }

        this.direction = direction;
    }

    eat(fruit) {
        const isEating = (this.x === fruit.x && this.y === fruit.y);
        if (isEating) {
            this.totalFruits += 1;
        }
        return isEating;
    }

    checkSelfCollision() {
        const isColliding = this.tail.some(({ x, y }) => (
            x === this.x && y === this.y
        ));

        if (isColliding) {
            throw new Error('Collision!');
        }
    }
}
