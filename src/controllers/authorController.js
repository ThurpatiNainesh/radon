const authorModel = require ("../models/authorModel")

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})

const getBookAutData = async function(req,res){
    let author = await authorModel.find()
    res.send({data:author})
}




module.exports.createauthor= createauthor;
module.exports.getBookAutData = getBookAutData;