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