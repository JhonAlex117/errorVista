const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const coustomerRoutes = require('./routes/coustomers')

//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'bdllanogrande'
}, 'single'))
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', coustomerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get("port"));
});