const webSocket = require("ws")
require("dotenv").config()
const wss = new webSocket.Server({port:process.env.PORT})

console.log(`websocket server runing on ws://localhost:${process.env.PORT}`)


wss.on("connection", (ws)=>{
    console.log("New client connected")


    ws.send("welcome to the websocket")

    ws.on("message", (message)=>{
        console.log(`Received: ${message}`)

        ws.send(`Server received :${message}`)
    })

    ws.on("close", ()=>{
        console.log("Client disconnected")
    })
})