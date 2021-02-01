const express = require('express');
const app = express();
const path = require('path');


const mongoose = require('mongoose');


mongoose.connect
('mongodb://127.0.0.1:27017/androidApi',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true

}).then(() =>{
    console.log('database connected');
});

const userRoutes = require('./routes/user');
const studentRoutes = require('./routes/student');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', studentRoutes);


app.listen(1000);