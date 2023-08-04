// Interface for teachers
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [propName: string]: any; // Additional dynamic properties are allowed
}

// Interface for directors, extends Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Teacher object 1
const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // Additional property "contract" is allowed
};

console.log(teacher1);

// Director object 1
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Interface for a function that prints teacher's name
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function to print teacher's name
function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${firstInitial}. ${formattedLastName}`;
}

// Interface for a Student
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Student class that implements StudentInterface
class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
