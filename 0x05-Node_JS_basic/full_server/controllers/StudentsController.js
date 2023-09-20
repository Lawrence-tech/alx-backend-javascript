const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(req.databasePath);
      res.status(200).send('This is the list of our students\n');

      Object.keys(fields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach((field) => {
        const studentsList = fields[field].join(', ');
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${studentsList}\n`);
      });

      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(req.databasePath);
      const studentsInMajor = fields[major] || [];

      const studentsList = studentsInMajor.join(', ');
      res.status(200).send(`List: ${studentsList}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
