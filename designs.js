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

// Select the submit button
var submit = document.getElementById('sizePicker');

// Event listener for changes to the Grid Height
// Read the new height and redraw the grid
inputHeight.addEventListener('change', function () {
    gridHeight = inputHeight.value
    makeGrid(gridHeight, gridWidth)
})

// Event listener for changes to the Grid Width
// Read the new width and redraw the grid
inputWidth.addEventListener('change', function () {
    gridWidth = inputWidth.value
    makeGrid(gridHeight, gridWidth)
})

// When size is submitted by the user, call makeGrid()
// Prevent the default behaviour and redraw the grid
submit.addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
})


// Your code goes here!

function makeGrid(height, width) {
    // Fidn the table element
    table = document.getElementById('pixelCanvas');

    // Remove any existing child elements in the table element
    while (table.firstChild) {
        table.removeChild(table.firstChild)
    }

    // Build the table
    for (row = 0; row < gridHeight; row++) {
        newRow = table.insertRow(-1);
        for (col = 0; col < gridWidth; col++) {
            newCell = newRow.insertCell(col);
            }
        }

    // Define the listeners for each cell
    table.querySelectorAll('td')
    .forEach(cell => cell.addEventListener('click', function() {
        cell.style.backgroundColor = color;
    }));
}
