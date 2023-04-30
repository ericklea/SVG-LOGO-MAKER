// Jest tests for shapes.js

// Import the Triangle class
const Triangle = require('./shapes.js');
describe ('Triangle', () => {
    it('should render a triangle with the correct color', () => {
// Create a new instance of the Triangle class
const shape = new Triangle();
// Set the color
shape.setColor("");
// Assert that the render method returns the correct SVG string
expect(shape.render()).toEqual('<polygon points="100,0 0,200 200,200" fill=""/>')
    });
});
// Import the Circle class
const Circle = require('./shapes.js');
describe ('Circle', () => {
    it('should render a circle with the correct color', () => {
// Create a new instance of the Circle class
const shape = new Circle();
// Set the color
shape.setColor("");
// Assert that the render method returns the correct SVG string
expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill=""/>')
    });
});
// Import the Square class
const Square = require('./shapes.js');
describe ('Square', () => {
    it('should render a square with the correct color', () => {
// Create a new instance of the Square class
const shape = new Square();
// Set the color
shape.setColor("");
// Assert that the render method returns the correct SVG string
expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill=""/>')
    });
});