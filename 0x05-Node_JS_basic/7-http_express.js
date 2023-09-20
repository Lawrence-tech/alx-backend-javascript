const express = require('express');
const fs = require('fs').promises; // Use promises-based fs
const { argv } = require('process');

const app = express();
const PORT = 1245;
const DB_FILE = argv[2] || ''; // Set the default value

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
    });
    const fields = new Set(students.map((student) => student.Field));
    const report = [`Number of students: ${students.length}`];
    for (const field of fields) {
      const studentsInField = students.filter((student) => student.Field === field);
      report.push(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map((student) => student.firstname).join(', ')}`);
    }
    return report.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const report = await countStudents(DB_FILE);
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(report);
  } catch (error) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(500).send('Cannot load the database');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
