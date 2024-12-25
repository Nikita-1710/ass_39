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
    rendorBoard()

    if (currentPlayer === "X") {
        currentPlayer = "O"
        document.getElementById("currentPlayer").innerHTML = '<img src="./img/O.png" height="15px">'
    } else {
        currentPlayer = "X"
        document.getElementById("currentPlayer").innerHTML = '<img src="./img/X.png" height="15px">'
    }
    chkWinner()
}

function isPlayerPresent(places, player) {
   const a = places[0]
   const b = places[1]
   const c = places[2]
   if(board[a] == player && board[b] == player && board[c] == player) {
    return true
   } else {
    return false
   }
}

function chkWinner() {
    /*
        Winning Positions
        0,1,2
        3,4,5
        6,7,8
        0,3,6
        1,4,7
        2,5,8
        0,4,8
        2,4,6
    */
   if (isPlayerPresent([0,1,2], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([3,4,5], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([6,7,8], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([0,3,6], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([1,4,7], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([2,5,8], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([0,4,8], "X")) {
    alert("Player X wins")
   } else if (isPlayerPresent([2,4,6], "X")) {
    alert("Player X wins")
   } 

   if (isPlayerPresent([0,1,2], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([3,4,5], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([6,7,8], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([0,3,6], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([1,4,7], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([2,5,8], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([0,4,8], "O")) {
    alert("Player O wins")
   } else if (isPlayerPresent([2,4,6], "O")) {
    alert("Player O wins")
   } 
}

function resetGame() {
    board.fill(-1)
    rendorBoard()
    currentPlayer = "X"
    document.getElementById("currentPlayer").innerHTML = '<img src="./img/X.png" height="15px">'
}