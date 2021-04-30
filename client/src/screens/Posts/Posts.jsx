import React, { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { usePostsStore } from "../../stores/postsStore";
import { useCurrentUserStore } from "../../stores/currentUserStore";

import "./Posts.css";

const Posts = (props) => {
  const { posts, togglePostLiked } = usePostsStore();
  const { currentUser } = useCurrentUserStore();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    setMyPosts(posts.filter((post) => post.user_id === currentUser.id));
  }, [posts, currentUser]);

  const handleLikeClicked = (post) => {
    togglePostLiked(post);
  };

  return (
    <div className="posts">
      {(props.isMyPosts ? myPosts : posts).map((post) => (
        <div className="post-card" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img className="thumbnail" src={post.img_url} alt={post.content} />
            <p className="username">{post.user.username}</p>
          </Link>
          <div className="post-text">
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
            {post.likesCount}
            <br />
            comments: {post.commentsCount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
