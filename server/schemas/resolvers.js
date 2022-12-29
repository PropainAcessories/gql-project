const User = require('../Models/User');
const { signToken, authLogin } = require('../utils/authLogin');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    getUser: async (parent, { _id }, context) => {
            const user = await User.findById(_id);

            return user;
    }
  },
  Mutation: {
    register: async (parent, args) => {
        const user = User.create(args);
        const token = signToken(user);

        return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('Incorrect Login')
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect Login');
        }

        const token = signToken(user);

        return { token, user };
    }
  }
};

module.exports = resolvers;
