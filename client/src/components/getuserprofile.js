import React from 'react'
import SpotifyWebApi from "spotify-web-api-node"


const GetUserProfile = (props) => {


const handleUserProfile = async (event) => {
    props.spotifyApi.getMe()
  .then(function(data) {
    console.log('Some information about the authenticated user', data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

  return (
    <div>
        <button onClick={handleUserProfile}>
        Get User Profile
        </button>
    </div>
  )
}


export default GetUserProfile;