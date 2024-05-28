const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../Modals/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
require('dotenv').config();

const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;
const URL = process.env.BACKEND_URL;
const CLIENT_URL=process.env.CLIENT_URL;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${URL}/auth/google/callbacks`,  
  scope: ['profile', 'email']
},
  async (accessToken, refreshToken, profile, cb) => {
    try {
      const userData = profile._json;
      const email = userData.email;
      const username = userData.name;
      const picture = userData.picture;
      console.log("Google'S user data:", userData);
       let user = await User.findOne({ emailId: email });
      if (!user) {
        user = new User({ userName: username, emailId: email, picture: picture });
        await user.save();
      }
      return cb(null, user);
    } catch (error) {
      return cb(error, null);
    }
  }
));

passport.serializeUser(function (User, cb) {
  cb(null, User.id);
})

passport.deserializeUser(async function (id, cb) {
  try {
    const user = await User.findById(id);
    cb(null, user);
  } catch (err) {
    cb(err, null);
  }
});


router.get('/google', passport.authenticate("google", { scope: ['profile', 'email'] }))

router.get('/google/callbacks', passport.authenticate('google', { failureRedirect: `${CLIENT_URL}/Login` }), async (req, res) => {
  try {
    const user = req.user;

    const currentTime = new Date().toLocaleString();
    await user.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.emailId,
      subject: 'Welcome To Start-it-up',
      html: `<p>Hello ${user.userName},</p>
             <p>You Login at <b>${currentTime}</b></p>
             <p>Thank you for using our service!</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending password email:', error);
      } else {
        console.log('Password email sent:', info.response);
      }
    });

    const token = jwt.sign({id: user._id, email: user.emailId,pic: user.picture,nam: user.userName,userId:user.userId }, process.env.SECRET_KEY, { expiresIn: '24h' });

    res.cookie('token', token, { maxAge: 3600 * 1000, httpOnly: false, path: '/' });
    res.redirect("http://localhost:5173/");
  } catch (error) {
    console.error('Error during Google OAuth callback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  debug: true, 
});

router.post('/register', async (req, res) => {
  const { userName, emailId, password, userId } = req.body;

  try {
    const existing = await User.findOne({ $or: [{ emailId }, { userId }] });

    if (existing) {
      return res.status(400).json({ error: "Account already exists" });
    }

    const otp = generateOTP();

    const mailOptions = {
      from: process.env.EMAIL,
      to: emailId,
      subject: 'Verify your email address',
      html: `<p>Your OTP for email verification is: <strong>${otp}</strong></p>
             <p>Thanks for being part of our family</p>`
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.error('Error sending verification email:', error);
        return res.status(500).json({ error: 'Error sending verification email' });
      }

      const newUser = new User({ userName, emailId, userId });
      newUser.setPassword(password);
      newUser.otp = otp;
      const savedUser = await newUser.save();
      if (!savedUser) {
        return res.status(400).json({ error: 'Error saving user profile' });
      }

      console.log('Verification email sent:', info.response);
      res.status(201).json(savedUser);
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/verify-otp', async (req, res) => {
  const { emailId, otp } = req.body;

  try {
    const user = await User.findOne({ emailId });

    if (!user || user.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    user.emailVerified = true;
    await user.save();

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  const { emailId, password } = req.body;
  try {
    const user = await User.findOne({ emailId });

    if (!user || !user.validatePassword(password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({id: user._id,nam:user.userName,userId: user.userId, pic : user.picture,email:user.emailId}, process.env.SECRET_KEY, { expiresIn: '24h' });

    const currentTime = new Date().toLocaleString();

   
    const mailOptions = {
      from: process.env.EMAIL,
      to: emailId,
      subject: 'Successful Login Notification',
      html: `<p>Hello ${user.userName},</p>
             <p>This is to notify you that you have successfully logged in at ${currentTime}.</p>
             <p>If you didn't login then please <b>Respond to this mail</b></p>`
    };

   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending login notification email:', error);
      } else {
        console.log('Login notification email sent:', info.response);
      }
    });
    
    res.status(200).json({token})
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const updateUserFields = (req, res, next) => {
  const { userName, emailId, password, userId, investorId, publishId } = req.body;

  req.userUpdates = {
    userName,
    emailId,
    userId,
    investorId,
    publishId,
    password,
  };

  next();
};



router.patch('/register/:id', updateUserFields, async (req, res) => {
  const id = req.params.id;

  try {
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const { emailId, userId } = req.userUpdates;

    if (emailId || userId) {
      const existing = await User.findOne({
        $and: [
          { _id: { $ne: id } },
          { $or: [{ emailId }, { userId }] }
        ]
      });

      if (existing) {
        return res.status(400).json({ error: "Email ID or User ID already in use" });
      }
    }

    Object.keys(req.userUpdates).forEach((key) => {
      if (req.userUpdates[key]) {
        if (key === 'password') {
          existingUser.setPassword(req.userUpdates[key]);
        } else {
          existingUser[key] = req.userUpdates[key];
        }
      }
    });

    const updatedUser = await existingUser.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



function generateOTP() {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

module.exports = router;
