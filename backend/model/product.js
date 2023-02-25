const mongoose= require("mongoose")

const productSchema= mongoose.Schema({
	"image":String,
	"title":String,
	"price":String,
	"off":String,
	"shipping":String

})
  const ProductModel= mongoose.model("product",productSchema)

module.exports={
	ProductModel
}