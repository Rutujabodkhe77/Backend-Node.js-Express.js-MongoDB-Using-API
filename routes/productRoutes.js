const express = require("express");
const router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});

var upload = multer({ storage: storage })


// const storage = multer.diskStorage({
//    destination: function(req, file, cb)
//    {
//      cb(null,'./uploads/');
//    },
//    filename:function(req,file,cb){
//      cb(null,file.originalname);
//    }
// });

// var upload = multer({ storage: storage})

const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
  removeProduct,updateProduct
     
} = require("../controller/productController");

router.param("productId", getProductById); //param : parameter 

// router.post("/product/create",createProduct);
router.post("/product/create",upload.single('productImage'),createProduct);

router.get("/productbyid/:productId", getProduct);  // http://localhost:3100/api/product/604f857a082edd16d4a17fa3   (DONE)

router.get("/product",getAllproduct); // http://localhost:3100/api/product/ (DONE)


router.delete("/removeproductbyid/:productId",removeProduct); //http://localhost:3100/api/removeproductbyid/604f857a082edd16d4a17fa3 (INCOMPLETE)
router.put("/product/:productId",updateProduct); // http://localhost:3100/api/product/605408d4224cbe25e87dfec6 (DONE)

// router.delete("/product/:productId",deleteProduct);

module.exports = router;
