//inquirer module from npm 
var inquirer = require("inquirer");
//js file system module- allows you to work with the fs on your comp
var fs = require("fs");

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
}

]).then(function(resp) {
    console.log("Your project title is " + resp.projectTitle);

});