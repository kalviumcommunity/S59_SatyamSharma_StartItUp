const express = require('express');
const router = express.Router();
const content = require('./Modals/content')
const {connectDB} = require('./db')
require('dotenv').config()

connectDB()

router.get('/contents',async(req,res)=>{
    try{
    const data = await content.find()
    res.send(data);
    }
    catch (error) {
        console.error("Error fetching contents:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports=router;