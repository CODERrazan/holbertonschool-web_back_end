const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      const students = lines.slice(1); // Remove header
      const fields = {};
      
      students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');
        if (field && firstname) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${students.length}\n`;
      Object.keys(fields).sort().forEach((field) => {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });
      
      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  
  if (!databasePath) {
    res.status(500).send('Cannot load the database');
    return;
  }

  countStudents(databasePath)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
