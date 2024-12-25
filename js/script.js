const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
let currentPlayer = "X"

function rendorBoard() {
   const allBoxes = document.querySelectorAll('.box')
   
   allBoxes.forEach((boxElement, i) => {
    if (board[i] == "O") {
        boxElement.innerHTML = '<img src="./img/O.png" height="50px"/>'
    }
    else if (board[i] === "X") {
        boxElement.innerHTML = '<img src="./img/X.png" height="50px"/>'
    }
    else {
        boxElement.innerHTML = ""
    }
   });
}
rendorBoard()

function selectBox(boxNumber) {
    if (board[boxNumber] !== -1) {
        alert("Invalid Move..!")
        return 
    }

    board[boxNumber] = currentPlayer
    if (currentPlayer === "X") {
        currentPlayer = "O"
        document.getElementById("currentPlayer").innerHTML = '<img src="./img/O.png" height="15px">'
    } else {
        currentPlayer = "X"
        document.getElementById("currentPlayer").innerHTML = '<img src="./img/X.png" height="15px">'
    }
    rendorBoard()
}