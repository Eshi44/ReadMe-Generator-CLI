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

]).then(({projectTitle, projectDescription, tableOfContents, installation, usage,license, contributors, tests })=> {
    


// fileName = resp.name.toLowerCase().split(' ').join('')+ ".json";
//  fs.writeFile(filename, JSON.stringify(resp, null, '\t'), function(error) {

//     if (error) {
//     return console.log(error);
//         }
    
//         console.log("Success!");
    
//       });




}).catch(error => {
    if(error) return console.log(error);
    console.log("No errors!")
});



