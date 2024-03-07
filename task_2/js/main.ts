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
  