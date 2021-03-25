const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
  removeProduct,updateProduct
    
} = require("../controller/productController");


router.param("productId", getProductById); //param : parameter 

router.post("/product/create",createProduct);

router.get("/productbyid/:productId", getProduct);  // http://localhost:3100/api/product/604f857a082edd16d4a17fa3   (DONE)

router.get("/product",getAllproduct); // http://localhost:3100/api/product/ (DONE)


router.delete("/removeproductbyid/:productId",removeProduct); //http://localhost:3100/api/removeproductbyid/604f857a082edd16d4a17fa3 (INCOMPLETE)
router.put("/product/:productId",updateProduct); // http://localhost:3100/api/product/605408d4224cbe25e87dfec6 (DONE)



// router.delete("/product/:productId",deleteProduct);



module.exports = router;
