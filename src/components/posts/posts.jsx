import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Context } from '../../context';
import PostCard from './postcard';

function Posts() {
const navigate=useNavigate()
const {loginedUser,posts}=useContext(Context)
console.log(posts)
const handleclick=()=>{
   navigate("/newpost")
}

    return (
        <div>
            {loginedUser.length>0?<>
                <div className='newpostbtn'>
            <Button variant="primary" onClick={handleclick} >
                New Post
            </Button>
            </div>
            </>:<></>}
            
            {posts.length>0?<>
            {posts.map((post,index)=>{
                return <PostCard key={index} post={post}/>
            })}
            </>:<>
            <h1>No posts are avialable</h1>
            </>}
            
        </div>
    );
}

export default Posts;