// Runs the application using imports from lib/
  //run inquirer prompt
  const inquirer = require('inquirer');
  const fs = require('fs');
  const path = require('path');
  const shapesJS = require('./lib/shapes.js');

    // Array of questions for user input
const questions = [
   { 
    type: 'input',
    name: 'shape',
    message: 'Please enter the shape you would like to use',
    },
    {
    type: 'input',
    name: 'character length',
    message: 'How many characters would you like your logo to contain?',
    },
    {
    type: 'input',
    name: 'Character type',
    message: 'Please enter the characters you would like to use, in order',
    },
    {
    type: 'input',
    name: 'color',
    message: 'Please enter the color you would like to use',
    },
   
];

//Function to write SVG file
function writeSVGFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeSVGFile('logo.svg', shapesJS({...answers}));
    });
}

// Function call to initialize app
init()