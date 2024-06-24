// task_3/js/interface.ts

// Crear un tipo RowID igual a number
export type RowID = number;

// Crear una interfaz RowElement con los campos especificados
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
