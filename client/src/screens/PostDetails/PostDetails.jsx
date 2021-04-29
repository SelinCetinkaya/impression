import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postsStore } from "../../stores/postsStore";
import { Button } from "antd";
import "./PostDetails.css";

function PostDetails(props) {
  const { posts, removePost } = postsStore();
  const [post, setPost] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (posts.length) {
      const post = posts.find((post) => post.id === Number(id));
      setPost(post);
    }
  }, [posts, id]);
  console.log(post);

  const handleDeleteClicked = (post) => {
    removePost(post);
    history.push("/posts");
  };

  return (
    <div className="post-details">
      <img className="image-details" src={post.img_url} />
      <div className="text-details">
        <p>{post.user_id}</p>
        <br />
        <p>{post.content}</p>
      </div>
      <Button>Edit</Button>
      <Button
        onClick={() => {
          handleDeleteClicked(post);
        }}
      >
        Test
      </Button>
    </div>
  );
}

export default PostDetails;
