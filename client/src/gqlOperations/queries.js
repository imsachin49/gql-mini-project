import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes{
    quotes{
      name
        by{
          _id
          firstName
        }
      }
    }
`

export const USER_PROFILE = gql`
  query userProfile{
    user: myProfile{
      firstName
      lastName
      email
      quotes{
        name
      }
    }
  }
`

export const GET_USER_BY_ID = gql`
query getUserById($userid: ID!) {
  user(_id: $userid) {
    _id
    firstName
    lastName
    email
    quotes{
      name
    }
  }
}
`
