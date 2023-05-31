class LogoType {
    constructor(wordmarkText, wordmarkColor, shapeColor){
        this.wordmarkText = wordmarkText,
        this.wordmarkColor = wordmarkColor,
        this.shapeColor = shapeColor
    }}

class Circle extends LogoType {
    constructor(answers) {super(answers);}
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><circle cx="100" cy="150" r="60" fill="${this.shapeColor}" /></svg>`;
    }}

class Square extends LogoType {
    constructor(answers) {super(answers);}
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect width="100" height="100" rx="15" fill="${this.shapeColor}" /></svg>`;
    }}

class Triangle extends LogoType {
    constructor(answers) {super(answers);}
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><polygon points="100 0, 0 ,0 50, 100" fill="${this.shapeColor}" /></svg>`; // it's upside-the-fuck-down >:(
    }}

function processAnswers(answers) {
    // TODO: change "But you don't even deserve" to "Created"
    console.log(`\n But you don't even deserve a logo that says "${answers.wordmarkText}", written in ${answers.wordmarkColor} on a ${answers.shapeColor} ${answers.shapeShape} background.\n`);
    switch(answers.shapeShape){
        case "circle":
            console.log("processAnswers acknowledges 'circle'.");
            const makeCircle = new Circle(answers);
            return makeCircle.render();
        case "square":
            console.log("processAnswers acknowledges 'square'.");
            const makeSquare = new Square(answers);
            return makeSquare.render();
        case "triangle":
            console.log("processAnswers acknowledges 'triangle'.");
            const makeTriangle = new Triangle(answers);
            return makeTriangle.render();
        default:
            console.log("Somehow, no valid shape was selected. This should never happen. If you are reading this, then inquirer.js has attained sentience. Panic.")
            break;
    }
}

module.exports = {processAnswers: processAnswers};