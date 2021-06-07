// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license === 'MIT') {
  //   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  // } else if (license === 'Apache') {
  //   return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  // } else if (license === 'GPLv2') {
  //   return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  // } else if (license === 'GPLv3') {
  //   return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  // } else if (license === 'Other') {
  //   return ``
  // }
}

// Function that returns the license link
function renderLicenseLink(license) {
  // if (license === 'MIT') {
  //   return `[License: MIT](https://opensource.org/licenses/MIT)`;
  // } else if (license === 'Apache') {
  //   return `[License: Apache](https://opensource.org/licenses/Apache-2.0)`
  // } else if (license === 'GPLv2') {
  //   return `[License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  // } else if (license === 'GPLv3') {
  //   return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  // } else if (license === 'Other') {
  //   return `License used: `; 
  // }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if (data.license !=== 'null') {
  //   return
  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${data.license.badge}

${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Credits
${data.credits}

## Tests
${data.tests}

## License
${data.license.link}

## Questions?
The person responsible for this code is: ${data.name} and their github username is: ${data.github_username}
Account: [https://github.com/${data.github_username}](https://github.com/${data.github_username})
If you have questions regarding this application, feel free to contact: ${data.email}
Link to deployed application: ${data.deployed_link}
`;
}

module.exports = generateMarkdown;
