import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Navbar = () =>  {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    return (
        <nav>
        <div className="nav-wrapper #673ab7 deep-purple">
          <Link to="/" className="brand-logo left">Quote App</Link>
          <ul id="nav-mobile" className="right">
            {
              token ?
              <>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/quote">Create</Link></li>
                <li><button className='red btn' onClick={()=>{
                  localStorage.removeItem('token') 
                  navigate('/login')}}>
                  Logout
                  </button>
                </li>
              </> :
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Signup</Link></li>
              </>
            }
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
