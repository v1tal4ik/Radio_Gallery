const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3001;

const app = express();
require('./models/index.js');

app.use(express.static(path.join(__dirname, './build')))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use('/api/v1.0', require('./routes/api/v1.0/listRadio/index'));



app.use((req, res, next) => {
    res.sendFile(path.join(__dirname + '/build/error.html'));
});

app.use((err, req, res, next) => {
    res.status(500).json({
        err: '500',
        message: err.message
    });
});

app.listen(port, () => {
    if (!fs.existsSync('./build/img/stationIcon')) {
        fs.mkdirSync('./build/img/stationIcon');
    }
    console.log(`Server running on port : ${port}`);
});