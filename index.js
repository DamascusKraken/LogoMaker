const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./develop/lib/generateSvg');

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
        writeToFile("./develop/examples/logo.svg", generateSvg.generateSvg(data));
        console.log(data);
    

    });
};

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        err? console.log(err) : console.log("Generated logo.svg");
    })
}

initialize();