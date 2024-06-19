// Definimos la interfaz Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  // Definimos la interfaz Directors que extiende Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Creamos un ejemplo de un objeto Directors
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Definir la interfaz para la función printTeacher
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementar la función printTeacher
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Ejemplo de uso de la función printTeacher
  console.log(printTeacher("John", "Doe")); 
