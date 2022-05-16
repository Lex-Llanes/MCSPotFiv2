/*
INSTALLS
npm instasll bootstrap
npm install react-bootstrap
npm install spotify-web-api-node --save
npm i react-spotify-web-playback
*/


import './App.css';
import { React, useState, useEffect } from "react"
import { Nav, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { isTrivialHref } from '@restart/ui/esm/Anchor';
/******************************************************************************************************/
//component imports//
import Login from './components/login';
import Dashboard from './components/dashboard';
import NavigationBar from './components/navbar';
import CarouselComp from './components/carouselcomponents/carousel';
import BlogForm from './components/blogcomponents/blogform';
/******************************************************************************************************/

//IGNORE
//const code = new URLSearchParams(window.location.search).get("code")

function App() {

  const [code, setCode] = useState("")

  useEffect(()=>{
    const newCode = new URLSearchParams(window.location.search).get("code")
    setCode(newCode)
  },[code])


  const handleLogOut = (event) => {
    event.preventDefault()
    setCode(null)
    window.localStorage.clear()
    window.location.href="https://accounts.spotify.com/en/logout"
    console.log(code)
  }


  return (
    <div>
      <div className="navbar">
        <NavigationBar/>
      </div>
      
      <div className="contentbody">
        

      <Navbar bg="success" variant="dark" fixed="top">
        <Navbar.Brand>
          Navbar
        </Navbar.Brand>

        {code ? <button onClick={handleLogOut}>Log Out</button> : <Login />}

        <Nav>


        </Nav>





      </Navbar>



      {/*!! MAYBE MAKE LINKS - Make Carousel-comp be Main Page and Dashboard-comp be the blog form page !!*/}
      {code ? <Dashboard code={code} /> : <CarouselComp/>}
      







        {/* {code ? <Dashboard code={code} /> : <Login />} */}
      </div>
    </div>
  )

}

export default App