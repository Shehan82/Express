const express = require('express');
const path = require('path');
const students = require('./Students');

const app = express();

//middelware function
const logger = (req,res,next)=>{
    console.log('hello');
    next();
}

app.use(logger);


//added static folder
app.use(express.static(path.join(__dirname, 'public')));

//response json 
app.get('/api/students', (req, res)=>{
    res.json(students);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{console.log(`Server started on port ${PORT}`)});