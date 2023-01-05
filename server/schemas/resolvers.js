const User = require('../Models/User');
const { signToken, authLogin } = require('../utils/authLogin');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    getUser: async (parent, _id, context) => {
      const loggedIn = authLogin(context);

      if (loggedIn) {
        const user = await User.findById({ _id: context.user._id });

        return user;
      } else {
        throw new AuthenticationError('Must be logged in to view profile.');
      }
    },
    getAllUsers: async (parent, args) => {
      const allUsers = await User.find({}).select('displayName email role');

      return allUsers;
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
