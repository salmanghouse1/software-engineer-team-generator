const Manager = function(id, name, description, phoneNumber) {

    this.name = name;

    this.description = description;

    this.phoneNumber = phoneNumber;

    this.id = id;

    managerArray = [this.id, this.name, this.description, this.phoneNumber];
    return managerArray;
};


modules.export = Manager;