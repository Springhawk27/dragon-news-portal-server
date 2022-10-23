const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')


app.use(cors())

const categories = require('./data/categories.json');
const news = require('./data/news.json');



app.get('/', (req, res) => {
    res.send('News Portal running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }

})

app.get('/news/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;

    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);

})

app.listen(port, () => {
    console.log('News Portal Server is Running on port ', port);
})