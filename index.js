// Runs the application using imports from lib/
//run inquirer prompt
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateSVG = require('./lib/shapes.js');



// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Pleae enter up to 3 characters:',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Please enter the color you would like your text to be:',
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Please enter a color keyword OR a hexadecimal number for your shape:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please enter the shape you would like to use',
        choices: ['Triangle', 'Circle', 'Square'],
    },




];

//Function to write SVG file
function writeSVGFile(fileName, data) {
    fs.writeFile(path.join('assets', fileName), data, (err) => {
        if (err) throw err;
        console.log('SVG file generated!');
    });
}

//Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating SVG file...');
        writeSVGFile('logo.svg', generateSVG(answers));
    })
}
// Function call to initialize app
init()