// import mongoose  from 'mongoose';
// import CartStore from '../../../models/cart';
// const {ObjectId} = mongoose.Types;
// exports.gettingFromCart = async(req,res) =>{
//     try {
//         let id = req.user.user_id;
//         console.log('get from cart api');
//         const checkCart = await CartStore.find({});
//         if (checkCart.length === 0){
//             console.log('checkcart', checkCart)
//             return res.status(401).json({error:"User not found."});
//         }
//         await CartStore.aggregate([
//             {
//                 $lookup : {
//                     from : 'users',
//                     localField : 'user_id',
//                     foreignField : '_id',
//                     as : 'user_info'
//                 }
//             },
//             {
//                 $unwind: "$user_info"
//             },
//             {
//                 $lookup : {
//                     from : 'productstores',
//                     localField : 'p_id',
//                     foreignField : '_id',
//                     as : 'product_store'
//                 }
//             },
//             {
//                 $unwind : "$product_store"
//             },
//             {
//                 $match : {'user_id': ObjectId(id)}
//             }
//         ])
//         .then((result) =>{
//             const name = `${result[0].user_info.first_name} ${result[0].user_info.last_name}`;
//             let products = [];
//             for (let index = 0; index < result.length; index++) { 
//                 products.push(result[index].product_store);       
//             }

//             const obj = {
//                 name,
//                 products
//             }
//             result = obj;
//             console.log('get from cart res', result)
//             res.json(result);
//         })
//         .catch((error) =>{
//             console.log(error);
//         })
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };
import CartStore from '../../../models/cart';

exports.gettingFromCart = async(req,res) =>{
    try {
        let id = req.user.user_id;
        const getCart = await CartStore.find({user_id : id})
        res.send(getCart);
        // await CartStore.aggregate([
        //     {
        //       $lookup: {
        //         from: 'users',
        //         localField: 'user_id',
        //         foreignField: '_id',
        //         as: "cart_store"
        //       }
        //     },
        //     {
        //         $unwind: "$cart_store",
        //     },
        //   ])
        //     .then((result) => {
        //       res.json(result);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
    } catch (error) {
        res.status(400).send(error);
    }
};