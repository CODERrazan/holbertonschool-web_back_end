const http = require('http');
const url = require('url');
const fs = require('fs').promises;

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
      result += `Number of students in ${field}: ${fields[field].length}. List: ${list.join(', ')}\n`;
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list.join(', ')}`);
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const port = 1245;
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
    return;
  }

  if (parsedUrl.pathname === '/students') {
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error: No database file provided');
      return;
    }
    try {
      const result = await countStudents(databaseFile);
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      res.end(result);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});
app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});
module.exports = app;
