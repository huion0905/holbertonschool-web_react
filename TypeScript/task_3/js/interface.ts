// Define a type RowID which is synonymous with number
export type RowID = number;
// Define an interface for a row element with required and optional fields
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}