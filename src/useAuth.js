import {useState, useEffect, useRef} from "react";
import axios from "axios";
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=62143053f6564d6b82927c97a90de897&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    //UseRef is used to prevent the effect from being called multiple times.
    //useEffect calls twice because of React.StrictMode
    const effectRan = useRef(false);
    useEffect(() => {
        if (!effectRan.current) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {code
            })
            .then(res => {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
                window.history.pushState({}, null, "/");
            }).catch(() => {
                window.location = AUTH_URL;
            })
        } return () => effectRan.current = true;
    }, [code]);

    useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
        axios.post('http://localhost:3001/refresh', {refreshToken
        })
    .then(res => {
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
    //     window.history.pushState({}, null, "/");
    }).catch(() => {
        window.location = "/"
    })
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
       
    },[refreshToken, expiresIn])
    return accessToken;
}