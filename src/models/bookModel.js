const mongoose = require('mongoose');

const authorSchema = new mongoose.schema({
    author_id:{
        type:String,
        unique:true,
        required:true
    },
    author_name:String,
    age:B=Number,
    address:string
},{timeStamp:true})

const booksSchema = new mangoose .schema({
    name :string,
    author_id:{
        type:String,
        unique:true,
        required:true
    },
    price:Number,
    rating:Number

})

module.exports = mongoose.model('author',authorSchema)
module.exports = mongoose.model('author',booksSchema)
