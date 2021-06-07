// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}

  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Credits](#credits)
    - [Tests](#tests)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    Licensed under the ${data.license} license

  ## Contributing
    ${data.contributing}

  ## Credits
    ${data.credits}

  ## Tests
    ${data.tests}
    
  ## Questions?
    The person responsible for this code is: ${data.name} and their github username is: ${data.github_username}
    Account: [https://github.com/${data.github_username}](https://github.com/${data.github_username})
    If you have questions regarding this application, feel free to contact: ${data.email}
    Link to deployed application: ${data.deployed_link}
`;
}

module.exports = generateMarkdown;
