import ProductsStore from "../../../models/products";

exports.getProductDetail = async(req,res) => {
    try {
        const p_id = req.params.p_id;
        const productDetail = await ProductsStore.findById(p_id);
        res.json(productDetail)
    } catch (error) {
        res.status(400).send(error);
    }
}