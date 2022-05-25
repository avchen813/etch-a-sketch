const mainContainer = document.querySelector(".main-container");
const root = document.documentElement;

let gridSquaresOnEachSide;
createGrid();

function createGrid() {
  gridSquaresOnEachSide = parseInt(prompt(
    "How many squares would you like your grid to have on each side (max. 64)?"
  ));
  
  if (gridSquaresOnEachSide === null) {
    alert("Canceled");
  } else if (gridSquaresOnEachSide > 0 && gridSquaresOnEachSide <= 64 && gridSquaresOnEachSide % 1 === 0) {
    resetGrid();
    appendCells();
  } else {
    alert("Invalid entry. Please enter a whole number from 1 to 64.");
  }
}

function resetGrid() {
  mainContainer.innerHTML = '';
}



// Create and append cells to container based on gridSquaresOnEachSide value
function appendCells() {
  // Set number of squares on each side based on gridSquaresOnEachSide value for CSS grid
  root.style.setProperty("--squares-on-each-side", gridSquaresOnEachSide);

  for (i = 0; i < Math.pow(gridSquaresOnEachSide, 2); i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    mainContainer.appendChild(cell);
  }
  changeColor();
}

function changeColor() {
  let cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (event) => {
      let redValue = Math.floor(Math.random() * 256);
      let greenValue = Math.floor(Math.random() * 256);
      let blueValue = Math.floor(Math.random() * 256);
      cell.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    });
  });
}
