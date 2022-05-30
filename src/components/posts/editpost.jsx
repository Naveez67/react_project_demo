import React,{useState,useEffect,useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import {useNavigate,useParams} from 'react-router-dom';
import { Context } from '../../context'
function EditPost() {
    let navigate=useNavigate()
    const param=useParams()
    const {loginedUser,posts,setPosts}=useContext(Context)
    const [title,setTitle]=useState("naveez")
    const [body,setBody]=useState("naveez")
    const [postId,setPostId]=useState(param.postid)
    const [index,setIndex]=useState()

    const handlesubmit=(e)=>{
        e.preventDefault();
        let arr=[...posts]
        arr[index]={
            userId:loginedUser[0].id,
            id:postId,
            title,
            body

        }
        setPosts(arr)
        navigate("/posts")
    }

    const getpost=()=>{
     const indexOfObject = posts.findIndex((object) => {
            return object.id == param.postid;
        });
        
     setTitle(posts[indexOfObject].title)
     setBody(posts[indexOfObject].body)
     setPostId(posts[indexOfObject].id)
     setIndex(indexOfObject)
    }

    useEffect(getpost,[])

    return (
        <>
        <Form className='form' onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Title</Form.Label>
                <Form.Control  required type="text" placeholder="Enter title" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>Description </Form.Label>
                <Form.Control required as="textarea" disabled={false} placeholder="Description" value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Update Post
            </Button>
        </Form>
        </>
    );
}

export default EditPost;