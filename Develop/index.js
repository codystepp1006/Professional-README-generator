// TODO: Include packages needed for this application
//bringing in other files and folders using the inquirer function
//npm init creates package.json then npm install inquirer
const inquirer = require('inquirer');
const fs = require('fs');   
const path = require('path');
const generateMarkdown = require('./genmrkdwn/generateMarkdown');
// TODO: Create an array of questions for user input
//Created an object with a list of questions. 
const questionsList = [
    {
        type: "input",
        name: "yourname",
        message: "Whats your name? (first and last)",
    },
    {
        type: "input",
        name: "projectname",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "projreason",
        message: "What is the reason for this project and what is its functionality?",
    },
    {
        type: "checkbox",
        name: "licence",
        message: "Did you use any licenses?",
        choices: [ "none" , "MTI",  "Boost1.0", "BSD2", "BSD3", "APACHE2,0",],
    },
    {
        type: "input",
        name: "require",
        message: "What dependencies did you use?",
    },
    {
        type: "input",
        name: "usage",
        message: "What languages did you use in this project?",
    },
    {
        type: "input",
        name: "github",
        message: "Whats your GITHUB username?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Was there any contributers to this project?",
        default: "",
    },
    {
        type: "input",
        name: "directions",
        message: "What are the steps to test this project if any?",
    },
    {
        type: "input",
        name: "note",
        message: "Do you have any notes you would like to add?",
        default: "",
    }
];





// TODO: Create a function to initialize app
//initializing the application using this function
function initialize() {
    inquirer.prompt(questionsList)
    .then((res) => {
        console.log("generating a professional README.md file now...");
        createFile("./readme/README.md", generateMarkdown({...res}));
        console.log("made it here");
    });
}



// TODO: Create a function to write README file
function createFile(dirpath, data) {
    console.log(path);
    return fs.writeFileSync(path.join(process.cwd(), dirpath), data);
}


// Function call to initialize app
initialize();