import React from 'react'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

/******************************************************************************************************/
//Component Imports//
import Dashboard from './dashboard'
import Login from './login'
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



            <Navbar bg="success" variant="dark" fixed="top">
                <Navbar.Brand>
                    <div className="navbrand">
                        M.C. Spotfi
                    </div>
                </Navbar.Brand>
                <button onClick={handleLogOut}>Log Out</button>
                <Nav variant="tabs">


                </Nav>

            </Navbar>

        </div>
    )
}


export default NavigationBar;