const bookModel = require("../models/bookModel.js")
const BookModel= require("../models/bookModel.js")
       
let createAuthor=async(req,res)=>{
   let data = req.body
   let saveData = await AuthorModel.create(data)
   res.send({msg:saveData})
}

let createBooks=async(req,res)=>{
   let data = req.body
   let saveData = await BoookModel.create(data)
   res.send({msg:saveData,data})
}
let getBooksbyChetanBhagat=async(req,res)=>{
   let data = await AuthorModel.find({author_name:"chetan Bhagat"}).select("author_id")
   let bookData=await bookModel.find({author_id:date[0].author_id})
   res.send({msg:bookData,data})
}
let authorofBook=async(req,res)=>{
   let data = await bookModel.findOneUpdate({name:"two state"},{$set:{price:100}},{new:true})
   let authorData =await AuthorModel.find({author_id:data[0].author_id}).select{"author_name"}
   let price = data.price
   res.send({msg:authorData,price})
}

let getBooksbyRS=async(req,res)=>{
   let data=await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1}).map(x=>x.author_name)
   res.send({msg:data})
}