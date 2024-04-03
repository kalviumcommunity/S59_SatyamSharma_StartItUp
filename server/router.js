const express = require('express');
const router = express.Router();
const content = require('./Modals/content')
const {connectDB} = require('./db')
require('dotenv').config()

connectDB()

router.get('/contents',async(req,res)=>{
    const data = await content.find()
    res.send(data)
})

module.exports=router;