// Create a directory task_1 and copy these configuration files into 
// this folder: package.json, tsconfig.json, webpack.config.js
// firstName(string) and lastName(string). These two attributes should 
// only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without
//  specifying the name of the attribute
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [property: string]: any;
}
interface Directors extends Teacher {
    numreport: number;
}
function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}
interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}
class StudentClass implements StudentClass {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}
console.log(printTeacher('joyeux', 'jotham'));