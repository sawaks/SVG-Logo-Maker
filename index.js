const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const renderSVG = require('./liv/shapes.js');


const questions = [{
    type: 'input',
    name: 'text',
    message: 'What is text for the logo? (Must not be more than 3 characters.)',
},
{
    type: 'input',
    name: 'text-color',
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
    name: 'shape-color',
    message: 'Which color do you choose for the shape?',

},
]

function writeToFile(fileName, data) {
    return inquirer.prompt(data).then((data) => {
        const svgOutput = renderSVG.render(data)
        console.log(svgOutput);

        writeFile(fileName, svgOutput, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('file writing successful');
            }
        });
    })
}

function init() {
    writeToFile('./examples/result.svg', questions);
}

init();