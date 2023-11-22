import React from 'react';
import './styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useState } from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=62143053f6564d6b82927c97a90de897&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
function NavBar(){
  const navigate = useNavigate();
  const code = localStorage.getItem("code");
  console.log( "NAVBAR: " + code )
  const [loggedIn, setLoggedIn] = useState(code != null);

  const handleLogout = () => { 
    localStorage.removeItem('code')
    navigate("/");
    setLoggedIn(false);
  }

    return(
        <nav> 
        <div className='nav-container'>
          <div>
            <img className='logo' src={process.env.PUBLIC_URL + '/mixifyLogo.png'} alt='logo' />
          </div>
            
          <div className='nav-links'>
            <Link className="link" to ="/">Home </Link> 
            <Link className="link" to ="/contact"> Contact </Link>
            <Link className="link" to ="/about"> About </Link>  
          </div>
          
          <div className='nav-right'>
            {
              loggedIn ? <button onClick={handleLogout} className="btn"> Logout </button> :
               <button  className="btn"><a href={AUTH_URL}> Login </a> </button>
            }
            
          </div>
            
        </div>
      </nav> 
    )
}

export default NavBar;