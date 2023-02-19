import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { USER_PROFILE } from '../gqlOperations/queries'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate  = useNavigate()
    const {loading,error,data} = useQuery(USER_PROFILE)
    if(!localStorage.getItem("token")){
            navigate("/login")
            return <h1>unauthorized</h1>
    }

    console.log(data)
    
    if(loading) return <h2>Profile is loading</h2>
    if(error){
        console.log(error)
    }

    return (
        <div className="container my-container">
            <div className="center-align">
                <img className="circle" style={{border:"2px solid",marginTop:"10px"}} src={`https://robohash.org/${data.user.firstName}.png?size=200x200`} alt="pic" />
                <h5>{data.user.firstName} {data.user.lastName}</h5>
                <h6>Email - {data.user.email}</h6>
            </div>
             <h3>Your quotes</h3>
             {
                 data.user.quotes.map(quo=>{
                     return(
                         <blockquote>
                            <h6>{quo.name}</h6>
                        </blockquote> 
                     )
                 })
             }
        </div>
    )
}

export default Profile
