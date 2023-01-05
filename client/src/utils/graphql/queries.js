import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(_id: $id) {
      _id
      displayName
      email
      firstName
      lastName
      role
    }
  }
`;

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      _id
      displayName
      email
      role
    }
  }
`;
