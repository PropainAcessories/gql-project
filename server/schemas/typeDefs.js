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
    role: RoleType
  }


  type Query {

  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
