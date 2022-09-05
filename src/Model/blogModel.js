
let mongoose = require('mongoose')
let objectId = mongoose.Schema.Types.ObjectId;
let blogSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    authorId:{
        type:objectId,
        required:true

    },
    tags:{

        type:[String]
    },
    category:{
        type:String,
        required:true
    },
    subcategory:{
        type:[String],
        required:true

    },
    deletedAt:{
        type:Date,
        default:null
    },
    isDeleted:{
        type:Boolean ,
        default:false
    },
    publishedAt:{
        type:Date,
        default:null

    },
    isPublished:{
        type:Boolean,
        default:false
    }

    
},{timestamps:true})

module.exports = mongoose.model('blogModel',blogSchema)