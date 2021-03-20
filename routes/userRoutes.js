var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { register,login,getAllUser, getUserbyId ,getUser, removeUser} = require("../controller/UserController");

// Register User
router.post("/register",
[
    check("name", "name should be at least 3 char").isLength({ min: 3 }), // form validation
    check("email", "your entered wrong email ").isEmail(),  // check  email validation
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  register
);

// Login User 
router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 3 })
  ],
  login
);

//GetAllUser
router.get("/user/getallusers/",getAllUser); //http://localhost:3100/api/user/getallusers (....DONE)

router.param("userId", getUserbyId); //param : parameter
//Find UserById
router.get("/userbyid/:userId", getUser)  //http://localhost:3100/api/userbyid/6052b5c48f0d362b34f28d51 (INCOMPLETE)

//Remove User
router.delete("/removeuserbyid/:userId",removeUser); //http://localhost:3100/api/removeuserbyid/60540932224cbe25e87dfec8 (....DONE)


module.exports = router;
