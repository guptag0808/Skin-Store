const express=require("express")
const {userModel}=require("../model/userModel")
const homeRouter=express.Router()


homeRouter.get("/",async(req,res)=>{
	const data= await userModel.find()
      res.send("DEkho kya hai")
})

module.exports={
	homeRouter
}