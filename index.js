const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');


app.get('/', (req, res) => {
    res.send('News Portal running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('News Portal Server is Running on port ', port);
})