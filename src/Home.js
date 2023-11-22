import React from 'react';
import './styles/Home.css';
import { useEffect, useState } from 'react';

function Home() {

    useEffect(() => {
        const follower = document.getElementById('blur');

        const handleMouseMove = (e) => {
            follower.style.transition = 'left 0.05s ease, top 0.05s ease';
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
          };
      
          document.addEventListener('mousemove', handleMouseMove);
      
          // Cleanup the event listener when the component is unmounted
          return () => {
            document.removeEventListener('mousemove', handleMouseMove);
          };
    }, []);

    return (
        <div className='section1'>

                <span id='blur'></span>
         <h1 className='inline bg-graphic'>MIXIFY</h1>
            <div className='content'>
            <h1>Welcome to <h1 style={{color : ' rgb(255, 145, 0)', display: "inline"}}>Mixify</h1></h1>
            <h2>Create and share a digital mixtape using <a className='spotify-link' href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify's</a> library</h2>
            <a className='btn' href='/create'><h2 className='inline'>Create</h2></a>
            </div>
            
        </div>
    );
}

export default Home