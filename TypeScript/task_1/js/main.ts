// We define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  // We define the Directors interface extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // We create an example of a Directors object
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Function for rendering the table with the teacher's data
  function renderTeacherTable(teacher: Teacher): void {
    // Create table elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    // Create table headers
    const headers = ['First Name', 'Last Name', 'Full Time Employee', 'Years of Experience', 'Location', 'Contract', 'Number of Reports'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    thead.appendChild(headerRow);
  
    // Create teacher data row
    const dataRow = document.createElement('tr');
    dataRow.appendChild(createCell(teacher.firstName));
    dataRow.appendChild(createCell(teacher.lastName));
    dataRow.appendChild(createCell(teacher.fullTimeEmployee.toString()));
    dataRow.appendChild(createCell(teacher.yearsOfExperience?.toString() || 'N/A'));
    dataRow.appendChild(createCell(teacher.location));
    dataRow.appendChild(createCell(teacher.contract.toString()));
    if ((teacher as Directors).numberOfReports !== undefined) {
      dataRow.appendChild(createCell((teacher as Directors).numberOfReports.toString()));
    } else {
      dataRow.appendChild(createCell('N/A'));
    }
  
    tbody.appendChild(dataRow);
  
    // Add thead and tbody to the table
    table.appendChild(thead);
    table.appendChild(tbody);
  
    // Add the table to the body of the document
    document.body.appendChild(table);
  }
  
  // Helper function to create table cells
  function createCell(text: string): HTMLTableCellElement {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
  }
  
  // We call the function to render the table with the director1 object
  renderTeacherTable(director1);
  