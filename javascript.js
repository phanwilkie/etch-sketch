//function grid with same number of rows and columns based on argument
function createGrid(gridNumber) {
    const gridContainer = document.querySelector('.grid-container');

    //create number of rows based on argument
    for (i = 1; i < (gridNumber + 1); i++) {
        const gridRow = document.createElement('div');
        const gridRowNo = 'grid-row grid-row-'+i;

        gridRow.setAttribute('class',gridRowNo); //need to increment class
        gridContainer.appendChild(gridRow);

        //for each row, create the same number of columns
        for (let j = 0; j < gridNumber; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.className = 'grid-column grid-column-'+(j+1);
            // columnDiv.textContent = `R${i}, C${j + 1}`;
            columnDiv.textContent = '';

            // Append the column div to the row div
            gridRow.appendChild(columnDiv);
        };
    };

    //Add event listener on mouseenter for each div column element of each row
    const cells = document.querySelectorAll('.grid-column');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
        // console.log('mouse enter');
        cell.style.backgroundColor = 'black';
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

//initialise grid with the default value
createGrid(16);

//reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
    window.location.reload()});


