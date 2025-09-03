const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => process.stdout.write(`Your name is: ${data}`));

process.stdin.on('end', () => displayMessage('This important software is now closing'));
