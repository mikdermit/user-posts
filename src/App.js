import React, { useEffect, useState } from "react";
import ErrorMessage from "./common/ErrorMessage";
import LoadingMessage from "./common/LoadingMessage";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [error, setError] = useState(undefined);

  //get posts on page load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => response.json())
      .then(setPosts)
      .catch(setError);
  }, []);

  // display each post
  const postList = posts.map(post => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => setCurrentPost(post.id)}>Show Posts</button>
      {currentPost === post.id && <PostDetail currentPost={currentPost} />}
    </div>
  ));

  // check for error and posts before rendering
  return error ? (
    <ErrorMessage error={error} />
  ) : !posts ? (
    <LoadingMessage />
  ) : (
    <div className="App">
      <div>{postList}</div>
    </div>
  );
}

export default App;
