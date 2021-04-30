import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { usePostsStore } from "../../stores/postsStore";
import { Button } from "antd";
import "./PostDetails.css";
import { useCurrentUserStore } from "../../stores/currentUserStore";
import EditModal from "../../components/EditModal/EditModal";
import CommentModal from "../../components/CommentModal/CommentModal";

function PostDetails(props) {
  const { posts, removePost, removeComment } = usePostsStore();
  const [post, setPost] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const { currentUser } = useCurrentUserStore();

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const showCommentModal = () => {
    setIsCommentModalVisible(true);
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

  const deleteComment = ({ post, comment }) => {
    removeComment({ post, comment });
  };

  if (!post.id) return <div></div>;

  return (
    <div className="post-details">
      <img className="image-details" alt={post.content} src={post.img_url} />
      <div className="text-details">
        <p>{post.user.username}</p>
        <br />
        <p>{post.content}</p>
        <br />
        <p>Comments:</p>
        {post.comments.map((comment) => (
          <>
            <p key={comment.id}>{comment.content}</p>
            {comment.user_id === currentUser.id && (
              <Button
                type="link"
                htmltype="button"
                onClick={() => {
                  deleteComment({ post, comment });
                }}
              >
                Delete
              </Button>
            )}
          </>
        ))}
        <Button type="link" htmltype="button" onClick={showCommentModal}>
          Add comment
        </Button>
        <CommentModal
          isCommentModalVisible={isCommentModalVisible}
          setIsCommentModalVisible={setIsCommentModalVisible}
        />
      </div>
      {post.user.id === currentUser.id && (
        <>
          <Button type="primary" onClick={showEditModal}>
            Edit
          </Button>
          <EditModal
            isEditModalVisible={isEditModalVisible}
            setIsEditModalVisible={setIsEditModalVisible}
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
