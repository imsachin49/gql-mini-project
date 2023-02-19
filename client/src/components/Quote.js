import React,{useState} from 'react'
import { CREATE_QUOTE } from '../gqlOperations/mutations'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

const Quote = () => {
  const [quote,setQuote] = useState("")
    const [createQuote,{data,loading,error}]=useMutation(CREATE_QUOTE,{
        // refetchQueries-> refetches the queries after the mutation is done to overcome the cache issue
        refetchQueries:[
            'getAllQuotes',
            'userProfile'
        ]
    })
    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(quote)
      createQuote({variables:{name:quote}})
      navigate('/')   
    }

    if(loading) return <div>loading...</div>    

    return (
      <div className="container my-container">
      {
            data && <div className="card-panel green lighten-2">
                <span className="white-text">Quote created successfully</span>
            </div>
      }
      {
            error && <div className="card-panel red lighten-2">
                <span className="white-text">Error creating quote</span>
            </div>
      }
          <form onSubmit={handleSubmit}>
              <input 
                  type="text" 
                  value={quote}
                  onChange={e=>setQuote(e.target.value)}
                  placeholder="write your quote here"
                  />
               <button className="btn green">create</button>
          </form>
          
      </div>
  )
}
export default Quote
