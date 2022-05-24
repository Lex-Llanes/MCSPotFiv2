

<p align="center">
    <h1 align="center"><b>M.C. Spot Fi</b></h1>
</p>

## ABOUT

Inspired by techtonica's medidation routine (where there are websites you can visit and search for medidation based on mood or feelings). I wanted to make a similiar experience where users can create blogs but tie in a song in to the mood of their blog. So that way other users can search for blogs and hopefully find music that that fits their current mood.

</br>

___

</br>

## IMPORTANT! - Only Spotify premium users can search and play songs

## FEATURES
As a user you will be able to
- Create blogs
- Search for songs
- Play songs
- Lyrics will be automatic when playing a song
- Search for other blogs

</br>

Planned Features
- Find a way for non premium users to search for song metadata
- Edit own blogs
- Delete own blogs
- Comment sections in blogs



</br>

___

</br>







## TECHNOLOGIES USED

- PostgreSQL
- Express
- React
- NodeJS
- Spotify API (which includes using 0Auth2.0)

</br>

___

</br>

## INSTALLTION
###  PRE-REQUISITES

- PostgreSQL installed
- Node - version 
- Spotify Account (free)

</br>

### Cloning The Github Project

1. Clone the repo:
```
git clone https://github.com/Lex-Llanes/MCSPotFiv2.git "folderNameYouWant"
```

2. Install node modules in both client and server folders, you can do these by using these terminal commands:
```
//change directory into the client folder and install node
cd client
npm install

//change directory in the server folder and install node
cd ../server
npm install

//while in the server folder create a .env file
touch .env

//change back to the project root folder
//cd ..
```

3. Remove .git from the project folder:
```
rm -rf .git
```
4. Go to [Spotify API Dashboard](https://developer.spotify.com/dashboard/applications)

5. Create an application - which will show up in the same page for you to select.

6. Select your application and click EDIT SETTINGS button on the top right of the page, in here you will add http://localhost:3000 as your Redirect URI (or change the port 3000 to whatever port you react app will use).

7. Copy your Client ID from the spotify dashboard into your .env and set it to .
```
CLIENT_ID="client id here"
```

8. Next copy Client Secret from spotify dashoboard into your .env file where the variable is .
```
CLIENT_SECRET="client secret here"
```

9. In your .env file create a variable called and set it to the same setting you set it to in the Spotify Dashboard settings.
```
REDIRECT_URI="redirect uri setting in spotify dashboard"
```

10. Now you can run the project by running both the server and client
```
//start the server
cd server
npm start

//switch to the client folder and start the client
cd ../client
npm start
```


</br>
