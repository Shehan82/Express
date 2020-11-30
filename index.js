const express = require('express');
const path = require('path');
const students = require('./Members');

const app = express();





app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/students', (req, res)=>{
    res.json(students);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{console.log(`Server started on port ${PORT}`)});