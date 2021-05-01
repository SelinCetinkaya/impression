import React, { useState, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { usePostsStore } from "../../stores/postsStore";
import { useParams } from "react-router-dom";
import "./CommentModal.css";

function CommentModal({ isCommentModalVisible, setIsCommentModalVisible }) {
  const { posts, addComment } = usePostsStore();
  const [form, setForm] = useState({});
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (posts.length) {
      const post = posts.find((post) => post.id === Number(id));
      setPost(post);
    }
  }, [posts, id]);

  const handleFormChange = ({ key, val }) => {
    setForm({ ...form, [key]: val });
  };

  const handleSubmit = () => {
    addComment({
      post,
      ...form,
    });
    setIsCommentModalVisible(false);
  };

  const handleCancel = () => {
    setIsCommentModalVisible(false);
  };

  if (!post.id) return <div></div>;
  return (
    <>
      <Modal
        title="Add Comment"
        visible={isCommentModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form id="comment-form">
          <Form.Item
            label="Comment"
            name="content"
            rules={[{ required: false }]}
            onChange={(e) => {
              handleFormChange({ key: "content", val: e.target.value });
            }}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CommentModal;
