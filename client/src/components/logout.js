import { React, useState, useEffect } from 'react'



const Logout = (props) => {

    const [code, setCode] = useState(props.code)

    const loguserout = () => {
        setCode(null)
    }

    return (


        <div>

            {/* <button onCLick={event => window.location.href="https://accounts.spotify.com/en/logout"}>
                Logout
            </button>
 */}
            <link></link>
        </div>




    )
}


export default Logout;