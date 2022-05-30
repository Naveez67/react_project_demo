// import logo from './logo.svg';
import "./App.css";
import Header from "./pages/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Login from "./pages/login";
import Posts from "./components/posts/posts";
import ShowPost from "./components/posts/showpost";
import { useState, useEffect } from 'react'
import { Context } from "./context.js";
import Users from "./components/users/users";
import NotFound from "./pages/notfound";
import NewPost from "./components/posts/newpost";
import EditPost from "./components/posts/editpost";
function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "naveez",
      email: "naveez@gmail.com",
      password: "abc123"
    }
  ])
  const [loginedUser, setLoginedUser] = useState([])
  const url = "https://jsonplaceholder.typicode.com/posts"
  const [posts, setPosts] = useState([])
  const getposts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }
  useEffect(() => {
    getposts()
  }, [url]
  )
  return (
    <BrowserRouter>
      <Header loginedUser={loginedUser} setLoginedUser={setLoginedUser} />
      <Context.Provider value={{ users, setUsers, loginedUser, setLoginedUser, posts, setPosts }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/post/:postid" element={<ShowPost />} />
          <Route path="/post/edit/:postid" element={<EditPost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}


export default App;
