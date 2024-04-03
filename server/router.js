const express = require('express');
const router = express.Router();
const content = require('./Modals/content')
const mainData = require('./Modals/mainData')
const verify = require('./Modals/verify')
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

router.get('/mainDatas',async(req,res)=>{
    try{
    const data = await mainData.find()
    res.send(data);
    }
    catch (error) {
        console.error("Error fetching contents:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/verifys',async(req,res)=>{
    try{
    const data = await verify.find()
    res.send(data);
    }
    catch (error) {
        console.error("Error fetching contents:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


router.post('/contents', async (req, res) => {
    try {
        const { error } = req.body;
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newPost = new content(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add data', "req.body" : req.body });
    }
});


router.post('/verifys', async (req, res) => {
    try {
        const { error } = req.body;
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newPost = new verify(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add data', "req.body" : req.body });
    }
});

router.post('/mainDatas', async (req, res) => {
    try {
        const { error } = req.body;
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newPost = new mainData(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add data', "req.body" : req.body });
    }
});





module.exports=router;