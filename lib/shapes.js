class Render {
    constructor(text, textColor, shape, shapeColor) {
        if (text.length > 3) {
            throw new Error('`text` must not be more than 3 characters.');
        }

        this.text = text;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }

    renderShapes() {

        if (this.shape === 'Triangle') {
            return ` <polygon points="50,150 100,50 150,150} stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
            <text x="100" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        } else {
            const shapes = {
                Circle: 'circle cx="100" cy="100" r="50"',
                Square: 'rect x="50" y="50" width="100" height="100" ',
            }
            return `<${shapes[this.shape]} stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
            <text x="100" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }

    }

    renderResult() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.renderShapes()}
        `
    }
}

module.exports = Render;