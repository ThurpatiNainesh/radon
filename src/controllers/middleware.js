    const mid1 = function (req,res,next){
        const time1 = moment()
        const Ipadd = req.connection.remoteAddress;
        console.log(today,Ipadd,)
        res.send({msg:time1,Ipadd})
        next()
    }
    module.exports.mid1 =mid1