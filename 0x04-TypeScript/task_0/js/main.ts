interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Gisa',
    lastName: 'clark',
    age: 23,
    location: 'Rubavu',
}

const student2: Student = {
    firstName: 'Azabe',
    lastName: 'david',
    age: 23,
    location: 'Muhima',
}

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let miVar = document.createElement('table');

for (let a = 0; a < studentsList.length; a++) {
    let row = miVar.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();
    name.innerHTML = studentsList[a].firstName;
    location.innerHTML = studentsList[a].location;
}

document.body.appendChild(miVar);