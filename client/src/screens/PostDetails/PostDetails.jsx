import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { usePostsStore } from "../../stores/postsStore";
import { Button } from "antd";
import "./PostDetails.css";
import { useCurrentUserStore } from "../../stores/currentUserStore";
import EditModal from "../../components/EditModal/EditModal";

function PostDetails(props) {
  const { posts, removePost } = usePostsStore();
  const [post, setPost] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const { currentUser } = useCurrentUserStore();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

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

  if (!post.id) return <div></div>;

  return (
    <div className="post-details">
      <img className="image-details" src={post.img_url} />
      <div className="text-details">
        <p>{post.user.username}</p>
        <br />
        <p>{post.content}</p>
      </div>
      {post.user.id === currentUser.id && (
        <>
          <Button type="primary" onClick={showModal}>
            Edit
          </Button>
          <EditModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <Button
            onClick={() => {
              handleDeleteClicked(post);
            }}
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
}

export default PostDetails;
