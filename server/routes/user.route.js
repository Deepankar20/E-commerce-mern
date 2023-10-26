import express from "express";

const router = express.Router();

import {getUserInfo} from '../controllers//user.controller.js'

router.get('/:id', getUserInfo);


export default router;
