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