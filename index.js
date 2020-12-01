const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);


//added static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/students', require('./routes/api/students'))



//response json 


const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{console.log(`Server started on port ${PORT}`)});