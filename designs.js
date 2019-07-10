// Select color input
var colorPicker = document.getElementById('colorPicker');
var color = colorPicker.value;

colorPicker.addEventListener('change', function() {
    color = colorPicker.value;
});

// Select size input
var inputHeight = document.getElementById('inputHeight');
var inputWidth = document.getElementById('inputWidth');
var gridHeight = inputHeight.value
var gridWidth = inputWidth.value

var submit = document.getElementById('sizePicker');

inputHeight.addEventListener('change', function () {
    gridHeight = inputHeight.value
    makeGrid(gridHeight, gridWidth)
})

inputWidth.addEventListener('change', function () {
    gridWidth = inputWidth.value
    makeGrid(gridHeight, gridWidth)
})

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
})


// Your code goes here!

function makeGrid(height, width) {
    table = document.getElementById('pixelCanvas');

    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }

    for (row = 0; row < gridHeight; row++) {
        newRow = table.insertRow(-1);
        for (col = 0; col < gridWidth; col++) {
            newCell = newRow.insertCell(col);
            }
        }

    table.querySelectorAll('td')
    .forEach(cell => cell.addEventListener('click', function() {
        cell.style.backgroundColor = color;
    }));
}
