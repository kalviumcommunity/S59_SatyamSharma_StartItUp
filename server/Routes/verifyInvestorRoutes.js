const express = require('express');
const router = express.Router();
const twilioClient = require('../Controller/twilioService'); 

router.use(express.json());

router.post('/verify-investor', async (req, res) => {
    try {
        const { userId, mobileNo, countryCode } = req.body;

        if (!userId || !mobileNo || !countryCode) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const verification = await twilioClient.verifications.create({
            to: `${countryCode}${mobileNo}`,
            channel: 'sms'
        });

        console.log('Verification details:', verification); 

        res.status(200).json({ message: 'OTP sent', verification });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ error: 'Failed to send OTP', details: error.message });
    }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const { mobileNo, countryCode, otp } = req.body;

    if (!mobileNo || !countryCode || !otp) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const verificationCheck = await twilioClient.verificationChecks.create({
      to: `${countryCode}${mobileNo}`,
      code: otp
    });

    if (verificationCheck.status === 'approved') {
      res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

module.exports = router;
