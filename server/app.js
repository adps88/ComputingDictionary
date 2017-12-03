const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.json({message: 'Hello World!'}));

let server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = server;