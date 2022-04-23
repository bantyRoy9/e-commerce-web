const express=require('express');
const router=express.Router();
const {registerProduct, getProduct, deleteProduct}=require('../controllers/productController')


router.route('/product').post(registerProduct).get(getProduct);

router.route('/product/:id').delete(deleteProduct)




module.exports=router;