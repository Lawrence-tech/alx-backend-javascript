// interface for student 

interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

// Create Two Students 
const student1: Student = {
    firstName: 'Jamess',
    lastName: 'Ondieki',
    age: 21,
    location: 'Lago'
}
const student2 :Student=  {
    firstName: 'Abdul',
    lastName: 'Slmany',
    age: 21,
    location: 'Lagos'
}

// Create an array of students
const studentsList: Student[] = [student1, student2]

// create a table using vanilla js
function renderTable() {
    const table = document.createElement("table")

    //create table header
    const headerRow = document.createElement("tr")
    const firstNameHeader = document.createElement("th")
    const locationHeader = document.createElement("th")
    //contents 
    firstNameHeader.textContent = "firstName";
    locationHeader.textContent = "location";
    //append
    headerRow.appendChild(firstNameHeader)
    headerRow.appendChild(locationHeader)
    table.appendChild(headerRow)

    //create table body
    studentsList.forEach((student) => {
        const row = document.createElement("tr")
        const firstNameCell = document.createElement("td")
        const locationCell = document.createElement("td")
        //contents
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        //append
        row.appendChild(firstNameCell)
        row.appendChild(locationCell)    
    });
    document.body.appendChild(table)
    
}

//call function
renderTable()
