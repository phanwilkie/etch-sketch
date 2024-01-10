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
            //check color mode
            if (gridContainer.getAttribute('colorMode') === "0") {
                cell.style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
            } else {
            //if color
                const randomColor = getColor();
                if (cell.getAttribute('colorchanged') === "0") {
                    cell.style.backgroundColor = `${randomColor}`; 
                    cell.setAttribute('colorChanged',1);
                };
            }
        });
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
const gridContainer = document.querySelector('.grid-container');
toggleButton.addEventListener('change', function() {
    if (toggleButton.checked) {
        gridContainer.setAttribute('colorMode',1);
        //reset colors
    } else {
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.setAttribute('colorMode',0);
        //reset colors

    };
});

//need to delete all the background color when toggled
//if on update property to 1

//if off update property to 0


//initialise grid with the default value
createGrid(16);

//reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
    window.location.reload()});


//to do
//random colour effect instead of black
function getColor() {
    const randomNumber1 = Math.floor(Math.random()*256);
    const randomNumber2 = Math.floor(Math.random()*256);
    const randomNumber3 = Math.floor(Math.random()*256);
    const randomColor = 'rgb('+randomNumber1+', '+randomNumber2+', '+randomNumber3+')';
    return randomColor;
}

function darkenColor() {
    //convert string into numbers
    //increase darkness
    //parse new rgb value
    //on click only
}

//darkening effect from 10-100%

