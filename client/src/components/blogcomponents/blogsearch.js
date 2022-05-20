import { React, useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
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
        <div>{list.blog_title}</div>
      ))}
      <h1>This is the blogsearch</h1>


    </div>
  )
}

export default BlogSearch;