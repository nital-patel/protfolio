const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.listen(3000, function (req, res) {
  console.log('Github Pages Protfolio');
})
