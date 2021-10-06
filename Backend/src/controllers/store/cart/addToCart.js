import CartStore from '../../../models/cart';

exports.AddingToCart = async(req,res) => {
    try {
        const id = req.user.user_id;
        const p_id = req.body.p_id;
        const name = req.body.name;
        const price = req.body.price
        console.log('add to cart token id ', id)
        const data = await new CartStore({
          p_id,
          user_id:id,
          detail:{
            name,
            price
          }
        }).save();
        console.log('add to cart', data)
        res.status(201).send(data);
    } catch (error) {
      console.log('error',error.message);
      res.status(500).send(error);
    }
};