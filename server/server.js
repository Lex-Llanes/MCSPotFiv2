/*
INSTALLS
npm install node-fetch
npm install spotify-web-api-node
npm install lyrics-finder
*/

const express = require('express');
const fetch = require('node-fetch')
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 
/**********************************************************************************************************************/const bodyParser = require("body-parser")
const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")
/**********************************************************************************************************************/


const app = express();
const PORT = 3001;



app.use(cors());
app.use(express.json());
/**********************************************************************************************************************/
//app.use(bodyParser.json()) - this is technically app.use(express.json()) but you can use whichever
/*
Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middleware that came with it. When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead. The syntax then changed from app.use(express.json()) to app.use(bodyParser.json()) after installing the bodyParser module.

bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before. That means you don't have to use bodyParser.json() anymore if you are on the latest release. You can use express.json() instead.
*/
app.use(bodyParser.urlencoded({ extended: true }))
/**********************************************************************************************************************/



//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});



/**********************************************************************************************************************/app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    })
  
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })
  
app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })
  

  
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
    })
})
  


app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
  res.json({ lyrics })
})
/**********************************************************************************************************************/


///*******************************************************************************************************************/
//Not working needs more work - for logging out
app.get("/logout", async (req, res) => {
    const response = await fetch("https://accounts.spotify.com/en/logout")
})
///********************************************************************************************************************/


// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});