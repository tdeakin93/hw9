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
      return "Title goes here";
    },
    filter(val) {
      return val.toUpperCase();
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief summary of your project:",
    default() {
      return "Description of project goes here";
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are required to install this project?",
    default() {
      return "Installation instructions go here";
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for the user:",
    default() {
      return "How-to-Use information goes here - examples recommended";
    },
  },
  {
    //change to list of options
    type: "list",
    name: "license",
    message: "What license does this project use?",
    choices: [
        'MIT',
        'APACHE',
        'GPLv2',
        'Other',
        'None',
    ],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "If other developers can contribute to your application or package, what are their guidelines for doing so? *NOTE: this is optional but recommended",
    default() {
      return "Information on how to contribute goes here";
    },
  },
  {
    type: "input",
    name: "credits",
    message:
      "Acknowledge and/or thank your collaborators, including third party assets and/or tutorials:",
    default() {
      return "Credit where credit is due";
    },
  },
  {
    type: "input",
    name: "tests",
    message:
      "What tests are best used for this application, and how do users do so?",
    default() {
      return "Information on test goes here";
    },
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default() {
      return "*~NaMe~*";
    },
  },
  {
    type: "input",
    name: "github_username",
    message: "What is your github username?",
    default() {
      return "*~UsErNaMe~*";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the best email for users with questions to contact?",
    default() {
      return "*~EmAiL~*";
    },
  },
  {
    //in addition to assn - add link to deployed application
    type: "input",
    name: "deployed_link",
    message: "What is an active link to your deployed application?",
    default() {
      return "*~LiNk~*";
    },
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
            console.log(answers)
/////////////// FOR IF LIST ANSWERS DON'T ANSWER - IN PROGRESS
//               .then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });
            writeToFile("README.md", generateMarkdown(answers))
            
        })
}

// Function call to initialize app
init();
