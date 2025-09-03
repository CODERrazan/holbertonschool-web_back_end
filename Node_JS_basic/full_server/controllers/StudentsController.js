import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];
    
    readDatabase(databaseFile)
      .then((fields) => {
        let output = 'This is the list of our students\n';
        output += `Number of students: ${Object.values(fields).reduce((total, names) => total + names.length, 0)}\n`;
        
        // Sort fields alphabetically
        const sortedFields = Object.keys(fields).sort();
        
        sortedFields.forEach(field => {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
        
        response.status(200).send(output.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databaseFile = process.argv[2];
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    readDatabase(databaseFile)
      .then((fields) => {
        if (fields[major]) {
          response.status(200).send(`List: ${fields[major].join(', ')}`);
        } else {
          response.status(500).send('Cannot load the database');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
