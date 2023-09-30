//import file
import multer from "multer";


// multer setup
const storage= multer.diskStorage({

    destination: (req, file,cb)=>{
        cb(null,"public/product_photo")
    },
    filename: (req,file,cb)=>{
        cb(null, Math.floor(Math.random() * 1000000) + "_" + file.originalname)
    },
})

// storage setup 

export const post_photo = multer({storage: storage}).single("product_photo")