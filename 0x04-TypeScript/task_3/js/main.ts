// main.ts
/// <reference path="../js/crud.d.ts" />

import { RowID, RowElement } from "../interface";
import * as CRUD from "../js/crud.js"

// Create a row object with firstName and lastName fields
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
  };
  
// Insert the row using the CRUD.insertRow function and store the returned row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`);

// Create an updatedRow object with age field set to 23
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

// Update the row using the CRUD.updateRow function
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

// Delete the row using the CRUD.deleteRow function
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);

