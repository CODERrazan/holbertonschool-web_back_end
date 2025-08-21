export default function createReportObject(employeesList) {
  const allEmployees = {};

  // Extract department names and employees using spread syntax
  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...employees];
  }

  // Define the method property
  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
