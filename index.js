const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./develop/lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text you want on your Logo.',
        default: 'SVG',
    },
    {
        type: 'input', 
        name: 'textColor',
        message: 'What color would you like the text?',
        default: 'black'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape you would like your Logo?',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the Shape?',
        default: 'red'
    }
];

function initialize()
{
    inquirer.prompt(questions)
    .then(function (data){
       let shapeFormatting;
        if( `${data.shape}` == "circle")
        {
        
      let circle = new shapes.Circle(data.text, data.textColor, data.shapeColor);
         shapeFormatting = circle.format(data);
         writeToFile("./develop/examples/logoCircle.svg", shapeFormatting);
        console.log(data);
    
      
        }
        else if (`${data.shape}` == "square")
        {
            let square = new shapes.Square(data.text, data.textColor, data.shapeColor);
            shapeFormatting = square.format(data);
            writeToFile("./develop/examples/logoSquare.svg", shapeFormatting);
        console.log(data);
            console.log(data);
        }
            else if(`${data.shape}` == "triangle")
        {
            let triangle = new shapes.Triangle(data.text, data.textColor, data.shapeColor);
            shapeFormatting = triangle.format(data);
            writeToFile("./develop/examples/logoTriangle.svg", shapeFormatting);
            console.log(data);
            
        }

        
        

        });
    };



function writeToFile(fileName, shapeFormatting){
    fs.writeFile(fileName, shapeFormatting, err => {
        err? console.log(err) : console.log("Generated logo.svg");
    })
}

initialize();