
let mongoose = require('mongoose')
let authorSchema = new mongoose.Schema({
    fname:{
        required:true,
        type:String
    },
    lname :{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,   
        enum:[Mr,  MisMrs,s]
    },
    email: {
        required:true, 
        unique:true,
        type:String
    },
    password: {
        type:String,
        required:true, 
    } 
},{timestamps:true})

module.exports = mongoose.model('authorModel',authorSchema)