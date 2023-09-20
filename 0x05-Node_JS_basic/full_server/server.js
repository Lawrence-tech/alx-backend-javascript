const express = require('express');
const app = express();
const port = 1245;
const databasePath = process.argv[2];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the databasePath for request handling
app.use((req, res, next) => {
  req.databasePath = databasePath;
  next();
});

// Use the routes defined in the index.js file
app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
