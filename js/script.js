// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const table = document.getElementById('employees');
    

 // To begin, set FOCUS to the first text box
const firstTxtBx = document.querySelector('input[type="text"]');
if (firstTxtBx) {
  firstTxtBx.focus();
  // Force cursor to the very BEGINNING of the text
  firstTxtBx.setSelectionRange(0, 0); 
  
}

//ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // 1. Select all the existing body rows in the table
    const rows = document.querySelectorAll("#employees tbody tr");

    //ADD EMPLOYEE
     // GET THE VALUES FROM THE TEXT BOXES
      const name = document.getElementById('name').value;
      const id = document.getElementById('id').value;
      const dept = document.getElementById('department').value;
      const ext = document.getElementById('extension').value;
      const email = document.getElementById('email').value;
       

      // Create a new row (<tr>)
      const newRow = document.createElement('tr');

      // Create an array of the employee data
      const employeeData = [id, name, ext, email, dept]

      // Loop through the data to create cells (<td>) and append them to the row
      employeeData.forEach(function(text) {
        const newCell = document.createElement('td');
        newCell.textContent = text;
        newRow.appendChild(newCell);
      }) //employeeData.forEach
       
      // Create a new cell (td) for the button
      const lstCell = document.createElement("td")
      // CREATE A DELETE BUTTON
      let delBtn = document.createElement('button')
      // ADD BOOTSTRAP CLASSES FOR A BUTTON
      delBtn.className = 'btn btn-danger btn-sm float-end delete'
      // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
      let del = document.createTextNode('X')
      // APPEND TEXT NODE TO DELETE BUTTON
      delBtn.appendChild(del)
      newRow.appendChild(delBtn)

      // Append the newly created row to the table body
      table.appendChild(newRow)

      // RESET THE FORM
      form.reset()

       // SET FOCUS BACK TO THE ID TEXT BOX
      firstTxtBx.focus();
      counter()



// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
// testing - not working
// Select the employee rows from the table body
function counter() {
    let count = 0
    const employeeRows = document.getElementById('empCount')
    // Get the total count of employees
    const employeeCount = (employeeData.length - 4)
    // Select the header element where the count will display
    const employeeHeader = document.getElementById('empCount');
    employeeCount.textContent = count
    // Append the count variable next to the header text
    employeeHeader.textContent = ` (${employeeCount})`;
    //employeeHeader.textContent = ` (${count})`;
}


   // HANDLE THE CLICK EVENT OF THE DELETE BUTTON
   table.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this task?')) {
            // REMOVE THE SELECTED LI
            table.removeChild(e.target.parentElement)
            // CHECK TO SEE IF THE 'NO TASKS' MESSAGE SHOULD BE DISPLAYED
            //checkMessageDisplay()
        }
    }
   })
})