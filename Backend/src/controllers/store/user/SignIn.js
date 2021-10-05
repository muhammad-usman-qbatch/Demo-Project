import Users from "../../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

exports.loginUser = async(req,res) => {
    try {
        const {email, password} = req.body;
        if (!(email && password)){
            res.status(400).send("ALL fields are required.")
        }

        //email checking whether it matches or not
        const user = await Users.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)){
            // if user exist in our database, then create JWT token
            const token = jwt.sign(
                {user_id : user._id,email},
                process.env.TOKEN_KEY,
                {
                    expiresIn : "2h"
                }
                );
                res.status(201).json({token});
        } else{
            res.status(401).json({error:"email or password is incorrect."})
        }
    } catch (error) {
        res.status(400).send(error);
    }
}