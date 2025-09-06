// 7-http_express.js
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // remove header

      const students = {};
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      const total = lines.length;
      let output = `Number of students: ${total}\n`;
      for (const [field, list] of Object.entries(students)) {
        output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

// Route: /
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route: /students
app.get('/students', async (req, res) => {
  res.type('text/plain');
  const database = process.argv[2];
  try {
    const report = await countStudents(database);
    res.send(`This is the list of our students\n${report}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port);

module.exports = app;

