require('dotenv').config();

let MONGODB_URI = process.env.MONGODB_URI;
let SECRET = process.env.SECRET;
let expiration = process.env.EXPIRATION;

module.exports = {
    MONGODB_URI,
    SECRET,
    expiration,
};
