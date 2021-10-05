import jwt from 'jsonwebtoken';

export const requireLogin = async(req,res,next) => {
    const token = req.headers;
    console.log('token', token.authorization);
    if (!token){
        res.status(403).json({error:"Token is required for authentication."});
    }
    try {
        const decoded = jwt.verify(token.authorization, process.env.TOKEN_KEY);
        req.user = decoded;
        console.log('req.user', req.user);
        next();
    } catch (error) {
        res.status(401).json({error:"Invalid Token."});
    }
}