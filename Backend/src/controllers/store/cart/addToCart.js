import CartStore from '../../../models/cart';

exports.AddingToCart = async(req,res) => {
    try {
        const id = req.user.user_id;
        const p_id = req.body.p_id;
        const data = await new CartStore({
          p_id,
          user_id:id
        }).save();
        res.status(201).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
};