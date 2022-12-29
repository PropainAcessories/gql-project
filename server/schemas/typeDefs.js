const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum RoleType {
    USER
    ADMIN
  }

  type LoggedUser {
    _id: ID!
    email: String!
    token: String!
    role: RoleType!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    displayName: String!
    password: String!
    role: RoleType
  }

  type UserList {
    _id: ID!
    displayName: String!
  }

  type Query {
    getUser(_id: ID!): User!
    getAllUsers: [UserList]!
  }

  type Mutation {
    register(email: String!, password: String!): LoggedUser!
    login(email: String!, password: String!): LoggedUser!
  }
`;

module.exports = typeDefs;
