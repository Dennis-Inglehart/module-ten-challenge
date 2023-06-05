class LogoType {
    constructor(wordmarkText, wordmarkColor, shapeColor){
        this.wordmarkText = wordmarkText,
        this.wordmarkColor = wordmarkColor,
        this.shapeColor = shapeColor
    }}

// This is pretty bad, because I repeat myself 3 times; most of the `render()` function could probably be defined in the parent function, and inherited by the shapes
class Circle extends LogoType {
    constructor(answers) {super(answers.wordmarkText, answers.wordmarkColor, answers.shapeColor);}
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
        <circle cx="100" cy="150" r="60" fill="${this.shapeColor}" />
        <text fill="${this.wordmarkColor}" font-size="60" x="100" y="150" text-anchor="middle">${this.wordmarkText}</text>
        </svg>`;
    }}

class Square extends LogoType {
    constructor(answers) {super(answers.wordmarkText, answers.wordmarkColor, answers.shapeColor);}
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />
        <text fill="${this.wordmarkColor}" font-size="60" x="100" y="150" text-anchor="middle">${this.wordmarkText}</text>
        </svg>`;
    }}

    class Triangle extends LogoType {
        constructor(answers) {
            super(answers.wordmarkText, answers.wordmarkColor, answers.shapeColor);
        }
        render() {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><polygon points="50 150, 100 50, 150 150" fill="${this.shapeColor}" />
            <text fill="${this.wordmarkColor}" font-size="60" x="100" y="150" text-anchor="middle">${this.wordmarkText}</text>
            </svg>`;
        }
    }

function processAnswers(answers) { // called by `init()` in `index.js`
    switch(answers.shapeShape){
        case "circle":
            const makeCircle = new Circle(answers);
            return makeCircle.render();
        case "square":
            const makeSquare = new Square(answers);
            return makeSquare.render();
        case "triangle":
            const makeTriangle = new Triangle(answers);
            return makeTriangle.render();
        default:
            console.log("Somehow, no valid shape was selected. This should never happen. If you are reading this, then inquirer.js has attained sentience. Panic.")
            break;
    }
}

module.exports = {  // processAnswers is for index.js; the shapes are for logoMaker.test.js
    processAnswers: processAnswers,
    Square: Square,
    Circle: Circle,
    Triangle: Triangle
  };