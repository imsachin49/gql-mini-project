import React from 'react'
import { GET_ALL_QUOTES } from '../gqlOperations/queries'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const Home = () => {
    const { loading, error, data } = useQuery(GET_ALL_QUOTES);
    if(data) console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if(data.quotes.length === 0) return <p>No Quotes Found</p>
    return (
        <div className="container">
            {data.quotes.map(quote=>{
                return(
                <blockquote>
                    <h6>{quote.name}</h6>
                    <Link to={`/profile/${quote.by._id}`} className="right-align">~{quote.by.firstName}</Link>
                </blockquote>)})}
        </div>
    )
}

export default Home

// apollo-client is a library that allows us to connect our react app to our graphql server,
// it caches our data and makes it easy to query and mutate data from our graphql server it also
// prevent us from making multiple requests(or multiple network requests) to the server for the same data
