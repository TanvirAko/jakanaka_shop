import { json } from "express";
import { ProductSlug, generateRandomUniqueId } from "../helpers/helper.js";
import fs from "fs";

//  post sengles product
export const postSenglesProduct = (req,res)=>{



const  { name , daily_price , discount_price, stock} = req.body;
 
if(!name || !daily_price){
 res.status(400).json({message: "please provide tha name and price"})
return
}

const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())


//product name chake
if(product_Data.find((data)=> data.sloge === ProductSlug(name))){
    res.status(400).json({message: "all rady products this tha available"})
return
}

const product = { 
    id: generateRandomUniqueId(), 
    name , 
    sloge: ProductSlug(name),
    daily_price ,
    discount_price, 
    stock ,
    photo : (req.file.filename)};

product_Data.push(product);

fs.writeFileSync("json/product.json" , JSON.stringify(product_Data)),
   res.redirect("/")
}


// get all products 
export const get_ALL_Product =(req,res)=>{

    const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
 if(product_Data.length === 0){
res.status(404).json({message: "404 product is note found"})

 }

res.status(200).json({products : product_Data})

}

// get sengles product 
export const get_sengles_product = (req,res)=>{
const {sloge} = req.params
const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
const sengle_product = product_Data.find((data)=> data.sloge === sloge);
if(!sengle_product){
    res.status(404).json({messageL: "404 product is note found"})
    return
}
    res.status(200).json(sengle_product)
}


// get data delete
export const sengle_data_delete = (req,res)=>{

const {id} = req.params;

const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
 
const product_update = product_Data.filter((data)=> data.id !== id);
fs.writeFileSync("json/product.json", JSON.stringify(product_update))

res.status(200).json({messageL:"data delete is sussefule "})
};

// show all products
 export const show_ALL_Product = (req, res)=>{
//show all products
const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
   
    res.render("product" ,{
        products: product_Data
    })
 };
 // create product
 export const show_create_Product = (req,res)=>{
    res.render("create")
 }

// show single product
export const show_sengle_Product = (req,res)=>{

    const {sloge} = req.params
    const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
    // view sengle product 
    const singleproductss=product_Data.find((data)=> data.sloge === sloge);
   // 
     res.render("show" ,{
        products: singleproductss
    })
}

// product delated

export const data_dealates=(req,res)=>{
    const {id} = req.params;

    const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
     
    const product_update = product_Data.filter((data)=> data.id !== id);
    fs.writeFileSync("json/product.json", JSON.stringify(product_update))
    
    
res.redirect("/")

}
// product edit
 export const data_edit_product = ( req,res)=>{

    const {id} = req.params
    const product_Data = JSON.parse(fs.readFileSync("json/product.json").toString())
    // view sengle product 
    const editsproductss=product_Data.find((data)=> data.id === id);
   // 
     res.render("edit" ,{
        product : editsproductss
    })

 }

 // product update product
 export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, daily_price, discount_price, stock } = req.body;
  
    // get all product
    const productData = JSON.parse(fs.readFileSync("json/product.json").toString());
  
    // photo manage
    let photo_name =
      productData[productData.findIndex((data) => data.id === id)].photo;
  
    if (req?.file?.filename) {
      photo_name = req.file.filename;
    }
  
    productData[productData.findIndex((data) => data.id === id)] = {
      id: id,
      sloge: ProductSlug(name),
      name,
      daily_price,
      discount_price,
      stock,
      photo: photo_name,
    };
  
    fs.writeFileSync("json/product.json", JSON.stringify(productData));
  
    return res.redirect("/");
  };
