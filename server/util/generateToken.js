const jwt = require('jsonwebtoken');

const generateTokenAndSetCookies = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
            expiresIn: '30d'
        });
        res.cookie('jwt', token, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        });
    } catch (err) {
        console.error('Error generating token and setting cookies', err);
    }
};

module.exports = generateTokenAndSetCookies;
