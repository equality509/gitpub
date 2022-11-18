const express = require('express');
const app = express();
const drinks = require('./models/drinks')

app.get('/drinks', (req, res ) => {
    res.render('drinks_index.ejs',
    {drinks: drinks})
});

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})





app.listen(3000,() => {
    console.log('listening on 3000')
});