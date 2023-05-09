// Jest tests for shapes.js
const generateSVG = require('../lib/shapes.js');

test('generates a triangle', () => {
    const answers = {
        shape: 'Triangle',
        shapeColor: 'red',
        text: 'ABC',
        textColor: 'blue',
    };
    const triangle = generateSVG(answers);
    expect(triangle).toContain('<polygon points="100, 15 200, 200 0, 200" fill="red"/>');
    expect(triangle).toContain('<text x="100" y="185" font-size="70" text-anchor="middle" fill="blue">ABC</text>');
}
);

test('generates a circle', () => {
    const answers = {
        shape: 'Circle',
        shapeColor: 'red',
        text: 'ABC',
        textColor: 'blue',
    };
    const circle = generateSVG(answers);
    expect(circle).toContain('<circle cx="150" cy="100" r="100" fill="red"/>');
    expect(circle).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>');
}
);

test('generates a square', () => {
    const answers = {
        shape: 'Square',
        shapeColor: 'red',
        text: 'ABC',
        textColor: 'blue',
    };
    const square = generateSVG(answers);
    expect(square).toContain('<rect width="200" height="200" fill="red"/>');
    expect(square).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>');
}
);