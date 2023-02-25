const {userModel}=require("../model/userModel")
const express= require("express")
const bcrypt= require("bcrypt")
var jwt = require('jsonwebtoken');

const userRouter= express.Router()

userRouter.get("/",async(req,res)=>{

	const user=await userModel.find()
	res.send(user)
})

userRouter.post("/register",async(req,res)=>{
	const {name,email,password,mob,city}= req.body;
	const check= await userModel.findOne({email})
	if(check){
		res.send({"msg":"User Already Register Please Login"})
	}else{
		try{
			bcrypt.hash(password, 5,async(err, hash)=> {
				 if(err) res.send(err)
				 else{
					const user=new userModel({name,email,password:hash,mob,city})
					await user.save()
					res.send(user)
				 }
			});
		}catch(err){
			res.send({"msg":"Something went wrong with register","error":err.message})
		}
	}
	})

	// -------------For login-------------------

    userRouter.post("/login",async(req,res)=>{
		const {email,password}=req.body;
		try{
			const user= await userModel.find({email})
			if(user.length>0){
				bcrypt.compare(password, user[0].password, (err, result) =>{
					if(result){
						var token = jwt.sign({ userId:user[0]._id}, 'fulldiscount');
						res.send({"msg":"Login SuccessFull","token":token})
					}else{
						res.send({"msg":"Please enter correct possword"})
					}
				});
			}else{
				res.send({"msg":"Please Login","error":err.message})
			}
			
		}catch(err){
			res.send({"msg":"Something went wrong with login","error":err.message})
		}
	})




module.exports={
	userRouter
}