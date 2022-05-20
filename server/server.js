/*
INSTALLS
npm install node-fetch
npm install spotify-web-api-node
npm install lyrics-finder
*/

/**********************************************************************************************************************/
const path = require('path');
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
/**********************************************************************************************************************/

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
const PORT = process.env.PORT || 3001;



app.use(cors());
app.use(express.json());
app.use(express.static(REACT_BUILD_DIR));
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



/**********************************************************************************************************************/
/**ROUTE-REFRESH TOKEN**/
app.post("/refresh", (req, res) => {
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
  
/**ROUTE-LOGIN**/
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

/**ROUTE-LYRICS SEARCH**/
app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
  res.json({ lyrics })
})
/**********************************************************************************************************************/


///*******************************************************************************************************************/
//Not working needs more work - for logging out
/**OUT OF COMMISSION - found a working way in the frontend (navigationbar.js component)**/
app.get("/logout", async (req, res) => {
    const response = await fetch("https://accounts.spotify.com/en/logout")
})
///********************************************************************************************************************/


/**ROUTE-CREATE A NEW BLOG POST**/
app.post('/userblog', async (req, res) => {
  try {
      const { blogPrivacy } = req.body;
      const { userMood } = req.body;
      const { blogTitle } = req.body;
      const { blogContent } = req.body;
      const { userName } = req.body;
      const { artistName } = req.body;
      const { trackName } = req.body;

      const newblog = await db.query(
          'INSERT INTO blogs(blog_title, blog_mood, blog_content, blog_privacy, username, artist, track) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', [blogTitle, userMood, blogContent, blogPrivacy, userName, artistName, trackName]
      )
      console.log(newblog)
  } catch (error) {
      console.error(error.message)
  }
})


/**ROUTE-CREATE A NEW BLOG POST**/
app.get('/blogsearch', async (req, res) => {
  try {
    const { mood } = req.query;

    const blogs = await db.query(
      "SELECT * FROM blogs WHERE blog_mood ILIKE $1", [`%${mood}%`]
      );
    res.json(blogs.rows)
  } catch (error) {
    console.error(error.message)
  }
})



// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});