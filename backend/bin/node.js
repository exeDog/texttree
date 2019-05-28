const express = require('express');
const bodyParser = require('body-parser');
const websocketDriver = require('./webDriver');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'../../','resources/js')));

app.listen(3002,()=>{
    console.log('App listening on port 3002');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../../','index.html'));
});

app.get('/data', (req, res) => {
    console.log('here');
    let data = websocketDriver._get();
    res.send({data:data});
});
