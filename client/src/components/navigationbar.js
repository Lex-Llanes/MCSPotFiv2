import React from 'react'
import { Button, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

/******************************************************************************************************/
//Component Imports//
import Dashboard from './dashboard'
/******************************************************************************************************/




const NavigationBar = ( {code, setCode} ) => {

    /** HANDLES USER LOGOUT -  **/
    const handleLogOut = (event) => {
        event.preventDefault()
        setCode(null)
        window.localStorage.clear()
        /**The spotify login screen opens in a new window when the user logouts of of my app**/
        window.open("https://accounts.spotify.com/en/logout")
        //window.location.href="https://accounts.spotify.com/en/logout"
        console.log(code)
      }



    return (
        <div>


        <BrowserRouter>

            <Navbar className="navigationbar" variant="dark" bg="info" fixed="top">
                <Navbar.Brand>
                    <div className="navbrand">
                        M.C. Spotfi
                    </div>
                </Navbar.Brand>
                <Button onClick={handleLogOut}>Log Out</Button>
                {/* <Nav.Link href='/carousel'>Carousel</Nav.Link> */}
                {/* <Nav.Link href='/blogsearch'>Blog Search</Nav.Link> */}
                <Nav.Link></Nav.Link>
                <Nav.Link></Nav.Link>
            </Navbar>


            <Routes>
                <Route exact path= "/" />
                <Route path="/dashboard" element={<Dashboard code={code} />} />
                {/* <Route path="/blogsearch" element={<BlogSearch />}/> */}
                <Route />
                <Route />
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>

        </div>
    )
}


export default NavigationBar;