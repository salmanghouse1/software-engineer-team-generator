const Engineer = require('../lib/engineer');
// include mocks




test('Testing engineer class with mocks too', () => {



    // employee object needs to be instantiated here

    // test if engineer object contains the properties listed bellow
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('github');
    expect(engineer).toHaveProperty('email');

    // test if engineer properties equals to a string
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));


    // exact string equal
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('4');


    expect(engineer.email).toBe('dave@gmail.com');

    expect(engineer.github).toBe('dave1');
})