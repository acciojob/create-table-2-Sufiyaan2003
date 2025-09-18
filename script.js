function createTable() {
    //Write your code here
  // Prompt for number of rows
    const rn = prompt("Input number of rows");
    // Prompt for number of columns
    const cn = prompt("Input number of columns");

    // Convert inputs to numbers and validate
    const numRows = Number(rn);
    const numCols = Number(cn);

    // Check for valid numbers
    if (
        isNaN(numRows) || isNaN(numCols) ||
        numRows <= 0 || numCols <= 0
    ) {
        alert("Please enter positive numeric values for rows and columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear previous table content
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
            cell.textContent = "Row-" + i + " Column-" + j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
