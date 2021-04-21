const gameBoard = document.querySelector(".game-board")

class Game {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    start(){
        const box = gameBoard.getContext('2d')

        box.fillStyle = this.color
        box.fillRect(10, 10, 50, 30);
    }
    
}