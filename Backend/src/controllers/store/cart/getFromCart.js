import mongoose  from 'mongoose';
import CartStore from '../../../models/cart';
const {ObjectId} = mongoose.Types;

exports.gettingFromCart = async(req,res) =>{
    try {
        let user_id = req.user.user_id;
        console.log('get from cart api');
        const checkCart = await CartStore.find({'user_id':ObjectId(user_id)});
        if (checkCart.length === 0){
            console.log('checkcart', checkCart)
            return res.status(200).json({data:"Your Cart is empty."});
        } else {
            console.log('else part')
            await CartStore.aggregate([
                // {
                //     $lookup : {
                //         from : 'users',
                //         localField : 'user_id',
                //         foreignField : '_id',
                //         as : 'user_info'
                //     }
                // },
                // {
                //     $unwind: "$user_info"
                // },
                
                {
                    $lookup : {
                        from : 'productstores',
                        localField : "cart.products",
                        foreignField : '_id',
                        as : 'product_store'
                    }
                },
                {
                    $unwind : "$product_store"
                },
                {
                    $match : {'user_id': ObjectId(user_id)}
                }
            ])
            .then((result) =>{
                // const name = `${result[0].user_info.first_name} ${result[0].user_info.last_name}`;
                // console.log('name', name)
                // let products = [];
                // for (let index = 0; index < result.length; index++) { 
                //     products.push(result[index].product_store);       
                // }
    
                // const obj = {
                //     name,
                //     products
                // }
                // result = obj;
                // console.log('get from cart res', result)
                res.json(result);
            })
            .catch((error) =>{
                console.log('query error')
                console.log(error);
            })
        }   
    } catch (error) {
        console.log('try catch error', error)
        res.status(400).send(error);
    }
};
// import CartStore from '../../../models/cart';

// exports.gettingFromCart = async(req,res) =>{
//     try {
//         let id = req.user.user_id;
//         const getCart = await CartStore.find({user_id : id})
//         res.send(getCart);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };