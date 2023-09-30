// import file
 import express from "express";
import { postSenglesProduct , get_ALL_Product , get_sengles_product , sengle_data_delete , show_ALL_Product , show_create_Product , show_sengle_Product , data_dealates , data_edit_product,updateProduct} from "../controllers/product.js";
import { post_photo } from "../Utility/multer.js";

// router init
const router = express.Router();


// EJS routes page
router.get("/" , show_ALL_Product)
router.get("/create" , show_create_Product)
router.get("/single/:sloge" , show_sengle_Product)
router.get("/single-delete/:id" , data_dealates)
router.get("/edit/:id" , data_edit_product)
router.post("/update/:id" , post_photo, updateProduct)

// router setup
router.post("/product",post_photo, postSenglesProduct)
router.get("/product", get_ALL_Product )
router.get("/product/:sloge", get_sengles_product )
router.get("/product/:id", sengle_data_delete )

// router exports
export default router;
