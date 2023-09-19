const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(Boolean); // Remove empty lines
        const fields = {};

        for (const line of lines) {
          const student = line.split(',');
          const field = student[3].trim(); // Assuming field is in the 4th column (index 3)

          if (field) {
            if (fields[field]) {
              fields[field].push(student[0].trim()); // Assuming student's name is in the 1st column (index 0)
            } else {
              fields[field] = [student[0].trim()];
            }
          }
        }

        console.log(`Number of students: ${lines.length}`);
        for (const field in fields) {
          const studentsList = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${studentsList}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
