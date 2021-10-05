import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const Users = new mongoose.model("Users", userSchema);
export default Users;