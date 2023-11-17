import React from 'react';
import './styles/Create.css';

function Create() {
    return (
    <div className='container'>
    <h1 className='inline bg-graphic'>MIXIFY</h1>
    <div className='content'>
    <h1>Create a playlist</h1>
        <h2>Mixtape Name:</h2>
        <input className="input-title" type="text" placeholder="Enter a title for your mixtape..."/>

    <h2>Mixtape Creator:</h2>
    <input className="input-author" type="text" placeholder="Enter your name here..."/>


    <h2>Message:</h2>
    <textarea className="input-messsage" placeholder="Leave a little message for the recipient :)" rows="4" cols="50"></textarea>
    <h2>Create and share a digital mixtape using <a className='spotify-link' href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify's</a> library</h2>
    <a className='btn' href='/create'><h2 className='inline'>Add Songs</h2></a>
    </div>
    <div>
        <div className='recordCover'></div>
        <div className='disc'></div>
    </div>
    
</div>
    );
}

export default Create;