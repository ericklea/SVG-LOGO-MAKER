// Exports `Triangle`, `Circle`, and `Square` classes

// Class constructor Shapes that takes in a color
class Shapes {
    constructor(text, color) {
        this.text = text;
        this.color = color;
        if (text.length > 4) {
            throw new Error("Text too long!");
        }
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`
    }
}

// Setup Triangle class that inherits from Shapes
class Triangle extends Shapes {
    constructor(text, color, points) {
        super(text, color);
        this.points = points;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        <polygon points="${this.points}" fill="${this.color}"/>
        </svg>`
    }
}

module.exports = Triangle;

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
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}"/>
        </svg>`
    }
}

module.exports = Circle;

// Setup Square class that inherits from Shapes
class Square extends Shapes {
    constructor(text, color, x, y, width, height) {
        super(text, color);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>
        </svg>`
    }
}

module.exports = Square;