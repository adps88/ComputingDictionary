const express = require('express');
const app = express();

module.exports = (onStart) => {
    app.get('/hello', (req, res) =>
        res.json({message: 'Hello World!'})
    );
    app.get('/goodbye', (req, res) =>
        res.json({message: 'Cya!'})
    );
    return app.listen(3000, onStart);
};