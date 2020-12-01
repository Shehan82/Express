const express = require('express');
const students = require('../../Students');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json(students);
});

router.get('/:name', (req, res)=>{
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

router.post('/', (req, res)=>{
    
    const newMember = {
        name: req.body.name,
        age: req.body.age,
        uni: req.body.uni
    }

    students.push(newMember);
    res.json(students);
})

module.exports = router;