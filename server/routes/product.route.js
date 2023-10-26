import express from "express";

const router = express.Router();

import {getAllProducts, getOneProduct, addProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js'

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);

router.post('/add', addProduct);
router.post('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;