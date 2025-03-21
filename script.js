const board = document.getElementById("board");
let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];

function createBoard() {
    board.innerHTML = "";
    cells.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = value;
        cell.addEventListener("click", () => makeMove(index));
        board.appendChild(cell);
    });
}

function makeMove(index) {
    if (cells[index] === "" && !checkWinner()) {
        cells[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        createBoard();
        checkWinner();
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            document.getElementById("winner").innerText = `Player ${cells[a]} Wins!`;
            return true;
        }
    }
    
    if (!cells.includes("")) {
        document.getElementById("winner").innerText = "It's a Draw!";
        return true;
    }
    
    return false;
}

function resetGame() {
    cells = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.getElementById("winner").innerText = "";
    createBoard();
}

createBoard();
