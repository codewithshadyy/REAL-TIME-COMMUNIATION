
const JWt = require("jsonwebtoken")
const Client = require("../models/Client")

exports.protect = async (req,res, next) => {

   try {


 let token

    if(req.headers.authorization && req.headers.authorization.starsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return res.status(400).json({message:"No token provide"})
    }

    decoded = JWt.verify(token, process.env.SECRET_KEY)

    req.client =await Client.findById(decoded.id).select("-password")

   next()
    
   } catch (error) {

    res.status(500).json({message:error})
    
   }


    
}