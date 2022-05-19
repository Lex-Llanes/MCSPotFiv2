/*INSTALLS
npm instasll bootstrap
npm install react-bootstrap
npm install spotify-web-api-node --save
npm install react-spotify-web-playback
npm install react-router-dom@6      */

import './App.css';
import { React, useState, useEffect } from "react"
import { Nav, Navbar, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { isTrivialHref } from '@restart/ui/esm/Anchor';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
/******************************************************************************************************/
//Component Imports//
import Login from './components/login';
import Dashboard from './components/dashboard';
import NavigationBar from './components/navigationbar';
import CarouselComp from './components/carouselcomponents/carousel';
import BlogForm from './components/blogcomponents/blogform';
import BlogPage from './components/blogpage';
import BlogSearch from './components/blogcomponents/blogsearch';
/******************************************************************************************************/

//IGNORE
//const code = new URLSearchParams(window.location.search).get("code")

function App() {

  const [code, setCode] = useState("")

  
  useEffect(()=>{
    const newCode = new URLSearchParams(window.location.search).get("code")
    setCode(newCode)
  },[code])


  return (
    <div className="App">

      <div className="contentbody" style={{padding: 0}}>
        {code ? <NavigationBar code={code} setCode={setCode}/> : <div className="d-grid gap-2" ><Login /></div>}
        {code ? <Dashboard code={code} /> :  <CarouselComp/> }
      </div>


      <BrowserRouter>
        <Routes>
            <Route exact path= "/" />
            <Route path="/dashboard" element={<Dashboard code={code} />} />
            <Route path="/blogsearch" element={<BlogSearch />}/>
            <Route />
            <Route />
            <Route />
            <Route />
        </Routes>
      </BrowserRouter>

      <BlogSearch/>

    </div>



  )

}

export default App