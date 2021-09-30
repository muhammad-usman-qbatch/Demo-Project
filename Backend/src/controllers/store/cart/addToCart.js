const CartStore = require('../../../models/cart')

const AddingToCart = async(req,res,next) => {
    try {
      console.log('add to cart api');
        const addProductsToCart = new CartStore(req.body);
        let insertProductsToCart = await addProductsToCart.save();
        res.status(201).send(insertProductsToCart);
    } catch (error) {
      console.log('error');
      res.status(400).send(error);
    }
};

module.exports = AddingToCart;