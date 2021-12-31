const Manager = require('../lib/manager');
// include mocks

test('Testing manager class', () => {
    manager = new Manager('dave', '2', 'dave@gmail.com', '444')


    // manager object needs to be instantiated here

    // test if manager object contains the properties listed bello

    expect(manager).toHaveProperty('officeNumber');
    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');

    expect(manager.name).toBe('dave');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe('444');


    // test if manager properties equals to a string
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));


})