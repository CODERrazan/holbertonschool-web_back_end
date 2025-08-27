export default function getStudentIdsSum(list) {
  return list.reduce((total, student) => total + student.id, 0);
}
