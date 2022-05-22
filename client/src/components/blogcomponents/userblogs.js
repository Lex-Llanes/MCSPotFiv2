import { React, useState, useEffect } from 'react'
import { Accordion } from 'react-bootstrap'

const UserBlogs = () => {

    const [currentUser, setCurrentUser] = useState("Adam Sandler")
    const [userBlogs, setUserBlogs] = useState([])

    async function getBlogs (currentUser){
        try {
            const response = await fetch(`/userblogs/?userName=${currentUser}`);
            const blogs = await response.json();

            setUserBlogs(blogs)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getBlogs(currentUser)
        console.log(userBlogs)
    },[])

  return (
    <div className='userblogs'>
      {userBlogs.map((list) => (
        <Accordion className="blogaccordion" defaultActiveKey={"0"} alwaysOpen flush>
          <Accordion.Item eventKey={list}>
            <Accordion.Header><b>Blog Title:</b> - {list.blog_title}</Accordion.Header>
              <Accordion.Body><b>Suggested Song:</b> {list.artist} - {list.track}</Accordion.Body>
              <Accordion.Body><i>{list.blog_content}</i></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  )
}

export default UserBlogs;