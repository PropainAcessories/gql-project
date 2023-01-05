const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const SECRET= "3000 Black Jets of Allah";
const expiration = "30d";

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

const signToken = (_id) => {
    const payload = { _id, email, role };

    return jwt.sign({ data: payload}, SECRET, { expiresIn: expiration})
}

module.exports = {authLogin, signToken};
