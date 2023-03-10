const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum RoleType {
    USER
    ADMIN
  }

  type LoggedUser {
    _id: ID!
    email: String!
    role: RoleType!
    token: String!
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
    email: String!
    role: String!
  }

  type Query {
    getUser(_id: ID!): User!
    getAllUsers: [UserList]!
  }

  type Mutation {
    register(email: String!, password: String!, firstName: String!, lastName: String!, displayName: String!): LoggedUser!
    login(email: String!, password: String!): LoggedUser!
  }
`;

module.exports = typeDefs;
