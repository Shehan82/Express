const express = require("express");
const { append } = require("vary");

const app = express();

app.use(express.urlencoded({extended:true}));


//midlware and routings

app.get('/',(req,res)=>{
    res.send("hello how are you")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server is runnig on port ${PORT}`)});

