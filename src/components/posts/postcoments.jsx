import React, { useState, useEffect,useContext } from "react";
// import { Alert } from "react-bootstrap";
import { Context } from "../../context";
import Comments from "./comments";

function PostComents({ postid }) {

    const {loginedUser} = useContext(Context);
    const url =
        "https://jsonplaceholder.typicode.com/posts/" + postid + "/comments";
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, [url]);

    const handleAdd = () => {
        let newArr = [...comments];
        newArr.push({
            postId: postid,
            id: newArr.length+1,
            name:loginedUser[0].name,
            email: loginedUser[0].email,
            body: comment,
        });
        setComments(newArr);
        setComment("")
    };
    return (
        <div>
            {loginedUser.length>0?<>
                <textarea
                className="comment_text_area"
                value={comment}
                onChange={(e) => {
                    setComment(e.target.value);
                }}
            ></textarea>
             <button onClick={handleAdd}>Post comment</button>
            </>:<></>}
            
           
            {comments.length > 0 ? (
                <>
                    {comments.map((com, index) => {
                        return (
                            <Comments
                                key={index}
                                com={com}
                                setcomments={setComments}
                                comments={comments}
                            />
                        );
                    })}
                </>
            ) : (
                <>
                    <h1>No comments are avialable</h1>
                </>
            )}
        </div>
    );
}

export default PostComents;
