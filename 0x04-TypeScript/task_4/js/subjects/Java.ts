// task_4/js/subjects/Java.ts

import {Subject} from './Subject';
import { Teacher } from './Teacher';

export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingJava) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return 'No available teacher';
    }
  }
