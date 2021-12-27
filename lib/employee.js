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

    id = Math.floor(Math.random() * 101);

    switch (this.type) {

        case 'Engineer':
            const engineer = new Engineer(id, this.name, this.description, this.phoneNumber);
            return engineer;
        case 'Manager':

        case 'Intern':

    }



}


module.exports = Employee;