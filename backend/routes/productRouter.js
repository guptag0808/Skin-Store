const express= require("express")
const {ProductModel}=require("../model/product")
const productrouter= express.Router()

productrouter.get("/",async(req,res)=>{
	try{
		const product=await ProductModel.find()
	res.send(product)
	}catch(err){
		res.send({"msg":"Something went wrong","error":err.message})
	}
	
})
productrouter.post("/upload",async(req,res)=>{
const product= req.body;
try{
    const items= await ProductModel.insertMany(product)
	   res.send(items)
}catch(err){
	res.send({"msg":"Something goes wrong","error":err.message})
}
  
})

module.exports={
	productrouter
}