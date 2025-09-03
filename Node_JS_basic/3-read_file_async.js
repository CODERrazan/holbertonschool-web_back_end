const fs = require('fs');

function countStudents(path) {
  const prom = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(Error('Cannot load the database'));
      if (data) {
        let ret = data.toString().split('\n');
        ret = ret.slice(1, ret.length - 1);
        console.log(`Number of students: ${ret.length}`);
        const arr = {};
        ret.forEach((el) => {
          const student = el.split(',');
          if (!arr[student[3]]) arr[student[3]] = [];
          arr[student[3]].push(student[0]);
        });
        for (const i in arr) {
          if (i) console.log(`Number of students in ${i}: ${arr[i].length}. List: ${arr[i].join(', ')}`);
        }
      }
      res();
    });
  };
  return new Promise(prom);
}

module.exports = countStudents;
