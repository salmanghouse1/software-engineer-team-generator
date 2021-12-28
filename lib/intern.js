function Intern(id, name, description, phoneNumber, type) {
    this.name = name;

    this.description = description;
    this.phoneNumber = phoneNumber;
    this.id = id;


    this.type = type;



    internArray = this.id, this.name, this.description, this.phoneNumbers, this.type;
    return internArray;
}

module.exports = Intern;