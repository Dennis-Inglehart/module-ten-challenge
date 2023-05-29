function processAnswers(answers) {
    // TODO: change "But you don't even deserve" to "Created"
    console.log(`\n But you don't even deserve a logo that says "${answers.wordmarkText}", written in ${answers.wordmarkColor} on a ${answers.shapeColor} ${answers.shapeShape} background.\n`);
}

module.exports = {processAnswers: processAnswers};