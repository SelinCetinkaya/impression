import React, { useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import { postsStore } from "../../stores/postsStore";

const Posts = (props) => {
  const { posts, fetchPosts, togglePostLiked } = postsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleLikeClicked = (post) => {
    togglePostLiked(post);
  };

  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img src={post.img_url} alt={post.content} />
          <p>{post.user.username}</p>
          {post.like.is_liked ? (
            <HeartFilled
              style={{ color: "red" }}
              onClick={() => {
                handleLikeClicked(post);
              }}
            />
          ) : (
            <HeartOutlined
              onClick={() => {
                handleLikeClicked(post);
              }}
            />
          )}
          likes: {post.likesCount}
          comments: {post.commentsCount}
        </div>
      ))}
    </div>
  );
};

export default Posts;
