const { Order, ProductCart } = require("../model/OrderModel");

//create order
exports.createOrder = (req, res) => 
{
const order = new Order(req.body);

  order.save((err, orderData) => 
  {
    if (err) 
    {
      return res.status(400).json({
        error: "Failed to save your order in DB"
      });
    }
    res.json(orderData);
  });

};


// to read all order
exports.getAllOrder = (req, res) => 
{
  
  Order.find().exec((err, orderData) => 
  {
    if (err) {
      return res.status(400).json({
        error: "NO order found"
      });
    }

    res.json(orderData);
  });
};

// to find order
exports.getOrderbyId = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "NO order found in DB"
        });
      }
      req.order = order; 
      next();
    });
};

//to find order byId
exports.getOrder = (req, res) => 
{
  return res.json(req.order);

};


    //to remove order byuserId
   exports.removeOrder = (req, res) =>
    {
      const order = req.order;

       order.remove((err, order) => {
   if (err) {
     return res.status(400).json({
       error: "Failed to delete this order"
     });
   }
   res.json({
     message: "Successfull deleted"
   
   });
 });
};




