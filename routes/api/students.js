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

    const newStudent = {
        name: req.body.name,
        age: req.body.age,
        uni: req.body.uni
    }

    students.push(newStudent);
    res.json(students);
})


//update
router.put('/:name', (req, res)=>{
    const found = students.some((student)=>{return student.name === req.params.name});
    if(found)
    {
        const updtdMember = req.body;
        students.map(member => {
            if(member.name === req.params.name)
            {
                member.name = updtdMember.name;
                member.age = updtdMember.age;
                member.uni = updtdMember.uni;
                res.json(member);
               
            }
            else
            {
                res.json({msg:"does not find any matching"})
            }
    })

        
    }
    else
    {
        res.status(400);
        res.json({msg:"bad request"});
    }
    
})


module.exports = router;