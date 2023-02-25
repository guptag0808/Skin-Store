const express = require("express")
const {connection}= require("./db")
const{userRouter}=require("./routes/userRouter")
const {homeRouter}=require("./routes/crudOperation")
const {productrouter}=require("./routes/productRouter")
const{authentication}=require("./authentication")
const cors= require("cors")
require('dotenv').config()
const app =express()
app.use(express.json())


app.get("/front",(req,res)=>{
	res.send("WELCOME")
})
app.get("/abc",(req,res)=>{
	res.send("abc")
})
app.use(cors())
app.use("/user",userRouter)
app.use("/home",homeRouter)
app.use("/dinnerset",productrouter)
app.use("/product",productrouter)

app.listen(process.env.port,async()=>{
	try{
		await connection
		console.log(`server is running at port ${process.env.port}`)
	}catch(err){
		console.log({"msg":"Something wrong with server","error":err.message})
	}

})