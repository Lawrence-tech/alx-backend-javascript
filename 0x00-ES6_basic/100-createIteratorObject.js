export default function* createIteratorObject(report) {
  for (const department of Object.keys(report)) {
    for (const employee of report[department]) {
      yield employee;
    }
  }
}
