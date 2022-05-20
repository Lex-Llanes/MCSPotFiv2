import { React, useState, useEffect } from 'react'
import { Accordion, Button, Form } from "react-bootstrap"
import axios from 'axios';

const BlogSearch = ({ mood, setMood }) => {

  const [blogList, setBlogList] = useState([]);
  // const [mood, setMood] = useState("happy");

  async function getBlogs (mood, event) {
    try {
      // const response = await fetch(`http://localhost:3001/blogsearch/?mood=${mood}`)
      const response = await fetch(`/blogsearch/?mood=${mood}`)
      const blogs = await response.json()

      setBlogList(blogs)
    } catch (error) {
      console.error(error.message)
    }
  }


  useEffect(()=>{
    getBlogs(mood);
    console.log(blogList)
  },[mood])

  return (
    <div className='blogsearch'>
      {blogList.map((list) => (
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

export default BlogSearch;