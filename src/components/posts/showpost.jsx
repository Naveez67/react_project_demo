import React from "react";
import {  useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import PostComents from "./postcoments";

function ShowPost() {
  
  const param=useParams()
  const { data, isLoading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+param.postid);
  
 return (
    <div className="post">
      {!isLoading && 
      <>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <p>Comments</p>
        <PostComents postid={data?.id}/>
      </>
      }
    </div>
  );
}

export default ShowPost;
