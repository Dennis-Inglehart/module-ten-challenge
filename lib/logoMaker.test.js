const { Circle, Square, Triangle } = require('./logoMaker');

describe('Circle', () => {
    test('should make a gray circle', () => {
      const testCircle = new Circle({
        wordmarkText: 'CIR',
        wordmarkColor: 'black',
        shapeColor: 'gray',
      });      
      const circleRender = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><circle cx="100" cy="150" r="60" fill="gray"/>
      <text fill="black" font-size="60" x="100" y="150" text-anchor="middle">CIR</text></svg>`;
      
      expect(testCircle.render().replace(/\s/g, '')).toEqual(circleRender.replace(/\s/g, ''));
      // ^ the `.replace(/\s/g, '')` bits replace linebreaks with `''`.  They're here because tests were failing because of differences in whitespace.
});});

describe('Square', () => {
  test('should make a blue square', () => {
    const testSquare = new Square({
      wordmarkText: 'SQU',
      wordmarkColor: 'cyan',
      shapeColor: 'blue',
    });    
    const squareRender = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect x="50" y="50" width="100" height="100" fill="blue"/>
    <text fill="cyan" font-size="60" x="100" y="150" text-anchor="middle">SQU</text></svg>`;
    
    expect(testSquare.render().replace(/\s/g, '')).toEqual(squareRender.replace(/\s/g, ''));
});});

describe('Triangle', () => {
    test('should make a red triangle', () => {
      const testTriangle = new Triangle({
        wordmarkText: 'TRI',
        wordmarkColor: 'coral',
        shapeColor: 'pink',
      });      
      const triangleRender = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><polygon points="50 150, 100 50, 150 150" fill="pink"/>
      <text fill="coral" font-size="60" x="100" y="150" text-anchor="middle">TRI</text></svg>`;
      
      expect(testTriangle.render().replace(/\s/g, '')).toEqual(triangleRender.replace(/\s/g, ''));
});});