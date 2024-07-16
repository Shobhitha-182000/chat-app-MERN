const User = require('../models/userModel');
const generateTokenAndSetCookies = require('../util/generateToken');
const bcrypt = require('bcrypt');

exports.signupPage = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
        // const profilePic = req.file;
        const profilePic = 'https://avatar.iran.liara.run/public/4';

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        console.log('..............' + oldUser);
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profilePic
        });

        generateTokenAndSetCookies(user._id, res);

        return res.status(200).json({ data: user, message: 'Successfully created' });
    } catch (err) {
        console.error('Signup error', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


exports.loginPage = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
      

        const existPassword = await bcrypt.compare(password, user.password);
        if (!existPassword) {
            return res.status(401).json({ message: 'Password is incorrect' });
        }

        generateTokenAndSetCookies(user._id, res);
        console.log('Response cookies:', res.getHeaders()['set-cookie']);
        
        return res.status(200).json({ data: user, message: 'Successfully logged in' });
    } catch (err) {
        
        console.log('Login error', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllUser = async (req, res) => {
    try {
     
      const filterUser = await User.find().select("-password");
      console.log(filterUser);
      res.status(200).json(filterUser);
    } catch (error) {
      console.log(error);
      if (!res.headersSent) {
        res.status(500).json("Internal server error in get user");
      }
    }
  };