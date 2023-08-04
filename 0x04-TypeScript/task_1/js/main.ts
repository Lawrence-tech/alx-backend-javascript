// Define an interface for a Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [propName: string]: any;
}

// Define an interface for a Director that extends the Teacher interface
interface Director extends Teacher {
    numberOfReports: number;
}

// Create an object of type Teacher
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

// Display the teacher3 object
console.log(teacher3);

// Create an object of type Director
const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Display the director1 object
console.log(director1);

// Define an interface for a function named printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement a function named printTeacher that accepts firstName and lastName as arguments and returns a formatted string
function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${firstInitial}. ${formattedLastName}`;
}

// Define an interface for a Student with required methods
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement a class named StudentClass that implements the StudentInterface
class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Define an interface for the constructor of StudentClass
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

// Define an interface for the class StudentClass
interface StudentClassInterface extends StudentInterface, StudentClassConstructor {}

// Create an instance of StudentClass
const student: StudentClassInterface = new StudentClass('John', 'Doe');

// Call the methods of the StudentClass
console.log(student.workOnHomework());
console.log(student.displayName());
