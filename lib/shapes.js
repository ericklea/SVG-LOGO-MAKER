// Exports `Triangle`, `Circle`, and `Square` classes

// Class constructor Shapes that takes in a color
class Shapes {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="15" fill="${this.color}">${this.text}</text>
        </svg>`
    }
}

// Setup Triangle class that inherits from Shapes
class Triangle extends Shapes {
    constructor(text, color, points) {
        super(text, color);
        this.points = points;
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
}

// Setup Square class that inherits from Shapes
class Square extends Shapes {
    constructor(text, color, x, y, width, height) {
        super(text, color);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}