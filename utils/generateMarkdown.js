class generateMarkdown {

    static renderLicenseBadge(license) {
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            gpl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            bsd: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            none: ''
        }
        return badges[license];
    }

    static renderLicenseSection(license) {
        if (license) {
          return `License under the ${this.renderLicenseLink(license)} license.`
        } else {
          return ''
        }
    }
    static renderLicenseLink(license) {
        const licenseLinks = {
            mit: '[MIT](https://opensource.org/licenses/MIT)',
            apache: '[Apache](https://opensource.org/licenses/Apache-2.0)',
            gpl: '[GPL](https://www.gnu.org/licenses/gpl-3.0)',
            bsd: '[BSD](https://opensource.org/licenses/BSD-3-Clause)',
            none: ''
        }
        return licenseLinks[license];
    }

    static generateReadme(answers){
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}
    
## Table of Contents
- [Project description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [License](#License)
- [Questions](#Questions)
    
## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## License
${this.renderLicenseSection(answers.license)
}

## Questions
${answers.github}
${answers.email}
`
}
}

module.exports = generateMarkdown;
