const express = require('express');
const router = express.Router();

const public = require('../Modals/public')
const mainData = require('../Modals/mainData')
const verify = require('../Modals/verify')
const users=require('../Modals/user')
const profile=require('../Modals/profile')
const trending=require('../Modals/trending')
const feedback=require('../Modals/feedback')
const connectInv=require('../Modals/connectInves')
const connectFoun=require('../Modals/connectFound')
const collections=require('../Modals/collection')
const conversation= require('../Modals/conversation')

const {schemaChat} = require('../JoiSchemas/joiSchemaPublic')
const {schemaVerify} = require('../JoiSchemas/joiSchemaVerify')
const {schemaMain} = require('../JoiSchemas/joiSchemaMain')
const {profileSchema} = require('../JoiSchemas/joiSchemaProfile')
const {collectionSchema} = require('../JoiSchemas/joischemaCollection')
const {feedbackSchema} = require('../JoiSchemas/joischemaFeedback')
const {trendingSchema} = require('../JoiSchemas/joischemaTrending')
const {userSchema} = require('../JoiSchemas/joischemaUser')
const {founderSchema} = require('../JoiSchemas/joischemaconnectFounder')
const {investSchema} = require('../JoiSchemas/joischemaconnectInvest')
const {conversationSchema} = require('../JoiSchemas/joischemConversation')


const jwt =require('jsonwebtoken')
const {connectDB} = require('../db')
require('dotenv').config()
connectDB()


const authToken = (req, res, next) => {
    const authHead = req.headers['authorization'];
    const token = authHead && authHead.split(' ')[1];  
    if(token == null){
      return res.status(401).json({ error: "Unauthorized Access", message: "You are not authorized to access this resource." });
    }
    
    jwt.verify(token, process.env.SECRET_KEY, (err, userId) => {
      if(err){
        return res.status(403).json({ error: "Forbidden", message: "Access forbidden. Please login again." });
      }
      req.userId = userId;

     next();
  });
  }

function validateInput(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}


function errorHandler(err, req, res, next) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: 'Internal Server Error' });
}

async function updateDocument(Model, id, updateData, res) {
    try {
        const updatedDocument = await Model.findByIdAndUpdate(id, updateData, {
            new: true,
        });

        if (!updatedDocument) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json(updatedDocument);
    } catch (error) {
        next(error); 
    }
}

