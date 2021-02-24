const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true, //trim:it is nothing but remove white spaces
        required:true, //required means compulsory
        unique:true  
    }
},
{timestamps:true}) //timestamps: jab bhi data add hoga tab uska time or date add kro.


module.exports = mongoose.model("Category",categorySchema);