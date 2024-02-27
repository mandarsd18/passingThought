const Thought=require("../models/thoughtsModel");
const mongoose=require('mongoose')

const getAllThought=async(req,res)=>{
    const thoughts=await Thought.find({}).sort({createdAt:-1});
    res.status(200).json(thoughts)
}

const createThoughts=async(req,res)=>{
    const { title, desc, author, likes } = req.body;

  try {
    const thought = await Thought.create({ title, desc, author, likes });
    res.status(200).json(thought);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const getSingleThought=async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return   res.status(404).json("Invalid Id")
    }

    const thought=await Thought.findById(id);

    if(!thought){
        return  res.status(404).json({"msg":"No such id found"})
    }

    res.status(200).json(thought)
}
const deleteThought=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return   res.status(404).json("Invalid Id")
    }
    const thought=await Thought.findOneAndDelete({_id:id})
    
    if(!thought){
        return  res.status(404).json({"msg":"No such id found to"})
    }
    res.status(200).json(thought)

}

const updateThought=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return   res.status(404).json("Invalid Id")
    }
    const thought=await Thought.findOneAndUpdate({_id:id},{
        ...req.body
    },{new:true})

    if(!thought){
        return  res.status(404).json({"msg":"No such id found to"})
    }
    res.status(200).json(thought)
}


module.exports={
    getAllThought,
    createThoughts,
    getSingleThought,
    updateThought,
    deleteThought
}