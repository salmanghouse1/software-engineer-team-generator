const checkPrompt = require('../server');
//Lets check if the initial prompt returns a Y



test('Checks if initial prompt is a Yes', function() {

    expect(checkPrompt).toBeTruthy();


})