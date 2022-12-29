import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query Query($id: ID!) {
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
