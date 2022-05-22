const mainContainer = document.querySelector(".main-container");
const root = document.documentElement;

let gridNumberOfColumns = prompt(
  "How many columns would you like your grid to have?"
);
appendCells();

// Create and append cells to container based on gridNumberOfColumns value
function appendCells() {
  // Set number of columns based on gridNumberOfColumns value for CSS grid
  root.style.setProperty("--number-of-columns", gridNumberOfColumns);

  for (i = 0; i < Math.pow(gridNumberOfColumns, 2); i++) {
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
