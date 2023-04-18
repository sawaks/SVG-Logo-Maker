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
        if (this.shape) {
            const shapes = {
                Triangle: 'polygon points="25,25 100,200 175,25"',
                Circle: 'circle cx="25" cy="75" r="20"',
                Square: 'rect x="10" y="10" width="30" height="30"',
            }
            return shapes[this.shape];
        } else {
            return '';
        }
    }

    renderResult() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <${this.renderShapes()} stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>
        <text x="25" y="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
      </svg>
        `
    }
}

module.exports = Render;