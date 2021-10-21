const express = require('express');
const app = express();

app.set('views', './client/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    titlePage: 'Home page'
  });
});

app.get('/profile', (req, res) => {
  res.render('index', {
    titlePage: 'Profile page'
  });
});

app.get('/cart', (req, res) => {
  res.render('index', {
    titlePage: 'Cart page'
  });
});

app.listen(3000, () => {
  console.log('start server');
});