class gridGame
{

    constructor(grid, cells, colors, level, difficulty, timer, name, scoreboard)
    {
        this.grid = grid;
        this.cells = cells;
        this.colors = colors;
        this.level = level;
        this.difficulty = difficulty;
        this.timer = timer;
        this.name = name;
        this.scoreboard = scoreboard;
    }

    randomPath()
    {
        // Generate a random path and return it
        let path = [];
        let pathLength = Math.floor(this.cells / 3 + this.level + 1);

    }

    colorCell(cell)
    {
        if (isClicking) {
            cell.addEventListener("mousemove", () => {
                cell.style.backgroundColor = "#FD6C6C";
                isClicking = true;
            });
        } else {
            cell.addEventListener("mousedown", () => {
                cell.style.backgroundColor = "#FD6C6C";
            });
        }
    }

    createGrid()
    {
        let gridSize = 0;
        if (this.difficulty === 1) {
            gridSize = 5;
        } else if (this.difficulty === 2) {
            gridSize = 6;
        } else {
            gridSize = 8;
        }

        for (let i = 0; i < gridSize; i++) {
            let row = document.createElement("tr");
            this.grid.appendChild(row);
            for (let j = 0; j < gridSize; j++) {
                let cell = document.createElement("td");
                cell.classList.add("cell");
                row.appendChild(cell);
            }
        }

        this.cells = document.querySelectorAll(".cell");
    }

}

let grid = document.querySelector("#grid-table");

let game = new gridGame(grid, 0, 0, 0, 1, 0, 0, 0);
game.createGrid();

let isClicking = false;

game.cells.forEach(cell => {
    game.colorCell(cell);
});
