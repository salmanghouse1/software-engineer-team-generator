function Engineer(id, name, description, phoneNumber) {
    this.name = name;

    this.description = description;
    this.phoneNumber = phoneNumber;
    this.id = id;






    engineerArray = [this.id, this.name, this.description, this.phoneNumber];
    return engineerArray;
}

module.exports = Engineer;