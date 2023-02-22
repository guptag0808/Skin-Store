const express = require("express")
const {connection}= require("./db")
const{userRouter}=require("./routes/userRouter")

require('dotenv').config()
const app =express()
app.use(express.json())
app.use("/user",userRouter)

app.listen(process.env.port,async()=>{
	try{
		await connection
		console.log(`server is running at port ${process.env.port}`)
	}catch(err){
		console.log("Something wrong with server")
	}

})