const { Triangle, Circle, Square } = require('./shapes.js');


describe('Triangle', () => {
    const shape = new Triangle();
    it('should render a blue triangle when color is set to blue', () => {
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points=50,150 100,50 150,150 fill="blue" />');
    });

});

describe('Circle', () => {
    const shape = new Circle();
    it('should render a blue circle when color is set to blue', () => {
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="50" fill="blue" />');
    });

});

describe('Square', () => {
    const shape = new Square();
    it('should render a blue square when color is set to blue', () => {
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="blue" />');
    });

});