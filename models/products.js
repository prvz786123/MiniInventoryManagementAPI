const {mongoose} = require('./../db/mongoose');

let ProductSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  stock:{
    type:Number,
    required:true
  }
});

let Product = mongoose.model('products',ProductSchema);

module.exports={
  Product
}
