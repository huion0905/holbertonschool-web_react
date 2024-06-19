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
  
  // Example of use of the printTeacher function
  console.log(printTeacher("John", "Doe"));
  
  // Define the interface for the constructor of StudentClass
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  // Define the interface for StudentClass
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implementing the StudentClass class
  class StudentClassImpl implements StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example of StudentClass usage
  const student = new StudentClassImpl('John', 'Doe');
  console.log(student.displayName());
  console.log(student.workOnHomework());
