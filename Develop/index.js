// TODO: Include packages needed for this application
const fs = require('fs');   
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What name would you like to use for your project?",
    },
    {
        type: "input",
        name: "description ",
        message: "What is the reason for this project and what is its functionality?",
    },
    {
        type: "checkbox",
        name: "licence",
        message: "Please select a licencse applicable to this project.",
        choices: ["MIT", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "Project dependenceies go here",
    },
    {
        type: "input",
        name: "title",
        message: "question",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
