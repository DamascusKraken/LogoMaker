class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    getText(){
        return this.text;
    }

    setText(text){
        this.text == text;
    }

    getTextColor(){
        return this.textColor;
    }

    setTextColor(textColor){
        this.textColor = textColor;
    }

    getShapeColor(){
        return this.shapeColor;
    }

    setShapeColor(shapeColor){
        this.shapeColor = shapeColor;
    }

}

class Circle extends Shape{
   
       format(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.slice(0,3).toUpperCase()}</text>
        </svg>`;
    };

}

class Square extends Shape{
    format(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" width="300" height="200" fill = "${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.slice(0,3).toUpperCase()}</text>
        </svg>`;
    };
}

class Triangle extends Shape{
    format(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 300,190 0,190" fill= "${this.shapeColor}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.slice(0,3).toUpperCase()}</text>
        </svg>`;
    };
}
module.exports = {Circle, 
                  Square,
                  Triangle};