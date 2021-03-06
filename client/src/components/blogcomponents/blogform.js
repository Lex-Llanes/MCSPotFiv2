import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";



/**USE CSS BOX-SHADOW FOR EACH FIELD?**/


const BlogForm = ({ blogArtist, blogTrack }) => {
    const [blogId, setBlogId] = useState(0)
    const [userName, setUsername] = useState("")
    const [blogPrivacy, setBlogPrivacy] = useState("")
    const [userMood, setUserMood] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [artistName, setArtistName] = useState(""); //HIDE THIS - doesnt have to be filled out by user
    const [trackName, setTrackName] = useState(""); //HIDE THIS - doesnt have to be filled out by user


    /** Handles blog submission **/
    const handleSubmitBlog = async (event) => {
        event.preventDefault();
        const randomId = Math.floor(Math.random() * 1000000) + Math.floor(Math.random() * 10000)
        setBlogId(randomId)
        console.log(blogId)
        try {
            const body = { blogId, blogPrivacy, userMood, blogTitle, blogContent, userName, artistName, trackName }
            console.log(body)
            // const response = await fetch("http://localhost:3001/userblog"
            const response = await fetch("/userblog",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }
    

    /**HANDLES UPDATING artistName and trackName - triggers on changes to datas from either variables**/
    useEffect(() => {
        setArtistName(blogArtist)
        console.log("This is the blogArtist: " + blogArtist)
        setTrackName(blogTrack)
        console.log("This is the blogTrack: " + blogTrack)
        
    },[blogArtist, blogTrack])
    

    /** Handles track Search **/
    /** OUT OF COMMISSION - MIGHT DELETE**/
    const handleTrackSearch = async (event) => {
        event.preventDefault()
        try {
            const body = { artistName, trackName }
            // const response = await fetch(`http://localhost:3001/track`
            const response = await fetch(`/track`, 
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error.message)
        }
    }



    return (
        <div className="blogform">
            
            {/* BLOG FORM */}
            <form onSubmit={handleSubmitBlog}>
                

                <label for="blogprivacy">Blog Privacy</label>
                <br/>
                <select 
                className="blogforminputs"
                    id="blogprivacy"
                    name="blogprivacy"
                    value={blogPrivacy}
                    onChange={(event) => setBlogPrivacy(event.target.value)}
                >
                    {/* <option value="none">Please Select Privacy</option> */}
                    <option value="publics">Public</option>
                    <option value="private">Private</option>
                </select>
                <br/>
                <br/>

                {/* Option for blog's mood which will determine the blog search parameter */}
                <label for="usermood">Your Mood</label>
                <br/>
                <input
                className="blogforminputs"
                    id="usermood"
                    name="usermood"
                    placeholder="Your mood..."
                    value={userMood}
                    onChange={(event) => setUserMood(event.target.value)}
                />
                <br/>
                <br/>


                <label for="blogtitle">Blog Title</label>
                <br/>
                <input 
                className="blogforminputs"
                    name="blogtitle"
                    id="blogtitle"
                    type="text"
                    placeholder="Blog title..."
                    value={blogTitle}
                    onChange={(event) => setBlogTitle(event.target.value)}
                />
                <br/>
                <br/>


                <label for="blogcontent">Blog Content</label>
                <br/>
                <textarea 
                    className="blogforminputs"
                    id="blogcontent"
                    type="textarea"
                    placeholder="Blog content..."
                    cols="50"
                    rows="20"
                    value={blogContent}
                    onChange={(event) => setBlogContent(event.target.value)}
                />
                <br/>
                <br/>

                <input 
                    className="blogformbutton"
                    type="submit"
                    value="Submit"
                />
            </form>
            
        </div>
    )



}


export default BlogForm;