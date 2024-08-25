const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("../Models/userModel");
const router=express.Router();
//____________________________________________________________________________________
router.post("/",async (req,res)=>{
    const{name,email,age}=req.body;
    try {
        const userAdded=await User.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).json(userAdded);
    } catch (error) {
        res.status(400).json({error :error.message });
        console.log(error);
    }
})
//________________________________________________________________________________________
router.get("/",async (req,res)=>{
    try {
     const usershow=await User.find();
     res.status(201).json(usershow);
    } catch (error) {
     res.status(400).json({error:error.message});
     console.log(error);
    }
 })
//__________________________________________________________________________________________

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById(id);  // Corrected line
        if (!singleUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(singleUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
});

//__________________________________________________________________________________________

router.delete("/:id",async (req,res)=>{
    const { id }=req.params;
    try {
        const singleUser=await User.findByIdAndDelete(id);
        res.status(200).json(singleUser);

    } catch (error) {
        res.status(400).json({error :error.message});
        console.log(error);
    }
})
//_________________________________________________________
router.patch("/:id",async (req,res)=>{
    const { id }=req.params;
    const {name,email,age}=req.body;
    try {
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateUser);

        
    } catch (error) {
        res.status(400).json({error :error.message});
        console.log(error);
    }
})
 module.exports=router;