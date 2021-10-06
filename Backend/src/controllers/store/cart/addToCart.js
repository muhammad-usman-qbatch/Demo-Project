import CartStore from '../../../models/cart';

exports.AddingToCart = async(req,res) => {
    try {
        const id = req.user.user_id;
        const data = await new CartStore({
          p_id:req.body.p_id,
          user_id:id,
          detail:{
            name:req.body.detail.name,
            price:req.body.detail.price
          }
        }).save();
        res.status(201).send(data);
    } catch (error) {
      console.log('error');
      res.status(400).send(error);
    }
};