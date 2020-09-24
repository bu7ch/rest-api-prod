//configuration de base
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 4567


// -----------------------------------------------------------

app.use(cors());


app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
 
app.listen(port, () => console.log(`Application is running on port : ${port}`))