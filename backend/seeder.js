//using this as a script to seed our data to the mongoDB

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData =async ()=>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product)=>{
            return {...product,user:adminUser};
        });

        await Product.insertMany(sampleProducts);
        
        console.log("Data imported".green.inverse);
        process.exit();
    
    }
        catch(error)
        {
            console.log(error);
            process.exit(1);
        }
}

const destroyData =async ()=>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed".red.inverse);
        process.exit();
    }
        catch(error)
        {
            console.log(error);
            process.exit(1);
        }
}

//here process.argv actually gives the argument that is being passed while running with command say node backend/seeder -hello , then here hello is the argument

if(process.argv[2] === '-d')
{
    destroyData();
}
else{
    importData();
}