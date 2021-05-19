import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    getPosts {
      id
      body
      username
    }
  }
`;
