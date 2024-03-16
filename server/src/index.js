const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const { default: mongoose } = require('mongoose');
dotenv.config()
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001
app.use(bodyParser.json())
routes(app)


mongoose.connect(`${process.env.MONGO_DB}`).then(()=>{
    console.log('Connect Database succesfully')
}).catch(err => {
    console.log(err)
})



app.listen(port ,()=>{
    console.log('Server is running is ', port)
})