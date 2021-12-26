// importing packages
const inquirer = require('inquirer');
const { exit } = require('process');
const Employee = require('./lib/employee.js');

questionsEmployeeType = [{
    type: 'list',
    name: 'employeeType',
    message: 'enter Employee Type To Be Created',
    choices: ['Manager', 'Engineer', 'Intern']
}]


// Questions to be prompted
questionsArray = [{

        type: 'confirm',
        name: 'confirmUserData',
        message: 'Lets Insert some User data',
    }, {

        type: 'text',
        name: 'employeeName',
        message: 'Enter Employee Name',
    },
    {

        type: 'text',
        name: 'employeeTitle',
        message: 'Enter Employee Title',
    },

    {

        type: 'text',
        name: 'employeeDescription',
        message: 'Enter Employee Description',
    },

    {

        type: 'text',
        name: 'employeeTitle',
        message: 'Employee Phone Number',
    },
]

// Prompt questions what type of employee





// Secondary stage questions
const secondarySlicedArrayOfQuestions = questionsArray.slice(1, 3);

// main function to be initialized
async function init(questions) {
    console.log('Hello, Welcome');

    const startStatus = await inquirer.prompt(questions);




    return startStatus;



}



init(questionsArray[0]).then((data) => {
    // promise
    if (data.confirmUserData) {
        console.log(data.confirmUserData)
        console.log("Lets Start")
        inquirer.prompt(questionsEmployeeType).then((data) => {
            if (data.employeeType) {}
        });
        // const userData = inquirer.prompt(questionsArray_.range(1, 5);)
    } else {
        console.log("exiting")
        exit()
    }
})



module.exports = init