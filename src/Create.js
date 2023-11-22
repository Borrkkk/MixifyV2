import React from 'react';
import './styles/Create.css';
import { useEffect, useState } from'react';
import { useNavigate } from'react-router-dom';
import SpotifyWebApi from "spotify-web-api-js";
import SearchResult from './SearchResult';
import useAuth from './useAuth';

const spotifyApi = new SpotifyWebApi({
    clientId: "62143053f6564d6b82927c97a90de897",
})

function Create() {
    const code = localStorage.getItem("code");
    const accessToken = useAuth(code);
    const [ search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [mixtape, setMixtape] = useState([]);
    const [playingTrack, setPlayingTrack] =  useState({});
    const [ step, setStep ]= useState(0);


    const addSong = (track) =>{
        if (mixtape.length >= 10 || mixtape.includes(track)) return;
        setMixtape(oldMixtape => [...oldMixtape, track]);
    }

    const removeSong = (track) =>{
        setMixtape(mixtape.filter(item => item !== track));
    }
    useEffect(()=>{
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken])

    useEffect(()=>{
        if(search === " "){
            setSearch("")
            return;
        };
        //if no searches, empty searchResults array
        if (!search) return setSearchResults([]);
        //if no access token, we dont want to search
        if (!accessToken) return;
        let cancel = false;

        spotifyApi.searchTracks(search, {limit: 10}).then(function(res){
            if (cancel) return;
  
            setSearchResults(res.tracks.items.map(track=>{
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest,image) => {
                        if (image.height < smallest.height) return image
                        return smallest;
                    }, track.album.images[0])

                const largestAlbumImage = track.album.images.reduce(
                    (largest,image) => {
                        if (image.height > largest.height) return image
                        return largest;
                    }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrlSmall: smallestAlbumImage.url,
                    albumUrlLarge: largestAlbumImage.url,
                    preview: track.preview_url
                }
            }))
        },function(error){
            console.log(error);
        })
        return () => cancel = true;
    },[search, accessToken])

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
    <br/><br/>
    </div>
        
    <div className='addSongs'>
        <div>
            <h1> Songs:</h1>
            <input className="input-songSearch" type="text" placeholder="Song title..."onChange={e => setSearch(e.target.value)}/>
        </div>
       {searchResults.map(song => (
            <div>
                <SearchResult song={song}/>
            </div>))
        }
    </div>
    
</div>
    );
}

export default Create;