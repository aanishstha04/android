const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max : 30
    },

    Age: {
        type: Intl
    },
    Gender:{
        type:String
    },
    Address:{
        type:String,
        trim:true
    }
} );



module.exports = mongoose.model('Student', studentSchema);