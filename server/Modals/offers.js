const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new mongoose.Schema({
  uniqueId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  userName: {
    type: String
  },
  discount: {
    type: String
  },
  emailId: {
    type: String
  }
});

const Offer = mongoose.model('offer', offerSchema);
module.exports = Offer;
