import {users,quotes} from './fakeDB.js'
import {randomBytes} from 'crypto'
import User from './models/Users.js'
import Quote from './models/Quotes.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const resolvers={

    Query:{
        users:async()=>await User.find({}), 
        user:async(_,{_id})=>await User.findOne({_id}), 
        quotes:async()=>await Quote.find({}).populate("by","_id firstName"), 
        iquote:async(_,{_id})=>await Quote.find({_id}),
        myProfile:async(_,args,{userId})=>{
            if(!userId){
                throw new Error("You are not authenticated")
            }
            // get user credentials and quotes by user by userId
            const userProfile=await User.findOne({_id:userId})
            return userProfile
        }
    },
    User:{
        quotes:async(ur)=>await Quote.find({by:ur._id})
    },
    Mutation:{
        signupUser:async(_,{userNew})=>{
            try {
                const user=await User.findOne({email:userNew.email})
                if(user){
                    throw new Error("User already exists")
                }   
                const hashedPassword=await bcrypt.hash(userNew.password,12)
                const newUser=new User({
                    ...userNew,
                    password:hashedPassword
                })
                return await newUser.save()
            } catch (error) {
                console.log(error)
            }
        },
        signinUser:async(_,{userSignIn})=>{
            try {
                const user=await User.findOne({email:userSignIn.email})
                if(!user){
                    throw new Error("User does not exist")
                }
                const isMatch=await bcrypt.compare(userSignIn.password,user.password)
                if(!isMatch){
                    throw new Error("Password is incorrect")
                }
                const token=jwt.sign({userId:user._id},process.env.SECRET_KEY)
                return {user,token}
            } catch (error) {
                console.log(error)
            }
        },
        createQuote:async(_,{name},{userId})=>{
            try {
                if(!userId){
                    throw new Error("You are not authenticated")
                }
                const newQuote=new Quote({
                    name,
                    by:userId
                })
                await newQuote.save()
                console.log(newQuote)
                return "Quote created successfully"
            } catch (error) {
                console.log(error)
            }
        },
        deleteQuote:async(_,{_id})=>{
            try {
                console.log(_id)
                console.log(" hgf")
                const deletedQuote=await Quote.findByIdAndDelete(_id)
                return "Quote deleted successfully"
            } catch (error) {
                console.log(error)
            }
        },
        updateQuote:async(_,{_id,name})=>{
            try {
                const updateQuote=await Quote.findByIdAndUpdate(_id,{name},{new:true});
                console.log(updateQuote)
                return "Quote updated successfully"
            } catch (error) {
                console.log(error)
            }
        },
    }
}

export default resolvers
