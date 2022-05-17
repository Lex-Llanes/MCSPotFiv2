import { useState, useEffect } from "react"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
/******************************************************************************************************/
//Component Imports//
import useAuth from "./useAuth"
import Player from "./player"
import GetUserProfile from "./getuserprofile"
import TrackSearchResult from "./tracksearch"
import Logout from "./logout"
import BlogForm from "./blogcomponents/blogform"
/******************************************************************************************************/



/**IMPORT THIS TO ANY COMPONENTS THAT NEEDS TO CALL THE API**/
const spotifyApi = new SpotifyWebApi({
    clientId: "604559bb119846c1a33dc80992730fce",
})



/** The prop { code } is coming from App.js **/
const Dashboard = ({ code }) => {
    /*------------------------------------------------------------------------------------------------------------------
    Take the code we passed into this component and sends it to our useAuth-component hook we made, which returns an accessToken to this component - it then triggers the useEffect down below and passes the accessToken to the spotifyApi-wrapper we are using
    ------------------------------------------------------------------------------------------------------------------*/
    const accessToken = useAuth(code)  //
    //*********************************//
    /*------------------------------------------------------------------------------------------------------------------
    Triggers on component mount - Check if there is an accessToken, if there is, then pass the accessToken to spotifyApi (useEffect triggers  whenever accessToken gets new data)
    ------------------------------------------------------------------------------------------------------------------*/
    useEffect(() => {                           //
        if(!accessToken) return                 //
        spotifyApi.setAccessToken(accessToken)  //
    }, [accessToken])                           //
    //******************************************//

    /**Create a state for selected artist and track part of blog**/
    const [blogArtist, setBlogArtist] = useState()
    const [blogTrack, setBlogTrack] = useState()
    

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track) {
        console.log(track)
        /**Set state of blogTrack - variable**/
        setBlogArtist(track.artist)
        setBlogTrack(track.title)

        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }



    /** HANDLES LYRIC SEARCHES **/
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



    /** HANDLES TRACK SEARCH **/
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

            {/* LEFT SIDE OF PAGE */}
            <div className="dashboard-left">
                {/* <Logout code={code}/> */}
                <GetUserProfile spotifyApi={spotifyApi}/>
                <Form.Control
                    type="search"
                    placeholder="Search Songs/Artists"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {/* Track Search - component */}
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

                {/* Player - component */}
                <div>
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
                </div>

            </div>

            {/* RIGHT SIDE OF PAGE */}
            <div className="dashboard-right">
                <BlogForm blogArtist={blogArtist} blogTrack={blogTrack} />
            </div>

        </div>
    )
}



export default Dashboard;