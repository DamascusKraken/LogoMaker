const inquirer = require('inquirer');

const questionShape  = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shapeyou would like your Logo?',
        choices: ['circle', 'square', 'triangle']
    }
];

function getUserShape(){
    inquirer.prompt(questionShape)
    .then(function(userInput) 
    {
        if(userInput.shape == 'circle' )
        {
            createCircle
        }
    }
)};
















function shapes(fill, logoText, textColor){
    this.fill = fill;
    this.logoText = logoText;
    this.textColor = textColor;
};