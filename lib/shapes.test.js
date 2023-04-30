// Jest tests for shapes
const shape = new Triangle();
shape.setColor("");
expect(shape.render()).toEqual('<polygon points="100,0 0,200 200,200" fill=""/>')
    