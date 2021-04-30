import React, { useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { usePostsStore } from "../../stores/postsStore";
import "./Posts.css";

const Posts = (props) => {
  const { posts, togglePostLiked } = usePostsStore();

  const handleLikeClicked = (post) => {
    togglePostLiked(post);
  };

  // if (!post.id) return <div></div>;

  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img className="thumbnail" src={post.img_url} alt={post.content} />
            <p>{post.user.username}</p>
          </Link>
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
      ))}
    </div>
  );
};

export default Posts;
