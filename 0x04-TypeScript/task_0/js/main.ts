// Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London',
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Rendering logic using Vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  headerRow.innerHTML = '<th>First Name</th><th>Location</th>';

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
});
