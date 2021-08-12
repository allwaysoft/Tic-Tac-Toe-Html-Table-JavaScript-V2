// Function called whenever user tab on any box
gameover = 0;
function myfunc() {

    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").innerText;
    b2 = document.getElementById("b2").innerText;
    b3 = document.getElementById("b3").innerText;
    b4 = document.getElementById("b4").innerText;
    b5 = document.getElementById("b5").innerText;
    b6 = document.getElementById("b6").innerText;
    b7 = document.getElementById("b7").innerText;
    b8 = document.getElementById("b8").innerText;
    b9 = document.getElementById("b9").innerText;
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if (b1 === 'X' && b2 === 'X' && b3 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b1 === 'X' && b4 === 'X' && b7 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b7 === 'X' && b8 === 'X' && b9 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b3 === 'X' && b6 === 'X' && b9 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b1 === 'X' && b5 === 'X' && b9 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b3 === 'X' && b5 === 'X' && b7 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b2 === 'X' && b5 === 'X' && b8 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    } else if (b4 === 'X' && b5 === 'X' && b6 === 'X') {
        document.getElementById('print')
                .innerHTML = "Player X won";
        window.alert('Player X won');
        gameover = 1;
    }

    // Checking of Player X finsh
    // Checking for Player O starts, Is player O won or
    // not and after that disabled all the other fields
    else if (b1 === 'O' && b2 === 'O' && b3 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b1 === 'O' && b4 === 'O' && b7 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b7 === 'O' && b8 === 'O' && b9 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b3 === 'O' && b6 === 'O' && b9 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b1 === 'O' && b5 === 'O' && b9 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b3 === 'O' && b5 === 'O' && b7 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b2 === 'O' && b5 === 'O' && b8 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    } else if (b4 === 'O' && b5 === 'O' && b6 === 'O') {
        document.getElementById('print')
                .innerHTML = "Player O won";
        window.alert('Player O won');
        gameover = 1;
    }

    // Checking of Player O finsh
    // Here, Checking about Tie
    else if ((b1 === 'X' || b1 === 'O') && (b2 === 'X'
            || b2 === 'O') && (b3 === 'X' || b3 === 'O') &&
            (b4 === 'X' || b4 === 'O') && (b5 === 'X' ||
            b5 === 'O') && (b6 === 'X' || b6 === 'O') &&
            (b7 === 'X' || b7 === 'O') && (b8 === 'X' ||
            b8 === 'O') && (b9 === 'X' || b9 === 'O')) {
        document.getElementById('print')
                .innerHTML = "Match Tie";
        window.alert('Match Tie');
        gameover = 1;
    } else {

        // Here, Printing Result
        if (flag === 1) {
            document.getElementById('print')
                    .innerHTML = "Player X Turn";
        } else {
            document.getElementById('print')
                    .innerHTML = "Player O Turn";
        }
    }
}

// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').innerText = '';
    document.getElementById("b2").innerText = '';
    document.getElementById("b3").innerText = '';
    document.getElementById("b4").innerText = '';
    document.getElementById("b5").innerText = '';
    document.getElementById("b6").innerText = '';
    document.getElementById("b7").innerText = '';
    document.getElementById("b8").innerText = '';
    document.getElementById("b9").innerText = '';
    gameover = 0;
}

// Here onwards, functions check turn of the player
// and put accordingly innerText X or O
flag = 1;

function place(id) {
    if (gameover === 0) {
        if (flag === 1) {
            if (document.getElementById(id).innerText === '') {
                document.getElementById(id).innerText = "X";
                flag = 0;
            }
        } else {
            if (document.getElementById(id).innerText === '') {
                document.getElementById(id).innerText = "O";
                flag = 1;
            }
        }
    }
}