router.get('/conver', async (req, res, next) => {
    try {
        const data = await conversation.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/contents', async (req, res, next) => {
    try {
        const data = await public.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/mainDatas', async (req, res, next) => {
    try {
        const data = await mainData.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});


router.get('/profiles', async (req, res, next) => {
    try {
        const data = await profile.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/verifys', async (req, res, next) => {
    try {
        const verifyData = await verify.find();
        res.send(verifyData);
    } catch (err) {
        next(err);
    }
});

router.get('/trendings', async (req, res, next) => {
    try {
        const data = await trending.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/feedbacks', async (req, res, next) => {
    try {
        const data = await feedback.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/connectInves', async (req, res, next) => {
    try {
        const data = await connectInv.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/connectFoun', async (req, res, next) => {
    try {
        const data = await connectFoun.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/collections', async (req, res, next) => {
    try {
        const data = await collections.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const data = await users.find();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

router.post('/conversations',authToken, validateInput(conversationSchema), async (req, res, next) => {
    try {
        const newPost = new conversation(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        next(error);
    }
});


router.post('/contents',authToken, validateInput(schemaChat), async (req, res, next) => {
    try {
        const newPost = new public(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        next(error);
    }
});


router.post('/mainDatas',authToken, validateInput(schemaMain), async (req, res, next) => {
    try {
        const newPost = new mainData(req.body);
        const savedPost = await newPost.save();
        res.status(201).json({ _id: savedPost._id }); 
    } catch (error) {
        next(error);
    }
});

router.post('/verifys',authToken, validateInput(schemaVerify), async (req, res, next) => {
    try {
        const newPost = new verify(req.body);
        const savedPost = await newPost.save();
        res.status(201).json({_id: savedPost._id});
    } catch (error) {
        next(error);
    }
});


router.post('/profiles', authToken, validateInput(profileSchema), async (req, res, next) => {
    try {
        const newProfile = new profile(req.body);
        const savedProfile = await newProfile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        next(error);
    }
});

router.post('/trendings', authToken, validateInput(trendingSchema), async (req, res, next) => {
    try {
        const newTrending = new trending(req.body);
        const savedTrending = await newTrending.save();
        res.status(201).json(savedTrending);
    } catch (error) {
        next(error);
    }
});

router.post('/feedbacks', authToken, validateInput(feedbackSchema), async (req, res, next) => {
    try {
        const newFeedback = new feedback(req.body);
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        next(error);
    }
});

router.post('/connectInves', authToken, validateInput(investSchema), async (req, res, next) => {
    try {
        const newInvestment = new connectInv(req.body);
        const savedInvestment = await newInvestment.save();
        res.status(201).json(savedInvestment);
    } catch (error) {
        next(error);
    }
});

router.post('/connectFoun', authToken, validateInput(founderSchema), async (req, res, next) => {
    try {
        const newFounder = new connectFoun(req.body);
        const savedFounder = await newFounder.save();
        res.status(201).json(savedFounder);
    } catch (error) {
        next(error);
    }
});

router.post('/collections', authToken, validateInput(collectionSchema), async (req, res, next) => {
    try {
        const newCollection = new collections(req.body);
        const savedCollection = await newCollection.save();
        res.status(201).json(savedCollection);
    } catch (error) {
        next(error);
    }
});

router.post('/users', authToken, validateInput(userSchema), async (req, res, next) => {
    try {
        const newUser = new users(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
});


router.put('/contents/:id', validateInput(schemaChat), async (req, res, next) => {
    updateDocument(public, req.params.id, req.body, res, next);
});

router.put('/verifys/:id', validateInput(schemaVerify), async (req, res, next) => {
    updateDocument(verify, req.params.id, req.body, res, next);
});

router.put('/mainDatas/:id', validateInput(schemaMain), async (req, res, next) => {
    updateDocument(mainData, req.params.id, req.body, res, next);
});

router.put('/profiles/:id', validateInput(profileSchema), async (req, res, next) => {
    updateDocument(profile, req.params.id, req.body, res, next);
});

router.put('/trendings/:id', validateInput(trendingSchema), async (req, res, next) => {
    updateDocument(trending, req.params.id, req.body, res, next);
});

router.put('/feedbacks/:id', validateInput(feedbackSchema), async (req, res, next) => {
    updateDocument(feedback, req.params.id, req.body, res, next);
});

router.put('/connectInves/:id', validateInput(investSchema), async (req, res, next) => {
    updateDocument(connectInv, req.params.id, req.body, res, next);
});

router.put('/connectFoun/:id', validateInput(founderSchema), async (req, res, next) => {
    updateDocument(connectFoun, req.params.id, req.body, res, next);
});

router.put('/collections/:id', validateInput(collectionSchema), async (req, res, next) => {
    updateDocument(collections, req.params.id, req.body, res, next);
});

router.put('/users/:id', validateInput(userSchema), async (req, res, next) => {
    updateDocument(users, req.params.id, req.body, res, next);
});

router.delete('/contents/:id', async (req, res, next) => {
    try {
        const deletedPost = await public.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/mainDatas/:id', async (req, res, next) => {
    try {
        const deletedData = await mainData.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/verifys/:id', async (req, res, next) => {
    try {
        const deletedVerify = await verify.findByIdAndDelete(req.params.id);
        if (!deletedVerify) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/profiles/:id', async (req, res, next) => {
    try {
        const deletedProfile = await profile.findByIdAndDelete(req.params.id);
        if (!deletedProfile) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/trendings/:id', async (req, res, next) => {
    try {
        const deletedTrending = await trending.findByIdAndDelete(req.params.id);
        if (!deletedTrending) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/feedbacks/:id', async (req, res, next) => {
    try {
        const deletedFeedback = await feedback.findByIdAndDelete(req.params.id);
        if (!deletedFeedback) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/connectInves/:id', async (req, res, next) => {
    try {
        const deletedInvestment = await connectInv.findByIdAndDelete(req.params.id);
        if (!deletedInvestment) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/connectFoun/:id', async (req, res, next) => {
    try {
        const deletedFounder = await connectFoun.findByIdAndDelete(req.params.id);
        if (!deletedFounder) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/collections/:id', async (req, res, next) => {
    try {
        const deletedCollection = await collections.findByIdAndDelete(req.params.id);
        if (!deletedCollection) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.delete('/users/:id', async (req, res, next) => {
    try {
        const deletedUser = await users.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        next(error);
    }
});

router.get('/users/:id', async (req, res, next) => {
    try {
        const user = await users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});


router.patch('/contents/:id',authToken, validateInput(schemaChat), async (req, res, next) => {
    updateDocument(public, req.params.id, req.body, res, next);
});


router.patch('/verifys/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { blogPost } = req.body;

        const updatedDocument = await verify.findByIdAndUpdate(
            id,
            { $push: { blogPost: blogPost } },
            { new: true }
        );


        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json(updatedDocument);
    } catch (error) {
        next(error);
    }
});
router.patch('/mainDatas/:id', validateInput(schemaMain), async (req, res, next) => {
    updateDocument(mainData, req.params.id, req.body, res, next);
});

router.patch('/profiles/:id', validateInput(profileSchema), async (req, res, next) => {
    updateDocument(profile, req.params.id, req.body, res, next);
});

router.patch('/trendings/:id', validateInput(trendingSchema), async (req, res, next) => {
    updateDocument(trending, req.params.id, req.body, res, next);
});

router.patch('/feedbacks/:id', validateInput(feedbackSchema), async (req, res, next) => {
    updateDocument(feedback, req.params.id, req.body, res, next);
});

router.patch('/connectInves/:id', validateInput(investSchema), async (req, res, next) => {
    updateDocument(connectInv, req.params.id, req.body, res, next);
});

router.patch('/connectFoun/:id', validateInput(founderSchema), async (req, res, next) => {
    updateDocument(connectFoun, req.params.id, req.body, res, next);
});

router.patch('/collections/:id', validateInput(collectionSchema), async (req, res, next) => {
    updateDocument(collections, req.params.id, req.body, res, next);
});

router.patch('/users/:id', validateInput(userSchema), async (req, res, next) => {
    updateDocument(users, req.params.id, req.body, res, next);
});



router.use(errorHandler);

module.exports = router;