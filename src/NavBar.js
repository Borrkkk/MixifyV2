import React from 'react';
import './styles/Navbar.css'
import { Link } from 'react-router-dom';

function NavBar(){
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
            <button className="btn"> Login </button>
          </div>
            
        </div>
      </nav> 
    )
}

export default NavBar;