import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
    p_id : {
        type : ObjectId,
        ref : "ProductStore",
    },
    user_id : {
        type : ObjectId,
        ref : "Users"
    }
});

const CartStore = new mongoose.model("CartStore", cartSchema);
export default CartStore;