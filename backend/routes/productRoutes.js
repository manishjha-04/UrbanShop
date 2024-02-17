import  express  from "express";
import { getProducts,getProductById } from "../controllers/productController.js";


const router = express.Router(); //express itself has router for managing routes


router.route('/').get(getProducts);
router.route('/:id').get(getProductById);





//not needed now below one since we have used controller above

// router.get('/', asyncHandler(async(req, res) => {
//     const products = await Product.find({}); //passing empty object to get all the products
 
//     res.json(products);
// }));

// router.get('/:id',asyncHandler(async(req,res)=>{
//     // const product = products.find((p) => p._id === req.params.id); not needed now
//     const product = await Product.findById(req.params.id);
//     if(product)
//     {
//         res.json(product);
//     }
//     else{
//         res.status(404);
//         throw new Error('Product not found');
//     }
   
// }));

export default router;