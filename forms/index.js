const express = require("express");
const app = express();




//midlware and routings
app.set('view engine', 'pug');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    // res.send("hello how are you")
    res.render('getForm');
})

app.get('/getSubmit', (req,res)=>{

    // res.send(req.query.first);

    res.render('after', {first: req.query.first});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server is runnig on port ${PORT}`)});

