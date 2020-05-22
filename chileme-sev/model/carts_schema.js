const mongoose =require ('mongoose')
const schema = mongoose.Schema
const Carts = new schema({
    id:String,
    name:String,
    price:Number,
    count:Number,
})
module.exports =mongoose.model('Carts',Carts)