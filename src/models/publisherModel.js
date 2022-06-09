const mongoose = require('mongoose');

const objectId=mongoose.Schema.Types.ObjectId
const publisherSchema = new mongoose.Schema( {
    Pubobj_id:{
        type:objectId,
        ref:"publisher",
    Name:String,
    HeadhQuater:String,
    
}, { timestamps: true });


module.exports = mongoose.model('newpubliser',publisherSchema) //users