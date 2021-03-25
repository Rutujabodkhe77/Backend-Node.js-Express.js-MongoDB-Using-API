const mongoose = require('mongoose');
const express = require('express'); //variable created with loaded express library.
const app = express();   // store express function inside app variable
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 3100  //use port from 3001 to 3100

 
mongoose.connect('mongodb+srv://myshop:myshop@cluster0.hfbz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
}) 

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
const categoryRoutes = require("./routes/category"); //shop category
const productRoutes = require("./routes/productRoutes"); //shop product
const userRoutes = require("./routes/userRoutes"); //user
const orderRoutes = require("./routes/orderRoutes"); //order

//My Routes
app.use("/api", categoryRoutes); //shope category
app.use("/api", productRoutes); //shop product
app.use("/api", userRoutes);  //user
app.use("/api", orderRoutes); //orders
  
// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))








// in node js here we use  "require" insted of "import"
// React.js uses import function for importing libraries 
// node.js uses require function for importing libraries 
// const express = require('express') //variable created with loaded express library

// const app = express() // store express function inside app variable
// const port = 3100 //use port from 3001 to 3100.**  "react.js use port 3001".**  node.js and react.js ports should be always diff 

// method = function
// req = request
// res = response or respond
// single slash(/): base URL

// app.get('/', (req, res) => res.send('Welcome to Node.js!!'));

// app.get('/mypage',(req,res) => res.send('This is second page'));
// app.get('/about',(req,res) => res.send('This is About us page'));

// listen: is nothing but to run a node.js program
// console.log : to print statement inside terminal
// app.listen(port, () => console.log(`Example app listening at http://localhost:3100 , this is rutuja program`))