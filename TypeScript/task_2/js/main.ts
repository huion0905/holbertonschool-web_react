type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Pruebas
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
 