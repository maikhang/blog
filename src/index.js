const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('home');
});


// Template Engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log('PATH: ', path.join(__dirname, 'resources\\views'));
// example
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})