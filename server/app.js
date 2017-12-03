const express = require('express');
const fs = require('fs');
const app = express();

let lineReader = (memo, line) => {
    let values = line.split(":");
    memo[values[0].trim()] = values[1].trim();
    return memo;
};

module.exports = (onStart) => {
    app.get('/hello', (req, res) =>
        res.json({message: 'Hello World!'})
    );
    app.get('/goodbye', (req, res) =>
        res.json({message: 'Cya!'})
    );
    app.get('/definitions', (req, res) => {
        fs.readFile('./definitions.txt', 'utf8', function (err, data) {
            if (err) return console.log(err);
            let result = data.split("\n").reduce(lineReader, {});
            res.json(result);
        });
    });
    return app.listen(3000, onStart);
};