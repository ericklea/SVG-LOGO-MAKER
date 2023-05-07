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
    render() {
        return `<polygon points="100,0 0,200 200,200" fill="${this.color}"/>`
    }
}
class Circle extends Shapes {
    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`
    }
}
class Square extends Shapes {
    render() {
        return `<rect x="0" y="0" width="200" height="200" fill="${this.color}"/>`
    }
}
//Function to generate SVG file

//}

module.exports = {Triangle, Circle, Square};

