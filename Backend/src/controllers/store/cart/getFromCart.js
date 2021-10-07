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