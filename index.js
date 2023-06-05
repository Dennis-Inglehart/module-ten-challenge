const inquirer = require('inquirer');
const fs = require('fs');
const logoMaker = require('./lib/logoMaker');
const numberedColors = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // <- used to check if user input for colors is valid when hexidecimal is put in
const namedColors = require('./lib/svgColorNames');          // <- used to check if user input for colors is valid when a name is put in
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
        // instead of proper error handling, invalid inputs are reassigned arbitrary, valid values
        if(answers.wordmarkText.length > 3) {
            console.log(` "${answers.wordmarkText}" is too long. Only the first three characters (${answers.wordmarkText.substring(0, 3)}) will be used.`);
            answers.wordmarkText = answers.wordmarkText.substring(0, 3);}                                                // <- truncates text input down to 3 characters
        if (!numberedColors.test(answers.wordmarkColor) && !namedColors.includes(answers.wordmarkColor.toLowerCase())) { // <- reassigns any invalid text color choice to blue
            console.log(` "${answers.wordmarkColor}" is not a valid SVG color. You get blue text.`);
            answers.wordmarkColor = "blue";}
        if (!numberedColors.test(answers.shapeColor) && !namedColors.includes(answers.shapeColor.toLowerCase())) {       // <- reassigns any invalid shape color choice to orange
            console.log(` "${answers.shapeColor}" is not a valid SVG color. You get an orange background.`);
            answers.shapeColor = "orange";}
        console.log(`\n Generating a logo that says "${answers.wordmarkText}", written in ${answers.wordmarkColor} on a ${answers.shapeColor} ${answers.shapeShape} background....`);
        const backgroundShape = logoMaker.processAnswers(answers);
        writeLogo(backgroundShape);
    })}
    
function writeLogo(backgroundShape) {
    fs.writeFile('logo.svg', backgroundShape, (err) => {
        if (err) {
            console.error(" Something went wrong:", err);
        } else {
            console.log(" Generated logo.svg\n"); // The exact words "Generated logo.svg" are part of the requirements, so don't change them
          }})}

init();