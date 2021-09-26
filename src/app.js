const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({urlencoded: true}));
//serve static files
app.use('/static', express.static(path.join(__dirname, '../assets')));
//end

app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'pug');

app.use(require('./routes/users.routes'));
app.use(require('./routes/home.routes'));

module.exports = app;