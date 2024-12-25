const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]

function rendorBoard() {
   const allBoxes = document.querySelectorAll('.box')
   
   allBoxes.forEach((boxElement, i) => {
    if (board[i] === "X") {
        boxElement.innerHTML = "X"
    }
    else if (board[i] === "O") {
        boxElement.innerHTML = "O"
    }
    else {
        boxElement.innerHTML = ""
    }
   });
}
rendorBoard()