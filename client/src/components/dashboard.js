import { useState, useEffect } from "react"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
/******************************************************************************************************/
//component imports//
import useAuth from "./useAuth"
import Player from "./player"
import GetUserProfile from "./getuserprofile"
import TrackSearchResult from "./tracksearch"
import Logout from "./logout"
/******************************************************************************************************/



/**IMPORT THIS TO ANY COMPONENTS THAT NEEDS TO CALL THE API **/
const spotifyApi = new SpotifyWebApi({
    clientId: "604559bb119846c1a33dc80992730fce",
})



    /******************************************************************************************************
    The prop { code } is coming from App.js
    *******************************************************************************************************/
const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }


    /** Handles lyrics searches **/
    useEffect(() => {
        if (!playingTrack) return

        axios
        .get("http://localhost:3001/lyrics", {
            params: {
            track: playingTrack.title,
            artist: playingTrack.artist,
            },
        })
        .then(res => {
            setLyrics(res.data.lyrics)
        })
    }, [playingTrack])


    /*------------------------------------------------------------------------------------------------------------------
    Check if there is an accessToken, if there is, then pass the accessToken to spotifyApi (useEffect triggers  whenever accessToken gets new data)
    ------------------------------------------------------------------------------------------------------------------*/
    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])



    /**HANDLES TRACK SEARCH**/
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            console.log(res.body)
        if (cancel) return
        setSearchResults(
            res.body.tracks.items.map(track => {
            const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
                },
                track.album.images[0]
            )

            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
            }
            })
        )
        })

        return () => (cancel = true)
    }, [search, accessToken])






    return (
        <div>

            <Logout code={code}/>
            <GetUserProfile spotifyApi={spotifyApi}/>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />



            
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                <TrackSearchResult
                    track={track}
                    key={track.uri}
                    chooseTrack={chooseTrack}
                />
                ))}
                {searchResults.length === 0 && (
                <div className="text-center" style={{ whiteSpace: "pre" }}>
                    {lyrics}
                </div>
                )}
            </div>



            <div>
                {/* <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
            </div>



        </div>
    )
}



export default Dashboard;