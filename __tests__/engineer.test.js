const Engineer = require('../lib/engineer');
// include mocks

jest.mock('../lib/engineer');



test('Testing engineer class with mocks too', () => {
    const engineer = new Engineer();
    console.log(engineer)
    expect(engineer.id).toEqual(5);



    // employee object needs to be instantiated here

    // test if engineer object contains the properties listed bellow
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('description');
    expect(engineer).toHaveProperty('phoneNumber');

    // test if engineer properties equals to a string
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.phoneNumber).toEqual(expect.any(String));
    expect(engineer.description).toEqual(expect.any(String));


    // exact string equal
    expect(engineer.name).toBe('Dave');
    expect(engineer.description).toBe('a description');


    expect(engineer.phoneNumber).toBe('416 843 9325');

})


test('Mocking test data', () => {



})