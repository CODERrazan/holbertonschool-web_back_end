import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      
      let output = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      
      fields.forEach(field => {
        const count = students[field].length;
        const list = students[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${list}\n`;
      });
      
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      
      if (students[major]) {
        const list = students[major].join(', ');
        response.status(200).send(`List: ${list}`);
      } else {
        response.status(200).send('List: ');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
