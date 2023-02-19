import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
    mutation createUser($userNew:UserInput!){
        user:signupUser(userNew:$userNew){
            _id
            email
            firstName
            lastName
            password
        }
    }
`

export const LOGIN_USER = gql`
    mutation SigninUser($userSignIn:UserSigninInput!){
        user:signinUser(userSignIn:$userSignIn){ 
            token
        }
    }
  
`

export const CREATE_QUOTE = gql`
    mutation createQuote($name:String!){
        createQuote(name:$name)
  }
`


// mutation createUser($userNew:UserInput!){
//     signupUser(userNew:$userNew){
//      _id
//      email
//      firstName
//      lastName
//      password
//    }
//  }
