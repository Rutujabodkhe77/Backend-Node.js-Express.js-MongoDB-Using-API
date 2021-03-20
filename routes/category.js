
const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category.js");
const {getAllCategory} = require("../controller/category.js");
const {getCategorybyId} = require("../controller/category.js");
const {removeCategory} = require("../controller/category.js");

router.param("categoryId",getCategorybyId); //param : parameter

// console.log("I am In Routes");

router.post("/category/create/",createCategory);
router.get("/category/getAllCategories/",getAllCategory);
// router.post("/removeCategory",getAllCategory);

router.delete("/category/:categoryId",removeCategory); // colon (:) is param



module.exports = router; 