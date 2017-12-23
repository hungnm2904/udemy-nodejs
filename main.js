const express = require('express');
const path = require('path');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home Page'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Page'
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
