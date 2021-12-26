const Employee = require('../lib/employee');
// include mocks

test('Testing employee class', () => {
    const employee = new Employee('Engineer', 'Dave', 'Hardworking Employee', '416 843 9325');



    // employee object needs to be instantiated here

    // test if employee object contains the properties listed bellow
    expect(employee).toHaveProperty('type');
    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('description');
    expect(employee).toHaveProperty('phoneNumber');

    // test if employee properties equals to a string
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.phoneNumber).toEqual(expect.any(String));
    expect(employee.description).toEqual(expect.any(String));
    expect(employee.type).toEqual(expect.any(String));

    // exact string equal
    expect(employee.name).toBe('Dave');
    expect(employee.description).toBe('Hardworking Employee');

    expect(employee.type).toBe('Engineer');

    expect(employee.phoneNumber).toBe('416 843 9325');

})