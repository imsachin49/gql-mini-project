import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../gqlOperations/mutations'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData,setFormData] = useState({})
  const navigate = useNavigate()
  const [signinUser,{data,loading,error}] = useMutation(LOGIN_USER,{
    onCompleted(data){
      localStorage.setItem('token',data.user.token)
      navigate('/')
    }
  })

  if(loading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>

    const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(formData)
      signinUser({variables:{userSignIn:formData}})
      setFormData({})
    }

  return (
    <div className="container my-container">
        <h5>Login!!</h5>
        <form onSubmit={handleSubmit}>
            <input
             type="email"
             placeholder="email"
             name="email"
             onChange={handleChange}
             required
             />
            <input
             type="password"
             placeholder="password"
             name="password"
             onChange={handleChange}
             required
             />
             <Link to="/register"><p>Don't have an account?</p></Link>
             <button className="btn #673ab7 deep-purple" type="submit">Login</button>
        </form>
    </div>
)
}

export default Login
