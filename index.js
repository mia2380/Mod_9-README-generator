// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// application questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub link.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions, please contact me at:',
    },
];

// run a query function
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = generateMarkdown.generateReadme(answers);
        fs.writeFile('README.md', mark, function (err) {
            if (err){
                console.log('could not save file');
            } else {
                console.log('Success: README.md created!');
            }
            });
    })
    .catch((error) => {
        console.log(error);
    })
}

runQuery();


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
