const mongoose = require("mongoose")


const clientSchema = new mongoose.Schema({

    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }

    
}, {timestamps:true})


const client = mongoose.model("Client", clientSchema)

modules.exports = client