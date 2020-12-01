const express = require('express');
const path = require('path');
const students = require('./Students');
const moment = require('moment');
const logger = require('./middleware/logger');

const app = express();




app.use(logger);


//added static folder
app.use(express.static(path.join(__dirname, 'public')));

//response json 
app.get('/api/students', (req, res)=>{
    res.json(students);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{console.log(`Server started on port ${PORT}`)});