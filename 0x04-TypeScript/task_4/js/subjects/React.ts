namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
      firstName: string;
      lastName: string;
    }
  
    export class Subject {
      teacher: Teacher;
  
      constructor(teacher: Teacher) {
        this.teacher = teacher;
      }
    }
  
    export class React extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0 
          ? `Available Teacher: ${this.teacher.firstName}`
          : 'No available teacher';
      }
    }
  }
  