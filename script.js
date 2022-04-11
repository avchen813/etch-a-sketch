const mainContainer = document.querySelector('.main-container');
const root = document.documentElement;


let gridNumberOfColumns = prompt('How many columns would you like your grid to have?');
appendCells();
// Set number of columns based on gridNumberOfColumns value
root.style.setProperty('--number-of-columns', gridNumberOfColumns);



function changeColor(cell) {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', event => {
            root.style.setProperty('--r-color-value', Math.floor(Math.random()*256));
            root.style.setProperty('--g-color-value', Math.floor(Math.random()*256));
            root.style.setProperty('--b-color-value', Math.floor(Math.random()*256));
            cell.classList.add('cell-color');
        })
    })
}


// Create and append cells to container based on gridNumberOfColumns value
function appendCells () {
    for (i = 0; i < Math.pow(gridNumberOfColumns, 2); i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        mainContainer.appendChild(cell);    
    }

    changeColor();
}
