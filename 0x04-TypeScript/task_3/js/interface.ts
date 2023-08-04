// interface.ts

// Define a type RowID and set it as a number
export type RowID = number

// Create an interface RowElement with firstName, lastName, and optional age fields
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}
