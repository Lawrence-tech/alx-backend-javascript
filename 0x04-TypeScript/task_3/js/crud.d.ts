// crud.d.ts

// Import the RowID and RowElement types from the interface.ts file
import { RowID, RowElement } from '../interface';

// Declare the module 'crud.js' and provide type declarations for its functions
declare module 'crud.js' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowID: RowID): void;
    export function updateRow(rowID: RowID, row: RowElement): RowID;
}
