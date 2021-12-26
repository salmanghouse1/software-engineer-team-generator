const Employee = require('../lib/employee');
// include mocks

test('Testing employee class', () => {
    const employee = new Employee('Dave', 'Hardworking Employee', '416 843 9325');



    // employee object needs to be instantiated here

    // test if employee object contains the properties listed bellow
    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('description');
    expect(employee).toHaveProperty('phoneNumber');

    // test if employee properties equals to a string
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.phoneNumber).toEqual(expect.any(String));
    expect(employee.description).toEqual(expect.any(String));

})