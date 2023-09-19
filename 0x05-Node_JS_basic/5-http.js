const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      // Serve "Hello Holberton School!" for the root path
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
      // Serve student data for the /students path
      const databasePath = process.argv[2];
      if (!databasePath) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error: Database path not provided.\n');
        return;
      }

      // Read and serve the content of 3-read_file_async.js
      fs.readFile(databasePath, 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error: Cannot read the database.\n');
          return;
        }

        // Process the data and serve it as plain text
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

        // Prepare the response with student data
        let responseText = 'This is the list of our students\n';
        responseText += `Number of students: ${lines.length}\n`;

        for (const field in fields) {
          const studentsList = fields[field].join(', ');
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${studentsList}\n`;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      });
    } else {
      // Handle other paths with a 404 response
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found\n');
    }
  } else {
    // Handle non-GET requests with a 405 response
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});

app.listen(1245);

module.exports = app;
