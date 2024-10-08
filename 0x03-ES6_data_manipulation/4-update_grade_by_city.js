export default function updateStudentGradeByCity(students, city, newGrades) {
  const stdcity = students.filter((student) => student.location === city);
  return stdcity.map((student) => {
    const fltgrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (fltgrade.length > 0) {
      return {
        ...student,
        grade: fltgrade[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
