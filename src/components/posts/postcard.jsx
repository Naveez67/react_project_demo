import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from '../../context'

function PostCard({ post}) {
    const {loginedUser,posts,setPosts} = useContext(Context);
    let navigate = useNavigate();

    const handleclick = () => {
        navigate(`/post/${post.id}`);
    };

    const handledelte = () => {
        const indexOfObject = posts.findIndex((object) => {
            return object.id === post.id;
        });
        console.log(indexOfObject)
        let newArr = [...posts];
        newArr.splice(indexOfObject, 1);
        setPosts(newArr);
    };

    const handleedit = () => {
       navigate(`/post/edit/${post.id}`)
    };

    return (
        <Card style={{ width: "500px" }} className="card">
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button onClick={handleclick}>Read more</Button>
                {loginedUser.length>0 && post.userId === loginedUser[0].id ? <>
                    <Button onClick={handledelte}>Delete</Button>
                    <Button onClick={handleedit}>Edit</Button>
                </> : <></>}

            </Card.Body>
        </Card>
    );
}

export default PostCard;
