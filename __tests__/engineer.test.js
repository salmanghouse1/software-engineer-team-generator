const Engineer = require('../lib/engineer');
// include mocks

test('Testing engineer class', () => {
    const engineer = new Engineer('Dave', 'Hardworking engineer', '416 843 9325');



    // employee object needs to be instantiated here

    // test if engineer object contains the properties listed bellow

    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('description');
    expect(engineer).toHaveProperty('phoneNumber');

    // test if engineer properties equals to a string
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.phoneNumber).toEqual(expect.any(String));
    expect(engineer.description).toEqual(expect.any(String));
    expect(engineer.type).toEqual(expect.any(String));

    // exact string equal
    expect(engineer.name).toBe('Dave');
    expect(engineer.description).toBe('Hardworking engineer');

    expect(engineer.type).toBe('Engineer');

    expect(engineer.phoneNumber).toBe('416 843 9325');

})