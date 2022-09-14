// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the name of the project?'
    },
    {
        type:'input',
        name:'description',
        message:'What is the description of the project?'
    },
    {
        type:'input',
        name:'tests',
        message:'How would I test this project? '
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? '
    },
    {
        type:'input',
        name:'usage',
        message:'How will your project be used? '
    },
    {
        type:'input',
        name:'contributors',
        message:'Who all contributed to this project?'
    },
    {
        type:'input',
        name:'contact',
        message:'Enter your email here: '
    },
    {
        type:'input',
        name:'github',
        message:'Enter your github link here: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err) throw err;

        console.log('README complete!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers =>{
        const answerData = generateMarkdown(answers)
        writeToFile('./dist/README.md',answerData);
    });
}

// Function call to initialize app
init();
