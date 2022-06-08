const express = require('express');
const router = express.router();
const BookController= require("../controllers/bookController")

router.get("test-me",function(req,res){
    res.send("my first ever api!")
})

router.post("/createAuthor",BookController.createAuthor)

router.post("/createBook",BookController.createBooks)

router.get("/getBooksbyChetanBhagat",BoookController.getBooksbyChetanBhagat)
router.get("/authorOfBook",BookController.authorOfBook)

router.get("/getBooksbyRs",BookController.getBooksbyRs)



module.exports = router;