import './App.css';
import { useState, useEffect, useRef } from 'react'

function App() {

  const [posts, setPosts] = useState([])
  const form = useRef()

  useEffect(() => {
    const getPosts = async () => {
      try { // attempt this code block
        let req = await fetch('http://localhost:3100/posts')
        let res = await req.json()
        if (req.ok) {
          setPosts(res)
        } else {
          alert('posts could not be loaded')
        }
      } catch (error) { // run this code block if above block fails
        alert(error.message)
        
      }
    }
    getPosts()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    let req = await fetch('http://localhost:3100/login', {
      method: 'POST',
      body: data
    })
      let res = await req.json()
      if (req.ok) {
        console.log('User', res)
        alert('You have logged in')
      } else {
        alert('Invalid email/password')
      }
  }

  return (
    <div className="App">
     <h2>News Feed</h2>
     {
      posts.map((post) => {
        return(
          <div key={post.id}>
            <h4> {post.title}</h4>
            <p>{post.content}</p>
          </div>
        )
      })
     }
     <hr />
     <h2>Log in</h2>
     <form onSubmit={handleSubmit} ref={form}>
      <input name="email" type="email" placeholder="Email" /> <br />
        <input name="password" type="password" placeholder="password" /> <br />
      <input type="submit"/>
     </form>
    </div>
  );
}

export default App;
