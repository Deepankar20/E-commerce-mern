import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
        required:true,
    },
    userRef:{
        type:String,
        required:true,
    }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
export default Product;