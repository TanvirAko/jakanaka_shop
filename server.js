// import file
import clores from "colors";
import dotenv from "dotenv";
import express from "express";
import routs_postSenglesProduct from "./routes/routes_product.js"
import layouts from "express-ejs-layouts"
// dot env configuration
dotenv.config()

//dot env invirements
const PORT = process.env.PORT || 6060;


// exress init
const app = express();

// static folder
app.use(express.static("public"))

// ejs set up
app.set("view engine", "ejs");
app.use(layouts)
// express middieeares

app.use (express.json());
app.use(express.urlencoded({extended:false}));


// express routes setup
app.use(routs_postSenglesProduct)

// express listen
app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT} PORT `.bgGreen.black);
})



