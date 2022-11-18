const express = require('express');
const app = express();
const drinks = require('./models/drinks')
const food = require('./models/food')

app.get('/drinks', (req, res ) => {
    res.render('drinks_index.ejs',
    {drinks: drinks,
    food: food}
    )
});

// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id)
// })


app.get('/drinks/:index', (req, res) => {
    // res.render(template, data)
    res.render(
        'drinks_show.ejs', 
    {
        drinks: drinks[req.params.index],
        food: food[req.params.index],
        index: req.params.index
    });
});



app.listen(3000,() => {
    console.log('listening on 3000')
});