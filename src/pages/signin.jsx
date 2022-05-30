import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from "../context";

function SignIn() {
    const {users, setUsers} = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        let newarr = [...users]
        newarr.push({
            id:users.length+1,
            name,
            email,
            password
        })
        setUsers(newarr);
        console.log(users)
        navigate("/users")
    }
   
    return (
        <Form className='form' onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control  required type="text" placeholder="Enter name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Sign In
            </Button>
        </Form>
    );
}

export default SignIn;