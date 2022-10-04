const express = require('express');
const cors = require('cors');
const { generate } = require('generate-password');

const app = express();
const port = 8000;

app.use(cors());
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



app.get('/password', (req, res) => {
    let options = req.query;
    const parsedOptions = {
        length: Number(options.length),
        numbers: !(options.numbers === 'false'),
        symbols: !(options.symbols === 'false'),
        uppercase: !(options.uppercase === 'false'),
        lowercase: !(options.lowercase === 'false')
    }
    let password = generate(parsedOptions);
    return res.json(password)
});