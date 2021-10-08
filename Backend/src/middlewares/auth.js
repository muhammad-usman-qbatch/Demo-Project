import jwt from 'jsonwebtoken';

export const requireLogin = async(req,res,next) => {
    const token = req.headers.authorization.split(" ")[1];
    // const token = req.headers.authorization;
    console.log('token-1', token);
    if (!token){
        res.status(403).json({error:"Token is required for authentication."});
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log('dec', decoded);
        req.user = decoded;
        console.log('req.user', req.user);
        next();
    } catch (error) {
        console.log('auth catch')
        res.status(500).json({error:"Invalid Token."});
    }
}