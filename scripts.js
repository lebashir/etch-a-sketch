let gridSide = 16;



function createGrid(num) {
    let grid = document.querySelector('#grid');
    let entries = num * num;
    
    
    for (var i = 0; i < entries; i++) { 
        let square = document.createElement('div');
        grid.style.gridTemplateColumns=`repeat(${num}, 1fr)`;
        grid.style.gridTemplateRows=`repeat(${num}, 1fr)`;    
        grid.appendChild(square);
        square.setAttribute('style', 'background: white;outline: 1px solid black');
        square.setAttribute('id', 'square');
    }
    const squares = document.querySelectorAll('#square');

    squares.forEach((square)=> {
        square.addEventListener('mouseenter',(e) => {
            let rColor = Math.floor(Math.random() * 255);
            let gColor = Math.floor(Math.random() * 255);
            let bColor = Math.floor(Math.random() * 255);
            e.target.style.background = `rgb(${rColor}, ${gColor},${bColor}`;
        
        });
    });
}

function resizeGrid() {
    let newSize = prompt("Pick New Grid Size", '16');
    let numberSize = parseFloat(newSize);
    if (numberSize > 100) {
        return "Please pick a size smaller than 100";
    }
    clearGrid();
    createGrid(numberSize);
}
let resizeButton = document.querySelector('#resizeButton');
resizeButton.addEventListener('click', resizeGrid)

function clearGrid() {
    let grid = document.querySelector('#grid');
    grid.innerHTML = "";
    createGrid(gridSide);
}

let resetGrid = document.querySelector('#resetButton');

resetGrid.addEventListener('click', clearGrid);




window.onload= createGrid(gridSide);