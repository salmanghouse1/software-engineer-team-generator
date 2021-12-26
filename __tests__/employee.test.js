const employee = require('../lib/employee');
// include mocks

test('Testing employee class', () => {

    // employee object needs to be instantiated here

    // test if employee object contains the properties listed bellow
    expect(employee).toHaveProperty('type');
    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('phoneNumber');
    expect(employee).toHaveProperty('description');
    // test if employee properties equals to a string
    expect(employee.type).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.phoneNumber).toEqual(expect.any(String));
    expect(employee.description).toEqual(expect.any(String));

})