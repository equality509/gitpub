const express = require('express');
const app = express();
const drinks = require('./models/drinks')

app.get('/', (req, res ) => {
    res.send(drinks)
})



app.listen(3000,() => {
    console.log('listening on 3000')
});