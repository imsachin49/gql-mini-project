import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import typeDefs from './schemaGql.js'
import mongoose from 'mongoose'
import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("📃You are now connected to DB ✅")
}).catch((e)=>{
    console.log("Error in connecting to the DB ❌❌")
})

import resolvers from './resolvers.js'
import User from './models/Users.js'
import Quote from './models/Quotes.js'

const context=async({req})=>{
    const {authorization}=req.headers
    if(authorization){
        const {userId}=Jwt.verify(authorization,process.env.SECRET_KEY)
        return {userId}
    }
}

const server=new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()        
    ]
})

server.listen().then(({url})=>{
    console.log(`✈️+ Server Ready at ${url}`)
})

// mutations are like post,put,get,delete api...
