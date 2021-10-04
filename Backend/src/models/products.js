import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    description:{
        type:String
    }
});

const ProductsStore = new mongoose.model("ProductStore", productSchema);
export default ProductsStore;