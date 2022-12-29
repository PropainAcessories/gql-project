const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('../utils/config');

    try {
        mongoose.connect(url || 'mongodb://127.0.0.1:27017/gql-project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          console.log(`Connected to MongoDB`)
    } catch (error) {
        console.error(`Error while connecting to MongoDB: `, error.message);
    }


module.exports = mongoose.connection;
