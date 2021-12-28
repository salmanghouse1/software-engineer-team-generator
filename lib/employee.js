const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');


function Employee(type, name, description, phoneNumber) {
    this.type = type;
    this.name = name;

    this.description = description;
    this.phoneNumber = phoneNumber;



}

Employee.prototype.sendEmployeeData = function() {

    id = Math.floor(Math.random() * 101);

    switch (this.type) {

        case 'Engineer':
            const engineer = new Engineer(id, this.name, this.description, this.phoneNumber, this.type);
            return engineer;
        case 'Manager':
            const manager = new Manager(id, this.name, this.description, this.phoneNumber, this.type);
            return manager;
        case 'Intern':
            const intern = new Intern(id, this.name, this.description, this.phoneNumber, this.type);
            return intern;
    }



}


module.exports = Employee;