// task_4/js/subjects/Subject.ts

import { Teacher } from './Teacher';

export class Subject {
  teacher: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
