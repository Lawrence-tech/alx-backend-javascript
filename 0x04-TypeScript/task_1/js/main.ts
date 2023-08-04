// Define an interface for teachers
interface Teacher {
    readonly firstName: string; // The first name of the teacher
    readonly lastName: string; // The last name of the teacher
    fullTimeEmployee: boolean; // Indicates if the teacher is a full-time employee
    yearsOfExperience?: number; // Number of years of teaching experience (optional)
    readonly location: string; // The location of the teacher
    [propName: string]: any; // Allows additional dynamic properties for the teacher
}

// Define an interface for directors, extending the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number; // The number of reports the director is responsible for
}

// Create a teacher object
const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // Additional property "contract" is allowed
};

console.log(teacher1);

// Create a director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Define an interface for a function that prints a teacher's name
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function to print a teacher's name
function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${firstInitial}. ${formattedLastName}`;
}

// Define an interface for a student
interface StudentInterface {
    firstName: string; // The first name of the student
    lastName: string; // The last name of the student
    workOnHomework(): string; // Method to indicate the student is working on homework
    displayName(): string; // Method to display the student's first name
}

// Implement the StudentInterface in a Student class
class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

