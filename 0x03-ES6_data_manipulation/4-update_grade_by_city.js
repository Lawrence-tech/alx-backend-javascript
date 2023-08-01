export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const updatedStudents = studentsList.map((student) => {
    const matchedGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

    return {
      ...student,
      grade: matchedGrade ? matchedGrade.grade : 'N/A',
    };
  });

  return updatedStudents.filter((student) => student.location === city);
}
