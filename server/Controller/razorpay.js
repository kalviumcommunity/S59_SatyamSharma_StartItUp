const Razorpay = require('razorpay');

console.log('RAZORPAY_API_KEY:', process.env.RAZORPAY_API_KEY);
console.log('RAZORPAY_API_SECRET:', process.env.RAZORPAY_API_SECRET);

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = instance;
