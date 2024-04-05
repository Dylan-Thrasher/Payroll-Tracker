// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let decision = true;

  const allEmployees = [];

  while (decision) {
    const firstNameCell = prompt("Enter Employee First Name");
    const lastNameCell = prompt("Enter Employee Last Name");
    let salaryCell = prompt("Enter Employee's Salary");
    if (isNaN(salaryCell) || salaryCell === null) {
      salaryCell = 0;
    }
    let employee = {
      firstName: firstNameCell,
      lastName: lastNameCell,
      salary: parseFloat(salaryCell),
    }
    decision = confirm("Do you want to add another employee?");

    allEmployees.push(employee)
    //  stops the while loop
  } return allEmployees
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  totalSalary = 0;
  // default value to add to
  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  // divides the sum by the number of employees, creating the average
  console.log(`The average salary is $${averageSalary.toFixed(2)} among the ${employeesArray.length} employees.`);
  // provides the average salary in a message in the console
  return averageSalary;
  // closes loop from running
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  // selects random employee
  console.log(`Congratulations to our randomly selected employee: ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}!`)
  // communicates employee selected
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
