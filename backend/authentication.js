const jwt= require("jsonwebtoken");
const authentication = (req,res,next)=>{
const token=req.headers.authorization
if(token){
	jwt.verify(token,"fulldiscount",(err,decoded)=>{
		if(decoded){
			req.body.user=decoded.userId;
			next()
		}else{
			res.send({"msg":"Please Login"})
		}
	})
}else{
	res.send({"msg":"Please Login"})
}
}
module.exports={
 authentication 

}