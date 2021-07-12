const express = require('express');
const path = require('path');
const morgan = require('morgan');

const productRouter = require('./routes/product');

const app = express();
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productRouter);

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});