export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    const updatedGrade = matchingGrade ? matchingGrade.grade : 'N/A';

    return {
      ...student,
      grade: updatedGrade,
    };
  }).filter((student) => student.location === city);
}
