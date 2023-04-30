// Exports `Triangle`, `Circle`, and `Square` classes

// Class constructor Shapes that takes in a color
class Shapes {
    constructor(color) {
        this.color = color;
    }
}

// Setup Triangle class that inherits from Shapes
class Triangle extends Shapes {
    constructor(color, points) {
        super(color);
        this.points = points;
    }
}

// Setup Circle class that inherits from Shapes
class Circle extends Shapes {
    constructor(color, cx, cy, r) {
        super(color);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
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
}