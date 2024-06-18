// We define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
  
// We create two student variables
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
  
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};
  
// We store the students in an array
const studentsList: Student[] = [student1, student2];
  
// Function to render the table
function renderTable(students: Student[]): void {
  // Create table elements
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Add each student as a row in the table
  students.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
}
  
// We call the function to render the table with the list of students
renderTable(studentsList);
