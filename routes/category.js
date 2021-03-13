const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category.js");
// const {getAllCategory} = require("../controller/category.js");


router.post("/category/create/",createCategory);
// router.get("/category/getAllCategories/",createCategory);


module.exports = router;