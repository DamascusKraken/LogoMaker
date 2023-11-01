const shapes = require('./shapes.js');
const shape = new shapes.Triangle();
shape.setTextColor("blue");
shape.setShapeColor("white");
shape.setText("SVG");


describe('index.js', () => {
expect(shape.format()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,10 300,190 0,190" fill= "blue"/>
<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);

});