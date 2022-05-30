import React,{useState,useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { Context } from '../../context'
function NewPost() {
    let navigate=useNavigate()
    const {logineduser,posts,setposts}=useContext(Context)
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault();
        let arr=[...posts]
        arr.push({
            userId:logineduser[0].id,
            id:posts.length+1,
            title,
            body

        })
        setposts(arr)
        navigate("/posts")
    }
    return (
        <>
        <Form className='form' onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Title</Form.Label>
                <Form.Control  required type="text" placeholder="Enter title" value={title} onChange={(e) => {
                    settitle(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>Description </Form.Label>
                <Form.Control required as="textarea" disabled={false} placeholder="Description" value={body} onChange={(e) => {
                    setbody(e.target.value)
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Post
            </Button>
        </Form>
        </>
    );
}

export default NewPost;