import Users from "../../../models/user";
import bcrypt from 'bcryptjs';

exports.AddingUsers = async(req,res) => {
    try {
        const {first_name, last_name, email, password} = req.body;

        if (!(first_name && last_name && email && password)){
            return res.status(400).json({error:"All fields are required."});
        }
        
        // email checking , that already taken or not
        const emailExist = await Users.findOne({ email });
        if (emailExist){
            return res.status(401).json({error:"This email is already taken"});
        }

        const encryptedPassword = await bcrypt.hash(password,10);
        // creating user
        const user = await Users.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        res.status(201).json({message:"SignUp Success, You can Login now."});
    } catch (error) {
        res.status(500).send(error);
    }
}