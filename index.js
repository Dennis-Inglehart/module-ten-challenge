const inquirer = require('inquirer');
const fs = require('fs');
const logoMaker = require('./lib/logoMaker');
// do I need `const jest = require('jest');` ? Is that how jest.js works? (Or do I only need it in `shapes.test.js`?)
const introString = "Inglehart SVG generator ver.0.1.0\n------------------------------------"

logoQuestions= [
    {
        type: "input",
        name: "wordmarkText",
        message: "What should the wordmark be?\n Please enter 3 letters (or similar characters): ",
        prefix: "\n"
    },
    {
        type: "input",
        name: "wordmarkColor",
        message: "What should the color of the text be?\n Please enter a color keyword (or hexidecimal value): ",
        prefix: "\n"
    },
    {
        type: "list",
        name: "shapeShape",
        message: "What shape should the logo be?\n Please select a shape from the list:",
        choices: ["circle", "triangle", "square"],
        prefix: "\n"
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What about shape color?\n Please enter a color keyword (or hexidecimal value): ",
        prefix: "\n"
    },
]

function init() {
    console.clear(); console.log(introString);
    inquirer.prompt(logoQuestions)    
    .then((answers) => {
        logoMaker.processAnswers(answers);
    })}

init();