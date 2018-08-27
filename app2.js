let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener('click',cellClicked)
})

function cellClicked(e) {
    var x_letter_count = 0;
    var o_letter_count = 0;
    for (var x = 0; x < cells.length; x++) {
        if (cells[x].textContent == 'X') {
            x_letter_count++;
            console.log(x);
        } else if (cells[x].textContent == 'O') {
            o_letter_count++;
            console.log(x);
        }

    }
    if (x_letter_count == o_letter_count) {
        e.target.textContent = 'X';
        console.log(x_letter_count);
    } else {
        e.target.textContent = 'O';
    }
    
}

console.log(cells);

