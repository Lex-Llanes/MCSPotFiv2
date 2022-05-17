// import { React, useState, useEffect } from 'react'
// import SpotifyWebApi from 'spotify-web-api-node'
// /******************************************************************************************************/
// //Component Imports//
// import useAuth from './useAuth'
// import Dashboard from './dashboard'
// import BlogForm from './blogcomponents/blogform'
// /******************************************************************************************************/


// /**IMPORT THIS TO COMPONENTS THAT NEEDS TO CALL THE API - creates a new function called spotifyApi**/
// const spotifyApi = new SpotifyWebApi({
//   clientId: "604559bb119846c1a33dc80992730fce",
// })


// const BlogPage = ({ code }) => {

//     /*------------------------------------------------------------------------------------------------------------------
//     Take the code we passed into this component and sends it to our useAuth-component hook we made, which returns an accessToken to this component - it then triggers the useEffect down below and passes the accessToken to the spotifyApi-wrapper we are using
//     ------------------------------------------------------------------------------------------------------------------*/
//     const accessToken = useAuth(code)  //
//     //*********************************//
//     /*------------------------------------------------------------------------------------------------------------------
//     Triggers on component mount - Check if there is an accessToken, if there is, then pass the accessToken to spotifyApi (useEffect triggers  whenever accessToken gets new data)
//     ------------------------------------------------------------------------------------------------------------------*/
//     useEffect(() => {                           //
//         if(!accessToken) return                 //
//         spotifyApi.setAccessToken(accessToken)  //
//     }, [accessToken])                           //
//     //******************************************//

//     // useEffect(() => {
//     //   spotifyApi.getMe()
//     //   .then(function(data) {
//     //     console.log('Some information about the authenticated user', data);
//     //   }, function(err) {
//     //     console.log('Something went wrong!', err);
//     //   });
//     // },[])




//   return (
//     /**!!MAKE THIS THE CONTAINER BOX!! - settings for the inners will be floting left**/
//     <div className="blogpage">

//       {/* left side of thhe page */}
//       <div className="dashboard">
//         <Dashboard code={code} accessToken={accessToken} spotifyApi={spotifyApi}/>
//       </div>

//       {/* right side of the page */}
//       <div className="blogform">
//         <BlogForm/>
//       </div>

//     </div>
//   )
// }


// export default BlogPage;