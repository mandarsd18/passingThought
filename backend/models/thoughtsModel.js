const mongoose=require('mongoose');
const{Schema,model}=mongoose

const thoughtsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type: String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    likes:{
        type:Number
    }
},{timestamps:true})
module.exports=model("Thoght",thoughtsSchema);