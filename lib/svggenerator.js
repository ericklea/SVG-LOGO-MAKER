class SVG {
    constructor() {
        this.text = " ";
        this.shape = " ";
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`
    }
    setTextElement(incomingText,color) {
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${incomingText}</text>`
    }
    setShapeElement(incomingShape) {
        this.shape = incomingShape.render()
    }
}
module.exports = SVG;