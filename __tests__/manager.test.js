const Manager = require('../lib/manager');
// include mocks

jest.mock('../lib/manager');



test('Testing manager class with mocks too', () => {
    const manager = new Manager();
    console.log(manager)



    // employee object needs to be instantiated here

    // test if manager object contains the properties listed bellow
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('description');
    expect(manager).toHaveProperty('phoneNumber');

    // test if manager properties equals to a string
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.phoneNumber).toEqual(expect.any(String));
    expect(manager.description).toEqual(expect.any(String));


    // exact string equal

    this.id = 6;
    expect(manager.name).toBe('Synthia');
    expect(manager.description).toBe('a description 2');
    expect(manager.phoneNumber).toBe('416 601 9325');
    expect(manager.id).toBe(6);

})