const express = require('express');
const BookController= require("../controllers/bookController")
const authorController = require("../controllers/authorController")
const publisherController =require("../controllers/publisherController");
const router = express.router();
router.post("/createBook", authorController.createauthor  )

router.post("/publisherData", publisherController.getpublisherData)

router.get("/getBookPubData", BookController.getBookPubData)




module.exports = router;