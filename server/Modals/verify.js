const mongoose = require('mongoose');
const { Schema } = mongoose;

const verifySchema = new Schema({
  uniqueId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  userId: {
    type: String,
  },
  mobileNo: {
    type: Number,
  },
  nam: {
    type: String,
  },
  self: {
    type: String,
  },
  tagline: {
    type: String,
  },
  likes: {
    type: Number,
  },
  blogPost: [{
    date: {
      type: String,
    },
    topic: {
      type: String,
    },
    subHeading: {
      type: String,
    },
    description: {
      type: String,
    }
  }],
  socialInsta: {
    type: String,
  },
  socialLinked: {
    type: String,
  },
  email: {
    type: String,
  },
  usersLiked: {
    type: [String],
  },
  picture: {
    type: String,
  },
  idProf: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  }
});

const Verif = mongoose.model('Verif', verifySchema);

module.exports = Verif;
