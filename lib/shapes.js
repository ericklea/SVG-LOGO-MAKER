// Exports `Triangle`, `Circle`, and `Square` classes

// Class constructor Shapes that takes in text and a color
class Shapes{
    constructor() {
        this.color = " ";
}
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="100,0 0,200 200,200" fill="${this.color}"/>`
    }
}

//class Shapes{
   // constructor(text, color) {
        //this.text = text;
       // this.color = color;
   // }
        //if (text.length > 3) {
           // throw new Error("Text too long!");
       // }
   // }
   // render() {
       // return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      //  </svg>`
   // }
//}

// Setup Triangle class that inherits from Shapes
class Triangle extends Shapes {
    constructor(text, color, points) {
        super(text, color);
        this.points = points;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        </svg>`
    }
}


// Setup Circle class that inherits from Shapes
class Circle extends Shapes {
    constructor(text, color, cx, cy, r) {
        super(text, color);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        </svg>`
    }
}


// Setup Square class that inherits from Shapes
class Square extends Shapes {
    constructor(color, x, y, width, height) {
        super(color);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="${this.color}"/>
        </svg>`
    }
}

//Function to generate SVG file
function shapesJS(answers) {
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

module.exports = shapesJS;

