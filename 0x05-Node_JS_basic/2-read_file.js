const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content by lines
    const lines = data.split('\n').filter(Boolean); // Remove empty lines

    // Initialize counters for each field
    const fields = {};
    
    // Iterate through each line
    for (const line of lines) {
      const student = line.split(',');
      const field = student[3].trim(); // Assuming field is in the 4th column (index 3)
      
      if (field) {
        if (fields[field]) {
          fields[field].push(student[0].trim()); // Assuming student's name is in the 1st column (index 0)
        } else {
          fields[field] = [student[0].trim()];
        }
     
