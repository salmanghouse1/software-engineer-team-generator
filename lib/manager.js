const Manager = function(id, name, description, phoneNumber, type) {

    this.name = name;

    this.description = description;

    this.phoneNumber = phoneNumber;

    this.id = id;

    this.type = type;

    managerArray = this.id, this.name, this.description, this.phoneNumber, this.type;
    return managerArray;
};


module.exports = Manager;