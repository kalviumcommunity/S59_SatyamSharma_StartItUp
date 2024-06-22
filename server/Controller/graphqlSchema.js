const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const User = require('../Modals/user'); 
const Offer = require('../Modals/offers'); 
const offerValidationSchema = require('../JoiSchemas/offerValidation');

const schema = buildSchema(`
  type Query {
    hello: String
    randomNumber: Float
    getUser(id: ID!): User
  }

  type Mutation {
    createOffer(uniqueId: ID!, userName: String!, discount: String!, emailId: String!): Offer
  }

  type User {
    id: ID
    name: String
    emailId: String
  }

  type Offer {
    id: ID
    uniqueId: ID
    userName: String
    discount: String
    emailId: String
  }
`);

const root = {
  hello: () => 'Hello, world!',
  randomNumber: () => Math.random(),
  getUser: async ({ id }) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid user ID format');
    }

    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return {
        id: user._id,
        name: user.userName,
        emailId: user.emailId
      };
    } catch (error) {
      if (error.name === 'MongoNetworkError') {
        throw new Error('Database connection error');
      }
      throw new Error(`An error occurred: ${error.message}`);
    }
  },
  createOffer: async ({ uniqueId, userName, discount, emailId }) => {
    const offerData = { uniqueId, userName, discount, emailId };
    const { error } = offerValidationSchema.validate(offerData);
    if (error) {
      throw new Error(`Validation error: ${error.details[0].message}`);
    }

    try {
      const user = await User.findById(uniqueId);
      if (!user) {
        throw new Error('User not found');
      }
    } catch (error) {
      if (error.name === 'MongoNetworkError') {
        throw new Error('Database connection error');
      }
      throw new Error(`An error occurred: ${error.message}`);
    }

    try {
      const newOffer = new Offer(offerData);
      const savedOffer = await newOffer.save();
      return {
        id: savedOffer._id,
        uniqueId: savedOffer.uniqueId,
        userName: savedOffer.userName,
        discount: savedOffer.discount,
        emailId: savedOffer.emailId
      };
    } catch (error) {
      if (error.name === 'MongoNetworkError') {
        throw new Error('Database connection error');
      }
      throw new Error(`An error occurred: ${error.message}`);
    }
  }
};

module.exports={root,schema}