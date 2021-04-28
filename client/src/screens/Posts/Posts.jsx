import React, { useEffect } from "react";

import { currentUserStore } from "../../stores/currentUserStore";
import { postsStore } from "../../stores/postsStore";

const Posts = (props) => {
  const { posts, fetchPosts, addPost } = postsStore();
  const { currentUser } = currentUserStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.content}</p>
      ))}
      <button
        onClick={() => {
          addPost({
            content: "fake content",
            img_url: "123",
            user_id: currentUser.id,
          });
        }}
      >
        asdf
      </button>
    </div>
  );
};

export default Posts;
