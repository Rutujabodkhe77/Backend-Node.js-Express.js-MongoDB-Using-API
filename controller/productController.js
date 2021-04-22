const Product = require("../model/productModel");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.createProduct = 
(req, res) =>
 {
 
  const product = new Product(req.body);
  products.photo = req.file.path;
  product.save((err, category) => 
  {
    if (err) 
    {

      if(err.code === 11000 || err.code === 11001)
      {
        return res.status(400).json({
          error: "Duplicate Value " +req.body.name +",Value must be unique",
         
        });
      }
      else
      {
        return res.status(400).json({
          error: "NOT able to save category in DBs",
          messgae : err
         
        });
      }
      }
     
    res.json({ category });
  });
};


exports.getAllproduct =
   (req, res) => 
  {
    Product.find().exec((err, productData) => {
      if (err) {
        return res.status(400).json({
          error: "NO Products  found"
        });
      }
      res.json(productData);
    });
  };
// id = 60360d01c7b003412c015ce3

exports.getProductById = (req, res, next, id) => 
{
  Product.findById(id)
    .populate("category")   // get foregin key data 
    .exec((err, productData) => 
    {  
      if (err) {
        return res.status(400).json({
          error: "Product not found"
        });
      }

      req.product = productData;  //global variable 

      next();
    
    });
};



exports.getProduct = (req, res) => 
{
    // req.product.photo = undefined;
    return res.json(req.product);
 
};

//to Update category bycategoryId
exports.updateProduct = (req, res) => // http://localhost:3100/api/product/605408d4224cbe25e87dfec6
{
 const product = req.product;

 product.name = req.body.name;
//  product.mobile = req.body.mobile;
 
 product.save((err, updateProduct) => {
   if (err) {
     return res.status(400).json({
       error: "Failed to update Product"
     });
   }
   res.json(updateProduct);
 });
};
  

//to remove product byproductId
exports.removeProduct = (req, res) =>
{
 const product = req.product;

 product.remove((err, product) => {
   if (err) {
     return res.status(400).json({
       error: "Failed to delete this product"
     });
   }
   res.json({
     message: "Successfull deleted"
   
   });
 });
};

