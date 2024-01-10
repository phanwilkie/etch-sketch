//function grid with same number of rows and columns based on argument
function createGrid(gridNumber) {
    const gridContainer = document.querySelector('.grid-container');

    //create number of rows based on argument
    for (i = 1; i < (gridNumber + 1); i++) {
        const gridRow = document.createElement('div');
        const gridRowNo = 'grid-row grid-row-'+i;

        gridRow.setAttribute('class',gridRowNo);
        gridContainer.appendChild(gridRow);

        //for each row, create the same number of columns
        for (let j = 0; j < gridNumber; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.className = 'grid-column grid-column-'+(j+1);
            columnDiv.setAttribute('colorchanged',0);
            gridRow.appendChild(columnDiv);
        };
    };

    //Add event listener on mouseenter for each div column element of each row
    const cells = document.querySelectorAll('.grid-column');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            //if color mode paint it black
            if (gridContainer.getAttribute('colorMode') === "0") {
                if (cell.getAttribute('colorchanged') === "0") { 
                    cell.style.backgroundColor = 'rgb(' + 230 + ',' + 230 + ',' + 230 + ')';
                    cell.setAttribute('colorChanged',1);
                }
            } else {
            //if color paint it with rainbow
                const randomColor = getColor();
                if (cell.getAttribute('colorchanged') === "0") {
                    cell.style.backgroundColor = `${randomColor}`; 
                    cell.setAttribute('colorChanged',1);
                };
            }
        });
    });

    // //Add event listener for mouse click to darken the color
    cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (gridContainer.getAttribute('colorMode') === "0") {
                    if (cell.style.backgroundColor != 'rgb(0, 0, 0)') {
                    cell.style.backgroundColor = darkenColor(cell.style.backgroundColor);
                    };                   
                };
                })
            });
};

//Add event listener to the input element
const inputElement = document.getElementById('rowsColumns');
inputElement.addEventListener('input', function () {
    //reset the grid before re-rendering based on input
    const selectedGridRows = document.querySelectorAll('.grid-row');
    selectedGridRows.forEach(row => {
        row.remove();
    });

    const value = parseInt(inputElement.value, 10);
    if (!isNaN(value) && value >= 16 && value <= 100) {
        // Call createGrid with the input value for both rows and columns
        createGrid(value);
    }
});

//Add event listener to toggle between mono/color mode & append grind-container's property
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('change', function() {
    const gridContainer = document.querySelector('.grid-container');
    const resetColumns = document.querySelectorAll('.grid-column')

    resetColumns.forEach(column => {
        column.setAttribute('colorchanged','0');
        column.removeAttribute('style');
    });
    if (toggleButton.checked) {
        gridContainer.setAttribute('colorMode',1);
        
    } else {
        gridContainer.setAttribute('colorMode',0);
    };
});

//initialise grid with the default value
createGrid(16);

//reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
    window.location.reload()});


//random colour effect instead of black
function getColor() {
    const randomNumber1 = Math.floor(Math.random()*256);
    const randomNumber2 = Math.floor(Math.random()*256);
    const randomNumber3 = Math.floor(Math.random()*256);
    const randomColor = 'rgb('+randomNumber1+', '+randomNumber2+', '+randomNumber3+')';
    return randomColor;
}

function darkenColor(originalColor) {
    const oldColor = originalColor;
    const numbersArray = oldColor.match(/\d+/g).map(Number);
    const newNumbersArray = numbersArray.map(number => Math.round(number - (230/9)));
    const newColor = 'rgb(' + newNumbersArray[0] + ', ' + newNumbersArray[1] + ', ' + newNumbersArray[2] + ')';
    return newColor;
};