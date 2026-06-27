
const mongoose = require("mongoose")
require("dotenv").config()

async function ConnectDB() {

    mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected Successfully"))
.catch(err => console.log(`Error connecting to MOngoDB:${err}`))

}

module.exports = ConnectDB