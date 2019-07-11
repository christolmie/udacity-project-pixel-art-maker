// Select color input
// This is used to color the background of the grid cells
const colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;

colorPicker.addEventListener('change', function() {
    color = colorPicker.value;
});

// Select size input
// These values gridHeight and gridWidth are used to make the grid
// inputHeight and inputWeight are used to attache the event listeners
// gridHeight and gridWidth are used by makeGrid() to build the grid
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
let gridHeight = inputHeight.value;
let gridWidth = inputWidth.value

// Select the submit button
// This is used to attach an eventListener to the submit button
const submit = document.getElementById('sizePicker');

// Event listener that listens for changes to the Grid Height
// Read the new height and redraw the grid
// Every time the height of the grid is changed, we redraw the grid
// to clear it and set it to the new size
inputHeight.addEventListener('change', function() {
    gridHeight = inputHeight.value;
    makeGrid(gridHeight, gridWidth);
})

// Event listener for changes to the Grid Width
// Read the new width and redraw the grid
// Same as for the inputHeight. We need to redraw the grid every time
// the width of the grid is changed.
inputWidth.addEventListener('change', function() {
    gridWidth = inputWidth.value;
    makeGrid(gridHeight, gridWidth);
})

// When size is submitted by the user, call makeGrid() to clear the grid
// We need to prevent the default behaviour so that the whole page does not
// get reset.
submit.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
})


/*
 * @description Build a grid on the page as a table of cells.
 * This doesn't add the table, but populates an existing table with cells.
 *
 * An event listener is defined for the table to catch clicks on
 * child TD elements and sets the backgroud color.
 *
 * @param {integer} gridHeight - The number of rows in the grid
 * @param {integer} gridWidth - The nimber of columns in the grid
 */

function makeGrid(height, width) {
    // Find the table element
    const table = document.getElementById('pixelCanvas');
    const maxSize = 50;

    // Limit check to prevent the page from attempting to draw a gird that
    // exceeds the max dimensions set by the input tags in the index.html
    // file.
    if (height > 50) {
        height = 50;
    }

    if (width > 50) {
        width = 50;
    }
    // Remove any existing cells in the table element so that
    // a new grid can be build.
    // Removing each child element as a while loop was chosen because it
    // is faster than using Element.innerHTML
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Build the table
    for (let row = 0; row < height; row++) {
        newRow = table.insertRow(-1);
        for (let col = 0; col < width; col++) {
            newCell = newRow.insertCell(col);
        }
    }

    // Define the listeners for each cell by associating the
    // 'click' EventListener to the table and matching against clicks on
    // TD elements. This avoids defining an event listener for every cell.
    table.addEventListener('click', function(event) {
        if (event.target.nodeName === 'TD') {
            event.target.style.backgroundColor = color;
        }
    })
}
