import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/posts";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      console.log(posts);
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p>{post.content}</p>
      ))}
    </div>
  );
}

export default Posts;
