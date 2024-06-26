const mongoose = require('mongoose');
const crypto =require('crypto')


const userSchema= new mongoose.Schema({
    userName:{
        type : String
    },
    emailId:{
        type: String
    },
    userId:{
        type :String
    },
    picture:{
      type :String
  },
    password:{
        salt: String,
        hash:String
    },
    publishId:{
      type: String,
    },
    investorId:{
      type :String
    },
    otp: {
      type: String
  }
})

userSchema.methods.setPassword = function (password) {
    this.password.salt = crypto.randomBytes(16).toString('hex');
    this.password.hash = crypto
      .pbkdf2Sync(password, this.password.salt, 1000, 64, 'sha512')
      .toString('hex');
  };
  
  userSchema.methods.validatePassword = function (password) {
    const hash = crypto
      .pbkdf2Sync(password, this.password.salt, 1000, 64, 'sha512')
      .toString('hex');
    return this.password.hash === hash;
  };

  const users = mongoose.model('authusers', userSchema);

module.exports = users
