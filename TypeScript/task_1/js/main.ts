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
  
  // Defining the interface for the printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementing the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Ejemplo de uso de la función printTeacher
  console.log(printTeacher("John", "Doe")); 
