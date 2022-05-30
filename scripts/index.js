class gridGame
{

    constructor(grid, colors, level, difficulty, timer, name, scoreboard)
    {
        this.grid = grid;
        this.colors = colors;
        this.level = level;
        this.difficulty = difficulty;
        this.timer = timer;
        this.name = name;
        this.scoreboard = scoreboard;
    }

    createGrid()
    {
        if (this.difficulty === 1) {
            let gridSize = 5;

            for (let i = 0; i < gridSize; i++) {
                let row = document.createElement("tr");
                this.grid.appendChild(row);
                for (let j = 0; j < gridSize; j++) {
                    let cell = document.createElement("td");
                    row.appendChild(cell);
                }
            }
        } else if (this.difficulty === 2) {
            let gridSize = 6;

            for (let i = 0; i < gridSize; i++) {
                let row = document.createElement("tr");
                this.grid.appendChild(row);
                for (let j = 0; j < gridSize; j++) {
                    let cell = document.createElement("td");
                    row.appendChild(cell);
                }
            }
        } else {
            let gridSize = 8;

            for (let i = 0; i < gridSize; i++) {
                let row = document.createElement("tr");
                this.grid.appendChild(row);
                for (let j = 0; j < gridSize; j++) {
                    let cell = document.createElement("td");
                    row.appendChild(cell);
                }
            }
        }

    }

}

let grid = document.querySelector("#grid-table")

let game = new gridGame(grid, 0, 0, 1, 0, 0, 0);
game.createGrid();