import React, { useState, useEffect } from "react";
import ErrorMessage from "./common/ErrorMessage";

export default function PostDetail({ currentPost }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(undefined);
  console.log(currentPost);
  // get comments
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}/comments`)
      .then(response => response.json())
      .then(setComments)
      .then(console.log(comments))
      .catch(setError);
  }, [currentPost]);

  // display each comment
  const commentList = comments.map(comment => <li>{comment.body}</li>);

  return error ? <ErrorMessage error={error} /> : <ul>{commentList}</ul>;
}
