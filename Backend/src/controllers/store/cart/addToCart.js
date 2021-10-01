import CartStore from '../../../models/cart';

exports.AddingToCart = async(req,res) => {
    try {
        const addProductsToCart = new CartStore(req.body);
        let insertProductsToCart = await addProductsToCart.save();
        res.status(201).send(insertProductsToCart);
    } catch (error) {
      console.log('error');
      res.status(400).send(error);
    }
};