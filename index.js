//inquirer module from npm 
const inquirer = require("inquirer");
//js file system module- allows you to work with the fs on your comp
const fs = require("fs");
// axios call
// const axios = require("./api.js");

inquirer.prompt([
//project title    
{
    type: "input", 
    message: "What is your project's name?", 
    name: "projectTitle",
},
//version
{
    type: "input",
    message: "What version?",
    name: "version",
    default: "1.1.0",
},
//description
{
    type: "input", 
    message: "Please write a short description of your project.", 
    name: "projectDescription"
},

//install
{
    type: "input", 
    message: "What command should be run to install dependencies?", 
    name: "installation", 
    default: "npm install"
},
//usage
{
    type: "input", 
    message: "What does the user need to know about using the repo?", 
    name: "usage",
},
//license
{
    type: "list", 
    message: "What kind of license should your project have?", 
    name: "license",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'N/A'],
},
{
    type: "input", 
    message: "What does the user need to know about contributing to the repo?", 
    name: "contributing",
},
//test
{
    type: "input", 
    message: "What command should be run to run tests?", 
    name: "tests",
    default: "npm test",
},


]).then(({projectTitle, version, projectDescription, installation, usage,license, contributing, tests,})=> {
    
const userInput = `
# Project Title: \n
${projectTitle}  \n
![Version Badge](https://img.shields.io/static/v1?label=Version&message=${version}&color=important) 
![License Badge](https://img.shields.io/static/v1?label=License&message=${license}&color=blue) \n
## Project Description: \n
${projectDescription} \n
## Table of Contents:\n 
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Tests](#tests)
    6. [Questions](#questions)
## Installation Directions: \n
${installation} \n
## Usage: \n
${usage} \n
## License \n
${license} \n
## Contributing: \n
${contributing} \n
## Tests: \n
${tests} \n
## Questions: \n

`;
fs.appendFile("README.md", userInput, err => {
    if (err) {
      return console.log(err);
    }
    console.log("The README.md file has been written!");
})
    
}).catch(error => {
    if(error) return console.log(error);
    console.log("No errors!")
});


// fileName = resp.name.toLowerCase().split(' ').join('')+ ".json";
//  fs.writeFile(filename, JSON.stringify(resp, null, '\t'), function(error) {

//     if (error) {
//     return console.log(error);
//         }
    
//         console.log("Success!");
