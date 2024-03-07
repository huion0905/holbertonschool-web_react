interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}
const teacher1: Teacher = {
    firstName: 'Ana',
    lastName: 'Martínez',
    fullTimeEmployee: true,
    location: 'Madrid',
    contract: false
};

console.log(teacher1);

interface Directors extends Teacher {
    numberOfReports: number;
}
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implements the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return '${firstName.charAt(0)}. ${lastName}';
};

// Example of use:
console.log(printTeacher("John", "Doe")); // Should print: "J. Doe"

// Defines the interface for the class StudentClass
interface IStudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass class based on the IStudentClass interface.
class StudentClass implements IStudentClass {
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

// Example of use:
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // You should print "John"
console.log(student.workOnHomework()); // Debería imprimir "Currently working"
