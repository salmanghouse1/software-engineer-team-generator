const Engineer = require('../lib/engineer')


function Employee(type, name, description, phoneNumber) {
    this.type = type;
    this.name = name;

    this.description = description;
    this.phoneNumber = phoneNumber;

    switch (type) {

        case 'Engineer':

        case 'Manager':

        case 'Intern':

    }


}

Employee.prototype.sendEmployeeData = function() {
    if (window.localStorage.getItem('id')) {
        id = window.localStorage.getItem('id')

    } else {
        window.localStorage.setItem('id', 0);

    }
    id = localStorage.getItem('id');
    id++;

    switch (this.type) {

        case 'Engineer':
            const engineer = new Engineer(id, this.name, this.description, this.phoneNumber);
        case 'Manager':

        case 'Intern':

    }



}


module.exports = Employee;