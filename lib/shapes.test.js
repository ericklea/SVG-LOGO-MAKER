// Jest tests for shapes.js
const Triangle = require('./shapes.js');
describe ('Triangle', () => {
    it('should render a triangle with the correct color', () => {
const shape = new Triangle();
shape.setColor("");
expect(shape.render()).toEqual('<polygon points="100,0 0,200 200,200" fill=""/>')
    });
});

const shape = new Circle();
shape.setColor("");
expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill=""/>')

const shape = new Square();
shape.setColor("");
expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill=""/>')