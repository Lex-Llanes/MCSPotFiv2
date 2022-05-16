import React from 'react'
import SpotifyWebApi from "spotify-web-api-node"


const GetUserProfile = (props) => {


const handleLogOut = async (event) => {
    props.spotifyApi.getMe()
  .then(function(data) {
    console.log('Some information about the authenticated user', data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

  return (
    <div>
        <button onClick={handleLogOut}>
        Get User Profile
        </button>
    </div>
  )
}


export default GetUserProfile;