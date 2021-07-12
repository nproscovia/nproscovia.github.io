

var express = require('express');
var app = express();

var path = require('path');


app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'css')));


app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    
    res.render('index', {
        time: date.toTimeString(),
        cssFile : cssFile
    });
});

app.listen(3000, () => console.log("server running on port 3000"));