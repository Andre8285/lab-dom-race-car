class Game {
    // code to be added
    constructor (){
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "./images/car.png"); // so the car is in the center and not the left side of the car in the center
        this.height = 600;      // <-- could be directly in px, but makes it hard to use them later if we want to create some game logic
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.loadingObstacle = false;
    }
    start(){
        // Define height and width of game screen
        this.gameScreen.style.height = `${this.height}px`;  // <-- this way, we can use this later for making in-game changes on the with, if we wish
        this.gameScreen.style.width = `${this.width}px`;
        // Hide Game Intro Screen
        this.startScreen.style.display = "none";    // visibility property also duable, but display is better
        // Show the Game Screen
        this.gameScreen.style.display = "block";
        // Start the Game
        this.gameLoop();
    }
    gameLoop(){
        if (this.gameIsOver){
            return;             // since return stops the function...
        }
        this.update();          // keeps updating the screen with the gameLoop function
        window.requestAnimationFrame(() => this.gameLoop()); // window (grabs the window of the browser) requestAnimationFrame (keeps the selected function running)
    }
    update(){
        this.player.move()
        for (let i = 0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();
        // Check for Collision
        if (this.player.didCollide(obstacle)){
            obstacle.element.remove();
            this.obstacles.splice(i, 1);
            this.lives--;
        } else if (obstacle.top > this.height){
            this.score++;
            obstacle.element.remove();
            this.obstacles.splice(i, 1);
        }
    }
        if (this.lives === 0){
            this.endGame();
        }
        if (!this.obstacles.length && !this.loadingObstacle){
            this.loadingObstacle = true;
            setTimeout(() => {
                this.obstacles.push(new Obstacle(this.gameScreen));
                this.loadingObstacle = false;
            }, 500)
        }
        let score = document.getElementById("score");
        let lives = document.getElementById ("lives");
        score.innerHTML = this.score;
        lives.innerHTML = this.lives;
    }
    endGame(){
        this.gameIsOver = true;
        this.player.element.remove();
        this.obstacles.forEach(obstacle =>{
            obstacle.element.remove();
        });
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}






















