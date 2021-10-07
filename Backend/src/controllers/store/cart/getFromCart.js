import mongoose  from 'mongoose';
import CartStore from '../../../models/cart';
const {ObjectId} = mongoose.Types;
exports.gettingFromCart = async(req,res) =>{
    try {
        let id = req.user.user_id;
        await CartStore.aggregate([
            {
                $lookup : {
                    from : 'users',
                    localField : 'user_id',
                    foreignField : '_id',
                    as : 'user_info'
                }
            },
            {
                $unwind: "$user_info"
            },
            {
                $lookup : {
                    from : 'productstores',
                    localField : 'p_id',
                    foreignField : '_id',
                    as : 'product_store'
                }
            },
            {
                $unwind : "$product_store"
            },
            {
                $match : {'user_id': ObjectId(id)}
            }
        ])
        .then((result) =>{
            const name = `${result[0].user_info.first_name} ${result[0].user_info.last_name}`;
            let products = [];
            for (let index = 0; index < result.length; index++) { 
                products.push(result[index].product_store);       
            }

            const obj = {
                name,
                products
            }
            result = obj;
            console.log('product', result)
            res.json(result);
        })
        .catch((error) =>{
            console.log(error);
        })
    } catch (error) {
        res.status(400).send(error);
    }
};