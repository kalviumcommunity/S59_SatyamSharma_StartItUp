const express = require('express');
const router = express.Router();
const content = require('./Modals/content')
const mainData = require('./Modals/mainData')
const verify = require('./Modals/verify')
const {schemaChat} = require('./joiSchemaChat')
const {schemaVerify} = require('./joiSchemaVerify')
const {schemaMain} = require('./joiSchemaMain')

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
        const { error } = schemaChat.validate(req.body);
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
        const { error } = schemaVerify.validate(req.body);
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
        const { error } = schemaMain.validate(req.body);
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


router.put('/contents/:id',async (req, res) => {
    try {
        const updatedPost = await content.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
        });

        if (!updatedPost) {
            return res.status(404).json({ error: 'Data not found' });
        } 
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/verifys/:id',async (req, res) => {
    try {
        const updatedPost = await verify.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
        });

        if (!updatedPost) {
            return res.status(404).json({ error: 'Data not found' });
        } 
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/mainDatas/:id',async (req, res) => {
    try {
        const updatedPost = await mainData.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
        });

        if (!updatedPost) {
            return res.status(404).json({ error: 'Data not found' });
        } 
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});




module.exports=router;