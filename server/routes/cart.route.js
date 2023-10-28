import express from "express";

const router = express.Router();

import  {add, remove, createCart, getCartItems} from '../controllers/cart.controller.js'

router.post('/createcart',createCart);
router.post('/addtocart/:id', add);
router.post('/removefromcart/', remove);
router.get('/getcart/:id', getCartItems)

export default router;