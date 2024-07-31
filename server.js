const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let randomNumber = Math.floor(Math.random() * 100) + 1;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/guess', (req, res) => {
    const guess = parseInt(req.body.guess, 10);
    let message;

    if (guess < randomNumber) {
        message = 'Too low!';
    } else if (guess > randomNumber) {
        message = 'Too high!';
    } else {
        message = 'Congratulations! You guessed it!';
        randomNumber = Math.floor(Math.random() * 100) + 1; // Reset the number
    }

    res.json({ message: message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
