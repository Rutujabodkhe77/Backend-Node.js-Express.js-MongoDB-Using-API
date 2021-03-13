
const Category = require("../model/category")

// To create category
  exports.createCategory = (req, res) => 
  {
    const category = new Category(req.body); //object //Category comes from Model
    category.save((err, bakend_category) =>
     {
      if (err) 
       {
        return res.status(400).json
        ({
           error: "NOT able to save category in DB"
         });
        }
      res.json({ bakend_category  });
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
  