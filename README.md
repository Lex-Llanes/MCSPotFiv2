

<p align="center">
    <h1 align="center"><b>M.C. Spot Fi</b></h1>
</p>

## ABOUT

Inspired by techtonica's medidation routine (where there are websites you can visit and search for medidation based on mood or feelings). I wanted to make a similiar experience where users can create blogs but tie in a song in to the mood of their blog. So that way other users can search for blogs and hopefully find music that that fits their current mood.


## TECHNOLOGIES USED

- PostgreSQL
- Express
- React
- NodeJS
- Spotify API (which includes using 0Auth2.0)


## INSTALLTION

###  PRE-REQUISITES

<!-- Explain to use nvm and what version to use -->
- Node - version 
<!-- Maybe explain the steps to make one and what to do with client-id and secret-id -->
<!-- Maybe provide the link -->
- Spotify - create a Spotify App Account to link to the cloned app 

```
nvm use
```


<!-- USE QUICKTIME PLAYER TO RECORD -->


## 



</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>

### Your First Express and React App
Create full stack apps with React and Express. Run your client, server and do a restart of your dump db to have a full-stack project working in minutes

# Step by Step instructions - To use this project as your start point
### For create the whole project
1. Go to your source directory in your terminal and run the command `git clone git@github.com:Lex-Llanes/MCSPotFiv2.git NAMENEWDIRECTORY`
[!You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To restore the DB dump file that the project already contain, just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask you for your password. 
3. To clean your folder from the owner git, run the command `rm -rf .git`
4. Run the command `git init` to start your git repository
5. Go to the server folder in the project (`cd server`) and run the command `npm install`
6. Inside your server folder, create an .env file with `touch .env`
7. Inside your server folder, open the file `.env.example` and copy the file there. 
8. Inside your .env file, paste the string from .env.example and change the variables with the values from the project. For this template, don't change the name of your db.
9. Inside your server file: run the command `psql -U postgres -f db.sql` to restore the DB from the file db.sql
10. Go to the cliente folder (`cd .. and cd client`) and run the command `npm start`
11. Both server should run now with `npm start`
12. Go to localhost:3000 and you should see something like this
[!You will something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%208.58.13%20PM.png?raw=true)
