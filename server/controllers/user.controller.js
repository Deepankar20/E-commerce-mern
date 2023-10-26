import User from "../models/user.model.js"


export const getUserInfo = async (req, res, next)=>{
    try {
        const userInfo = await User.findOne({_id:req.params});
        res.status(201).json(userInfo);
    } catch (error) {
        console.log(error);
    }
}