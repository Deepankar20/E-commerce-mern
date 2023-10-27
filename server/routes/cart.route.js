import express from "express";

const router = express.Router();

import  {add, remove, createCart} from '../controllers/cart.controller.js'

router.post('/createcart',createCart);
router.post('/addtocart/:id', add);
router.post('/removefromcart/', remove);
// router.get('/getcart')

export default router;