// Interfaces

// DirectorInterface declares the methods that the Director class must have
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface declares the methods that the Teacher class must have
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Classes
  
  // The Director class implements the DirectorInterface with specific methods
  class Director implements DirectorInterface {
    workFromHome() {
      return 'Working from home';
    }
    getCoffeeBreak() {
      return 'Getting a coffee break';
    }
    workDirectorTasks() {
      return 'Getting to director tasks';
    }
  }
  
  // The Teacher class implements the TeacherInterface with specific methods
  class Teacher implements TeacherInterface {
    workFromHome() {
      return 'Cannot work from home';
    }
    getCoffeeBreak() {
      return 'Cannot have a break';
    }
    workTeacherTasks() {
      return 'Getting to work';
    }
  }
  
  // Functions
  
  /**
   * The createEmployee function creates a new instance of Teacher or Director.
   * If a salary is provided as a number and it's less than 500, it returns a Teacher.
   * Otherwise, it returns a Director. It also handles salary as a string.
   *
   * @param {number | string} salary - The salary can be a number or a string.
   * @returns {Director | Teacher} - An instance of Director or Teacher.
   */
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  

  // Examples of using the createEmployee function
  console.log(createEmployee(200)); // Creates and displays a Teacher instance
  console.log(createEmployee(1000)); // Creates and displays a Director instance
  console.log(createEmployee('$500')); // Creates and displays a Director instance


// Type guard function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function to execute the work of an employee based on their role
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // Example usage
  console.log(executeWork(createEmployee(200))); // Expected to call workTeacherTasks and log "Getting to work"
  console.log(executeWork(createEmployee(1000))); // Expected to call workDirectorTasks and log "Getting to director tasks"

// Define the String literal type named Subjects
type Subjects = 'Math' | 'History';

// Write the function named teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Usage examples
console.log(teachClass('Math'));    // Expected output: Teaching Math
console.log(teachClass('History')); // Expected output: Teaching History
