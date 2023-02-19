// ----------------(1):
// query getAllUsers{
// 	users{
//     _id
//     firstName
//     lastName
//     dateOfBirth
//     native
//     email
//   }
// }

// ----------------(2):
// query getAllQuotes{
//     quotes{
//       by
//       quote
//     }
//   }

// ----------------(3):
// query getUserById{
//     user(_id:"1"){
//       _id,
//       firstName
//       dateOfBirth
//       quotes{
//         by
//         name
//       }
//     }
//   }

// ----------------(4):
// query getQuoteByID{
//     iquote(by:"2"){
//       name
//       by
//     }
//   }

// ----------------(5):
// when _id is query where query variable..
// {
//   "userid":"2"
// }

// query getUserBYId($userid:ID!){
//     user(_id:$userid){
//       _id
//       firstName
//       email
//       native
//     }
//   }

// ----------------(6):
// query getQuoteById($quoteId:ID!){
//     iquote(by:$quoteId){
//       by
//       name
//     }
//   }

// {
//     "quoteId":"1"
// }

// {
//     "quoteId":"1"
// }

// ----------------(7):
// mutation createUser($userNew:userInput!){
//     user:signUpDummy(userNew:$userNew){ 
//       _id
//       email
//       firstName
//       lastName
//     }
//   }

//   {
//     "userNew": {
//       "firstName": "navin1",
//       "lastName": "ssd1",
//       "email": "sdsad1@sd.com",
//       "password": "123145"
//     }
//   }

// ----------------(8):
// mutation createUser($userNew:UserInput!){
//     signupUser(userNew:$userNew){
//      _id
//      email
//      firstName
//      lastName
//      password
//    }
//  }

// {
//     "userNew": {
//       "firstName": "navin",
//       "lastName": "sharma",
//       "email": "navin@navin.com",
//       "password": "12345"
//     }
// }

// ----------------(9):
// mutation SigninUser($userSignIn:UserSigninInput!){
//     user:signinUser(userSignIn:$userSignIn){ 
//       token
//     }
//   }
  
// {
//     "userSignIn": {
//       "email": "navin@navin.com",
//       "password": "12345"
//     }
//   }

