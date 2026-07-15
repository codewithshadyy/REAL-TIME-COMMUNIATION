
const {register} = require("../controllers/authControllers")
const express = require("express")
router = express()

router.post("register/", register)


modules.exports= router



