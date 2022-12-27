const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const { SECRET } = require('./config');

const authLogin = (context) => {
    const token = context.req.headers.authorization;

    if (!token) {
        throw new AuthenticationError('Authorization invalid. Access Denied.');
    }

    try {
        const decodedUser = jwt.verify(token, SECRET);
        return decodedUser;
    } catch (err) {
        throw new AuthenticationError(err)
    }
};

module.exports = authLogin;
