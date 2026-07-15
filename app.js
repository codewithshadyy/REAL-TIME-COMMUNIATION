
const express = require("express")
const ConnectDB = require("./dbConfig/db")

ConnectDB()

const authRoutes  = require("./")