import React, { useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { postsStore } from "../../stores/postsStore";
import "./Posts.css";

const Posts = (props) => {
  const { posts, togglePostLiked } = postsStore();

  const handleLikeClicked = (post) => {
    togglePostLiked(post);
  };

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <div className="post-card" key={post.id}>
            <img className="thumbnail" src={post.img_url} alt={post.content} />
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
            <br />
            comments: {post.commentsCount}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
