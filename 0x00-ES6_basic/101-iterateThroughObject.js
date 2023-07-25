export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = Array.from(reportWithIterator);
  return employeesArray.join(' | ');
}
