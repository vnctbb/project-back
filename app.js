'use strict'

const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = require('./src/user/http/user.js')

const PORT = 80;

app.use('/user', user)

app.use((req, res, next) => {
    res.send('Wrong routes')
})

app.listen(PORT, (err) => {
    if (err) return err
    console.log(`Server running on PORT ${PORT}`)
});