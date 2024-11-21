const express = require('express');
const { addProduct, getAllProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');
const router = express.Router();
router.post('/',addProduct)
router.get('/',getAllProduct);
router.get('/getProduct/:id',getProduct);
router.patch('/update/:id',updateProduct);
router.delete('/deleteProduct/:id',deleteProduct)

module.exports=router;