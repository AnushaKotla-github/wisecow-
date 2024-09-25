const express = require('express');
const cowsay = require('cowsay');
const fortune = require('fortune');

const app = express();
const PORT = 4499;

app.get('/', (req, res) => {
    // Get a random fortune
    const randomFortune = fortune(); 
    const response = cowsay.say({ text: randomFortune.toString() }); // Convert fortune to string
    res.send(`<pre>${response}</pre>`);
});

app.listen(PORT, () => {
    console.log(`Wisdom served on port=${PORT}...`);
});
