
const Category = require("../model/category.js")


// To create category
  exports.createCategory = (req, res) => 
  {
  
    const category = new Category(req.body); //object //Category comes from Model
    category.save((err, bakend_category) => 
    {
      if (err)  
       {
        return res.status(400).json ({
           error: "NOT able to save category in DB"
         });
        }
      res.json({ bakend_category });
     });
   };
   
 // to read all category   
 exports.getAllCategory = (req, res) => 
 {
    
   Category.find().exec((err, categories) => 
   {
     if (err) {
       return res.status(400).json({
         error: "NO categories found"
       });
     }

     res.json(categories);
   });
 };
  
 //to read category 
 exports.getCategorybyId = (req, res, next, id) => 
 {
   Category.findById(id)
     .exec((err, categoryData) => 
     {
       if (err) {
         return res.status(400).json({
           error: "Category not found"
         });
       }
 
       req.category = categoryData;  //global variable 
 
       next();
     
     });
   };
 
   //to read category byId
   exports.getCategory = (req, res) => 
 {
     return res.json(req.category);
  
 };
  
 //to remove category bycategoryId
  //  (Completed but some query is there)
   exports.removeCategory = (req, res) =>
    {
     const category = req.category;
   
     category.remove((err, category) => {
       if (err) {
         return res.status(400).json({
           error: "Failed to delete this category"
         });
       }
       res.json({
         message: "Successfull deleted"
      
       });
     });
   };
 
 //to Update category bycategoryId
   exports.updateCategory = (req, res) =>
    {
     const category = req.category;

     category.name = req.body.name;
    //  category.mobile = req.body.mobile;
     
     category.save((err, updateCategory) => {
       if (err) {
         return res.status(400).json({
           error: "Failed to update category"
         });
       }
       res.json(updateCategory);
     });
   };
 
 
  
 // to read all Product 
 exports.getAllProduct = (req, res) => 
 {
    
   Product.find().exec((err, categories) => 
   {
     if (err) {
       return res.status(400).json({
         error: "NO categories found"
       });
     }

     res.json(product);
   });
 };
  
 