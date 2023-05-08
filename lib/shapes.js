// Exports `Triangle`, `Circle`, and `Square` classes

// Class constructor Shapes that takes in text and a color
class Shapes{
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }
}
//Class constructor Triangle that extends Shapes
class Triangle extends Shapes {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        return `<svg><polygon points="150, 18 244, 182 56, 182"fill="${this.color}"/>
        <text x="50" y="25" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}
//Class constructor Circle that extends Shapes
class Circle extends Shapes {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        return `<svg><circle cx="100" cy="100" r="100" fill="${this.color}"/>
        <text x="50" y="25" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>
        <circle cx="100" cy="100" r="100" fill="${this.color}"/>
        </svg>`;
    }
}
//Class constructor Square that extends Shapes
class Square extends Shapes {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        return `<svg><rect x="0" y="0" width="200" height="200" fill="${this.color}"/>
        <text x="50" y="25" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>
        <rect x="0" y="0" width="200" height="200" fill="${this.color}"/>
        </svg>`;
    }
}
//Function to generate SVG file
function generateSVG(answers) {
    if (answers.shape === "Triangle") {
        const triangle = new Triangle(answers.text, answers.color, answers.points);
        return triangle.render();
    }
    else if (answers.shape === "Circle") {
        const circle = new Circle(answers.text, answers.color, answers.cx, answers.cy, answers.r);
        return circle.render();
    }
    else if (answers.shape === "Square") {
        const square = new Square(answers.text, answers.color, answers.x, answers.y, answers.width, answers.height);
        return square.render();
    }
    else {
        console.log("Error: No shape selected");
    }
}
//Exports `Triangle`, `Circle`, and `Square` classes
module.exports = generateSVG;

