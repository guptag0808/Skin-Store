const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
	name:String,
	email:String,
	age:Number,
	mob:Number,
	password:String,
	city:String
})

const userModel= mongoose.model("user",userSchema)

module.exports={
	userModel
}