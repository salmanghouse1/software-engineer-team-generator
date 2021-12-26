const Intern = require('../lib/intern');
// include mocks

jest.mock('../lib/intern');



test('Testing intern class with mocks too', () => {
    const intern = new Intern();
    console.log(intern)



    // employee object needs to be instantiated here

    // test if intern object contains the properties listed bellow
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('description');
    expect(intern).toHaveProperty('phoneNumber');

    // test if intern properties equals to a string
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.phoneNumber).toEqual(expect.any(String));
    expect(intern.description).toEqual(expect.any(String));


    // exact string equal

    this.id = 6;
    expect(intern.name).toBe('Synthia');
    expect(intern.description).toBe('a description 2');
    expect(intern.phoneNumber).toBe('416 601 9325');
    expect(intern.id).toBe(6);

})