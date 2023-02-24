const mongoose= require("mongoose")

const productSchema= mongoose.connect({
	"image":String,
	"title":String,
	"price":String,
	"off":String,
	"shipping":String

})
module.exports={
	productSchema
}