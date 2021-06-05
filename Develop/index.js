// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default() {
        return 'TITLE GOES HERE';
        },
    filter(val) {
        return val.toUpperCase();
    },
    // validate:  (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief summary of your project:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions) 
        
        .then((answers) => {
            if(answers.title === "" | null) {}
            console.log(answers)
            writeToFile("README.md", generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
