
const webSocket = require("ws")

const readline  =require("readline")
const { error } = require("console")
require("dotenv").config()

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const ws = new webSocket(`ws://localhost:${process.env.PORT}`)


ws.on("open", ()=>{
    console.log("connected to the server")
    promptForMessage()
})

ws.on("message", (message)=>{
    console.log(`server:${message}`)

})


ws.on("error", (error)=>{
    console.log(`Websocket errors:${error}`)
})

ws.on("close", ()=>{
    console.log("Diisconnected fom the server")
    process.exit(0)
})

function promptForMessage(){
   r1.question('Enter a message (or "exit" to quit): ', (message)=>{
    if(message.toLowerCase()==="exit"){
        ws.close()
        r1.close()
        return

    }
    ws.send(message)
    promptForMessage()
   })
}