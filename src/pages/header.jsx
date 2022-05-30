
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({loginedUser,setLoginedUser}) {
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Demo Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 my-lg-0 ms-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>

                            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                            {loginedUser.length > 0 ? <>
                                <Nav.Link onClick={()=>{
                                    setLoginedUser([])
                                }}>Logout</Nav.Link>
                            </> : <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/signin">Sign in</Nav.Link>
                            </>}


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;