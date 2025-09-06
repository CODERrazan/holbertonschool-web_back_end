const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    const students = rows.slice(1);

    let result = `Number of students: ${students.length}\n`;
    console.log(`Number of students: ${students.length}`);

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
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list.join(', ')}`);
      result += `Number of students in ${field}: ${fields[field].length}. List: ${list.join(', ')}\n`;
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databaseFile = process.argv[2];

  if (!databaseFile) {
    res.status(404).send('Error: No database file provided');
    return;
  }

  try {
    const result = await countStudents(databaseFile);
    res.write('This is the list of our students\n');
    res.end(result);
  } catch (error) {
    res.status(404).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});

module.exports = app;
