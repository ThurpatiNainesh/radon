const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id: { 
    type:objectId,
    ref:"newAuthor"
    },
    
    Pubobj_id:{
        type:objectId,
        ref:"publisher"
    },
    prices:Number,
    ratings:Number
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users