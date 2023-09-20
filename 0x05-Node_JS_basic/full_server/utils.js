const fs = require('fs/promises');

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const fields = {};

    for (const line of lines) {
      const student = line.split(',');
      const field = student[3].trim();

      if (field) {
        if (fields[field]) {
          fields[field].push(student[0].trim());
        } else {
          fields[field] = [student[0].trim()];
        }
      }
    }

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
