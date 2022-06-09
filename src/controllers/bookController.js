const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBookAutData= async function (req, res) {
    let book = await BookModel.find()
    res.send({msg:book})
}
const getBookPubData= async function (req, res) {
    let book = await BookModel.find().populate('author_id','pubobj_id')
    res.send({msg:book})
}


module.exports.createBook= createBook
module.exports.getBookAutData= getBookAutData
module.exports.getBookPubData=getBookPubData