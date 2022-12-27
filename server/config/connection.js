const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('../utils/config');

const connectToDB = async () => {
    try {
        mongoose.connect(url || 'mongodb://127.0.0.1:27017/gql-project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          });

          console.log(`Connected to MongoDB`)
    } catch (error) {
        console.error(`Error while connecting to MongoDB: `, error.message);
    }
};

module.exports = connectToDB;
