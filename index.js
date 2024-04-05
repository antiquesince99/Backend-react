import express from "express";

const app = express()
const PORT = "3001"

app.get('/', (req, res) =>{
    res.send("hello on get")
})

app.listen(PORT, ()=>{
    console.log(`listen on ${PORT} `)
})
