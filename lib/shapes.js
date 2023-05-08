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
        return <svg>`<polygon points="100,0 0,200 200,200" fill="${this.color}"/>`
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>;
    }
}
//Class constructor Circle that extends Shapes
class Circle extends Shapes {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        return <svg>`<circle cx="100" cy="100" r="100" fill="${this.color}"/>`
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>;
    }
}
//Class constructor Square that extends Shapes
class Square extends Shapes {
    constructor(color, text) {
        super(color, text);
    }
    render() {
        return <svg>`<rect x="0" y="0" width="200" height="200" fill="${this.color}"/>`
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>;
    }
}
//Function to generate SVG file
function generateSVG(data) {
    return `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${data}
    </svg>
    `
}
//Exports `Triangle`, `Circle`, and `Square` classes
module.exports = generateSVG;

