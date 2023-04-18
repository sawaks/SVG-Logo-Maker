const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const inquirer = require('inquirer');
const Render = require('./lib/shapes.js');


const questions = [{
    type: 'input',
    name: 'text',
    message: 'What is text for the logo? (Must not be more than 3 characters.)',
},
{
    type: 'input',
    name: 'textColor',
    message: 'Which color do you choose for the text?',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose which shape for the logo.',
    choices: ['Triangle', 'Circle', 'Square'],

},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Which color do you choose for the shape?',

},
]

function writeToFile(fileName, data) {
    return inquirer.prompt(data).then((data) => {
        const svgData = new Render(
            data.text,
            data.textColor,
            data.shape,
            data.shapeColor,
        )
        console.log(svgData);
        const svg = svgData.renderResult();
        return writeFile(fileName, svg);
    })
        .then(() => {
            console.log('file writing successful');
        })
        .catch((err) => {
            console.log(err);
        });
}

function init() {
    writeToFile('./examples/logo.svg', questions);
}

init();