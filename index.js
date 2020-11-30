const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res)=>{
//     // res.send("<h1>Hello wordssdsld</h1>");
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//set static folder for urls
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{console.log(`Server started on port ${PORT}`)});