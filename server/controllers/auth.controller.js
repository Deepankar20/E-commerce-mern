import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";
// import jwt from 'jsonwebtoken';



export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;

    const newUser = new User({username, email, password});

    try {
         await newUser.save();

        const user = await User.findOne(req.body);
        console.log(user);

        res.status(201).json({
            msg:"user successsfully created",
            userRef:user._id
        });
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:"some error occured",
        })
    }
    
}


export const signin = async (req, res)=>{
    console.log(req.body);
    const {email, password} = req.body;
    
    try {
        const validUser = await User.findOne({email});
        console.log(validUser);
        if(!validUser){
            res.status(404).json({
                msg:"user not found"
            });
        }

        if(validUser && (password !== validUser.password)){
            res.status(401).json({
                msg:"wrong user credentials"
            });
        }

        const {password: pass, ...rest} = validUser._doc;

        const token = validUser._id;
        res.status(200).json(rest)
        
    } catch (error) {
        res.status(501).json({
            msg:'an error occured'
        });
        console.log(error);
    }

}