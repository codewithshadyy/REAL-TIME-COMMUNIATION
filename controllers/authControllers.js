

const Client  = require("../models/Client")
const {generateToken} = require("../utils/generateToken")
const bcrypt = require("bcrypt")



exports.register = async (req, res) => {

    try {


        const {email, username, password} = req.body

        const userPresent = await Client.findone({
            $or:[{email},{username}]
        })

        if(userPresent){
            res.status(400).json({message:"Invalid input or email"})
        }

     const hashedPassword =  await bcrypt.hash(password, 10)
     
     const user = await Client.create({
        email,
        username,
        hashedPassword
     })

     return res.status(201).json({
        message:`welcome ${user.username}`,
        data:user
     })

        
    } catch (error) {

        return res.status(500).json({message:error})
        
    }
    
}