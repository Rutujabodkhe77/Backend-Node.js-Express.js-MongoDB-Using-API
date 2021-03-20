const express = require("express");
const router = express.Router();



const {
  getOrderbyId,
  createOrder,
  getAllOrder,
  getOrder,
  removeOrder,
//   getOrderStatus,
//   updateStatus
} = require("../controller/orderController");


router.post("/order/create",createOrder); //http://localhost:3100/api/order/create (DONE)

//GetAllOrder
router.get("/user/getallorders/",getAllOrder); //http://localhost:3100/api/user/getallorders (DONE)

router.param("orderId", getOrderbyId); //param : parameter
//Find OrderById
router.get("/orderbyid/:orderId", getOrder)  //http://localhost:3100/api/orderbyid/ (DONE)

//Remove Order
router.delete("/removeorderbyid/:orderId",removeOrder); //http://localhost:3100/api/removeorderbyid/(DONE)




module.exports = router;
