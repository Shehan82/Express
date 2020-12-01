const express = require('express');
const path = require('path');
const students = require('./Students');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);


//added static folder
app.use(express.static(path.join(__dirname, 'public')));

//response json 
app.get('/api/students', (req, res)=>{
    res.json(students);
});

app.get('/api/students/:name', (req, res)=>{
    const found = students.some((student)=>{return student.name === req.params.name});
    if(found)
    {
        res.json(students.filter(student => student.name === req.params.name))
    }
    else
    {
        res.status(400);
        res.json({msg:"bad request"});
    }
    
})

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{console.log(`Server started on port ${PORT}`)});