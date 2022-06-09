const publisherMode= require("../models/publisherModel")

const createpublisher= async function (req, res) {
    let data= req.body
    let publisher= await publisherMode.create(data)
    res.send({msg: publisher})
}
const getpublishersData = async function (req,res){
    let data= req.body
    let publisher= await publisherMode.create(data)
    res.send({msg: publisher})
}


module.exports.createpublisher=createpublisher;
module.exports.getpublisherData = getpublishersData;