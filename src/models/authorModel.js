const mongoose = require('mongoose');

const objectId=mongoose.Schema.Types.objectId
const authorSchema = new mongoose.Schema( {
    authorName:String,
    author_id: { 
      type:objectId,
      ref:"newBook"
      },  

    age: Number,
    add:String,
    rating:Number,
}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema) //user

