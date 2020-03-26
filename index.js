//inquirer module from npm 
const inquirer = require("inquirer");
//js file system module- allows you to work with the fs on your comp
const fs = require("fs");

inquirer.prompt([
{
    type: "input", 
    message: "What is your project title?", 
    name: "projectTitle",
},
{
    type: "input", 
    message: "What is your project's description?", 
    name: "projectDescription"
},
{
    type: "input", 
    message: "What is your table of contents?", 
    name: "tableOfContents",
},
{
    type: "input", 
    message: "What is your installation?", 
    name: "installation",
},
{
    type: "input", 
    message: "What is your usage?", 
    name: "usage",
},
{
    type: "input", 
    message: "What is your license?", 
    name: "license",
},
{
    type: "input", 
    message: "Who is contributing?", 
    name: "contributors",
},
{
    type: "input", 
    message: "What is your tests?", 
    name: "tests",
},
{
    type: "questions", 
    message: "What are your questions?", 
    name: "questions",
},

]).then(({projectTitle, projectDescription, tableOfContents, installation, usage,license, contributors, tests, questions })=> {
    
const userInput = `

# Project Title: \n
${projectTitle}  \n
# License \n
${license} \n
## Project Description: \n
${projectDescription} \n
## Table of Contents:\n 
${tableOfContents} \n
## Installation Directions: \n
${installation} \n
## Usage: \n
${usage} \n
## Contributors: \n
${contributors} \n
## Tests: \n
${tests} \n
## Questions: \n
${questions}
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
