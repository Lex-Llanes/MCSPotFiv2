import { React, useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import axios from 'axios';

const BlogSearch = () => {

  const [blogList, setBlogList] = useState([]);
  const [mood, setMood] = useState("");

  const handleMoodForm = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:3001/blogsearch/?mood=${mood}`)
      const blogList = await response.json()

      console.log(blogList)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/blogsearch/?mood=${mood}`)
      .then(res => {
        setBlogList(res)
        console.log(blogList)
      })
  },[mood])


  return (

    <Form onSubmit={handleMoodForm}>
      <Form.Group className="moodsearch" controlId="formMoodSearch">
        <Form.Label>
          MOOD
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="What mood are you looking for..."
          value={mood}
          onChange={(event) => setMood(event.target.value)}
        />
        <Form.Text>
          Let the music set your mood
        </Form.Text>
      </Form.Group>

      <Button type="submit" onClick={handleMoodForm} variant="primary">
        Submit
      </Button>
    </Form>
    
  )
}

export default BlogSearch;