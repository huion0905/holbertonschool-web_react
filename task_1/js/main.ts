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