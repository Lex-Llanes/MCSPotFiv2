import React from "react"
import { Container, Button } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=604559bb119846c1a33dc80992730fce&response_type=code&redirect_uri=https://mcspotfi.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
      <Button className="loginbutton" variant="info" size="lg" href={AUTH_URL} >
        Login With Spotify
      </Button>
  )
}
