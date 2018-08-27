let cells = document.querySelectorAll('.cell');
let x_win_cnt = 0;
let o_win_cnt = 0;

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

cells.forEach(function (cell) {
    cell.addEventListener('click', cellClicked)
})



function cellClicked(e) {
    // if (e.target.textContent != '') {

    // }
    var x_letter_count = 0;
    var o_letter_count = 0;
    for (var x = 0; x < cells.length; x++) {
        if (cells[x].textContent == 'X') {
            x_letter_count++;
        } else if (cells[x].textContent == 'O') {
            o_letter_count++;
        }

    }
    if (x_letter_count == o_letter_count) {
        e.target.textContent = 'X';
    } else {
        e.target.textContent = 'O';
    }

    checkWinConditions();

}

function checkWinConditions() {
    for (var h = 0; h < winConditions.length; h++) {
        x_win_cnt = 0;
        o_win_cnt = 0;
        for (var i = 0; i < winConditions[h].length; i++) {
                if (cells[winConditions[h][i]].textContent == 'X') {
                    console.log(cells[winConditions[h][i]].textContent)
                    x_win_cnt++;
                    if (x_win_cnt == 3) {
                        alert("X wins!");
                        return;
                    }
                } else if (cells[winConditions[h][i]].textContent == 'O') {
                    o_win_cnt++;
                    if (o_win_cnt == 3) {
                        alert("O wins!");
                        return;
                    }
                }
            }
        }
    }










