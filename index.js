// Runs the application using imports from lib/
  //run inquirer prompt
  const inquirer = require('inquirer');
  const fs = require('fs');
  const path = require('path');
    const shapesJS = require('./lib/shapes.js');











    //function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeReadMeFile('logo.svg', shapesJS({...answers}));
    });
}

