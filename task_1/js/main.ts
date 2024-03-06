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