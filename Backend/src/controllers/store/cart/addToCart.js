import CartStore from '../../../models/cart';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

exports.AddingToCart = async(req,res) => {
    try {
        const user_id = req.user.user_id;
        const p_id = req.body.p_id;

        // first check , cart with that user_id already exists or not
        const userExist = await CartStore.find({ user_id : ObjectId(user_id)});
        console.log('user exist', userExist)
        if(userExist.length === 0){

          // if not exist then create document with that user id
          const data = await CartStore.create(
            {
            cart : [
              {
                products : ObjectId(p_id),
                quantity : 1
              }
            ],
            user_id
            });
            console.log('data', data)
          return res.json(data);
        } else {
          
          // check if that product is already in the cart or not
          const productExist = await CartStore.find({
            $and:[{"user_id":ObjectId(user_id)},
            { "cart.products":p_id}]})
          if(productExist.length === 0){
            // add that product to cart if not in the cart
            console.log('product exist ', productExist)
            const addProduct = await CartStore.updateOne(
              {'user_id':ObjectId(user_id)}, 
              {$push:{'cart':{'products':ObjectId(p_id), "quantity":1}}}
              )
            return res.send(addProduct);
          }else {
            return res.status(401).json({error:"This product is already added."})
          }
        }
    } catch (error) {
      console.log('error')
      res.status(500).send(error);
    }
};