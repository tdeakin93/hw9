// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
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
    type: "list",
    name: "license",
    message: "What license does this project use?",
    choices: [
      {
        name: "MIT",
        value: {
          badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
          link: `[License: MIT](https://opensource.org/licenses/MIT)`,
        },
      },
      {
        name: "Apache",
        value: {
          badge: `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
          link: `[License: Apache](https://opensource.org/licenses/Apache-2.0)`,
        },
      },
      {
        name: "GPLv2",
        value: {
          badge: `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
          link: `[License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
        },
      },
      {
        name: "GPLv3",
        value: {
          badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
          link: `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`,
        },
      },
      {
        name: "Other",
        value: {
          badge: ``,
          link: ``,
        },
      },
      {
        name: "None",
        value: {
          badge: ``,
          link: ``,
        },
      },
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
      return "Information on tests goes here";
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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)        
        .then((answers) => {
            console.log(answers)
            writeToFile("./Develop/utils/README.md", generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
