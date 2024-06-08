const instance = require('./razorpay');
const crypto = require('crypto');
const Payment = require('../Modals/paymentModel');

const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100), 
      currency: 'INR',
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Error creating order:', error.message);
    res.status(500).json({
      success: false,
      message: 'Unable to create order',
      error: error.message,
    });
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_signature) {
    console.error('Signature is undefined');
    return res.status(400).json({
      success: false,
      message: 'Signature is undefined',
    });
  }

  const body = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      const payment = await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      res.render('paydetails', {
        reference: payment._id,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id
      });
    } catch (error) {
      console.error('Error saving payment:', error.message);
      res.status(500).json({
        success: false,
        message: 'Unable to save payment',
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: 'Invalid signature',
    });
  }
};


module.exports = {
  checkout,
  paymentVerification,
};
