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
    window.open(
      "https://accounts.spotify.com/logout",
      "_blank",
      "width=600,height=400"
    );
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
            <Link className="link" to ="/privacy"> Privacy Policy </Link>  
          </div>
          
          <div className='nav-right'>
            {
              loggedIn ? < button className="btn" onClick={handleLogout} target='_blank'>    Logout   </button> :
              <a className="btn" href={AUTH_URL}> Login  </a> 
            }
            
          </div>
            
        </div>
      </nav> 
    )
}

export default NavBar;