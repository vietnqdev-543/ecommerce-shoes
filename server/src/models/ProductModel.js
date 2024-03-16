const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        name:{type : String , required: true , unique: true},
        idProduct:{type : String , required : true },
        image:{type : String , required : true },
        brand:{type : String , required : true },
        type:{type : String , required : true },
        size:{type : Number , required : true },
        material:{type : String , required : true },
        waterproof:{type : Boolean , default: false, required : true },
        price:{type : Number , required : true },
        countInStock:{type : Number , required : true },
        rating:{type : Number , required : true },
        description:{type : String , required : true },
    },
    {
        timestamps : true
    }
)
const Product = mongoose.model('Product',productSchema)
module.exports = Product
//name , brand , type , idProduct ,size , material , waterproof  , price , countInStock , raiting , description