const fs = require('fs');

function countStudents(path) {
  try {
    let read = fs.readFileSync(path, 'utf8').toString().split('\n');
    read = read.slice(1, read.length - 1);
    console.log(`Number of students: ${read.length}`);
    const arr = {};
    read.forEach((el) => {
      const student = el.split(',');
      if (!arr[student[3]]) arr[student[3]] = [];
      arr[student[3]].push(student[0]);
    });
    for (const i in arr) {
      if (i) console.log(`Number of students in ${i}: ${arr[i].length}. List: ${arr[i].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
