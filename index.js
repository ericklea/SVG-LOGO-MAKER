// Runs the application using imports from lib/
  //run inquirer prompt
  const inquirer = require('inquirer');
  const fs = require('fs');
  const path = require('path');
  const shapesJS = require('./lib/shapes.js');
  

    // Array of questions for user input
const questions = [
   { 
    type: 'list',
    name: 'shape',
    message: 'Please enter the shape you would like to use',
    choices: ['Triangle', 'Circle', 'Square'],
    },
    {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters:',
    },
    {
    type: 'input',
    name: 'text',
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
    return fs.writeFileSync(path.join(process.cwd(),'assets', fileName), data);

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