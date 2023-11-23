

function SearchResult({track, chooseTrack}) {
    function handleClick(){
        console.log(track.uri)
        chooseTrack(track);
    }

    return (
        <div onClick={handleClick}>
            <img src={track.albumUrlSmall} style={{height: "64px", width: "64px"}}/>
                <text> <strong>{track.title}</strong></text>
                <text> {track.artist}</text>
                {
                    track.preview ? <audio src={track.preview} controls/> :
                    <div> Song preview not available</div>
                }

        </div>
    )
}
export default SearchResult;