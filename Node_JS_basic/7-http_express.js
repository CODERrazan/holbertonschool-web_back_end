const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

// Database path should be passed as argument when starting server
const databasePath = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    
    if (rows.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = rows.slice(1);
    let result = `Number of students: ${students.length}\n`;
    
    const fields = {};
    for (const student of students) {
      const records = student.split(',');
      const field = records[records.length - 1].trim();
      const firstname = records[0].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const [field, list] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
    }
    
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentData = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
