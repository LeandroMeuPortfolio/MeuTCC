const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('app/public'));
app.use(expressValidator());
app.use(expressSession({
    secret:'chavesecreta',
    resave: false,
    saveUninitialized: false,
}));
consign()
    .include('app/routes')
    .then('app/controllers')
    .then('app/models')
    .then('config/dbConnection.js')
    .into(app);


module.exports = app;