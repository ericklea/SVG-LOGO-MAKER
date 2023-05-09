

// Class constructor Shapes that takes in text and a color
class Shapes{
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}
//Class constructor Triangle that extends Shapes
class Triangle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<svg width="300" height="200"version="1.1"xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
//Class constructor Circle that extends Shapes
class Circle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
       </svg>`;
    }
}
//Class constructor Square that extends Shapes
class Square extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
       <rect width="200" height="200" fill="${this.shapeColor}"/>
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
       </svg>`;
    }
}
//Function to generate SVG file
function generateSVG(answers) {
    if (answers.shape === "Triangle") {
        const triangle = new Triangle(answers.shapeColor, answers.text, answers.textColor);
        return triangle.render();
    }
    else if (answers.shape === "Circle") {
        const circle = new Circle(answers.shapeColor, answers.text, answers.textColor);
        return circle.render();
    }
    else if (answers.shape === "Square") {
        const square = new Square(answers.shapeColor, answers.text, answers.textColor);
        return square.render();
    }
    else {
        console.log("Error: No shape selected");
    }
}
//Exports `Triangle`, `Circle`, and `Square` classes
module.exports = generateSVG;

