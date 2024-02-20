// creating controllers for each routes to keep the code organized;

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";

//@desc Fetch all products
//@route GET /api/products
//@access Public

const getProducts = asyncHandler(async (req,res)=>{
    const products = await Product.find({}); //passing empty object to get all the products
 
    res.json(products);
});




//@desc Fetch a product
//@route GET /api/products/:id
//@access Public




const getProductById = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product)
    {
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Product not found');
    }
});


export {getProducts,getProductById};