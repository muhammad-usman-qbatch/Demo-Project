import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;
mongoose.connect(uri,
    {
        socketTimeoutMS: 30000,
        keepAlive: true,
    }
).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log(e,"No connection");
})