

const client = require("../models/Client")
const JWT = require("jsonwebtoken")

exports.generateToken = async (client) => {

    return JWT.sign({
        id:client._id
    }, process.env.SECRET_KEY, {expiresIn:"15m"})

    
}